import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {Acao, Possibilidade, SearchParams} from "../../../../../model";
import { AcaoHttpService } from "../../../../../services/http/acl/acao-http.service";
import { RecursoHttpService } from "../../../../../services/http/acl/recurso-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PossibilidadeHttpService} from "../../../../../services/http/acl/possibilidade-http.service";
import {NotifyMessageService} from "../../../../../services/notify-message.service";

@Component({
  selector: 'panel-possibilidade',
  templateUrl: './panel-possibilidade.component.html',
  styleUrls: ['./panel-possibilidade.component.css']
})
export class PanelPossibilidadeComponent implements OnInit {

  public acoes: Acao[];
  public recursos: any;
  public possibilidades: any = [];

  public typingTimer = null;
  public recurso_search: string;

  public btnSalvar: boolean = true;
  public selectToDelete: any = { acao: null, recurso: null };

  public form: FormGroup;

  constructor(private acaoHttpService: AcaoHttpService,
              private recursoHttpService: RecursoHttpService,
              private possibilidadeHttpService: PossibilidadeHttpService,
              public formBuilder: FormBuilder,
              private notifyMessage: NotifyMessageService,
              private changeRef: ChangeDetectorRef) {

    this.defineFormulario();

    this.acaoHttpService.listAll().then((response) => {
      this.acoes = response;
      this.changeRef.detectChanges();
    });

    this.loadRecursos();
    this.loadPossibilidades();
  }

  ngOnInit() {
  }

  loadRecursos(like:string = '') {
    if(like != ''){
      this.recursoHttpService.getByLike(like).subscribe((response) => {
        this.recursos = response;
        this.changeRef.detectChanges();
      });
    }else{
      this.recursoHttpService.listResolver().subscribe((response) => {
        this.recursos = response;
        this.changeRef.detectChanges();
      });
    }
  }

  loadPossibilidades(page: number = 1) {
    let searchparams: SearchParams = {
      "filter" : [],
      "order-by" : [
        { 'type' : 'field', 'field' : 'recurso','direction' : 'ASC'}
      ]
    };
    this.possibilidades = [];
    this.possibilidadeHttpService.listAll(searchparams).then((response: Possibilidade[]) => {
      let recursoAnterior = null;
      for(let item of response){
        let recurso = item._embedded.recurso;
        let acao = item._embedded.acao;

        if(recursoAnterior != recurso.id){
          recursoAnterior = recurso.id;
          this.possibilidades.push(
              { recurso_id : recurso.id, recurso_nome: recurso.nome, acoes: [] }
              );
        }
        let possibilidade = this.possibilidades.find(x => x.recurso_id == recurso.id);
        possibilidade.acoes.push(acao);
      }

      this.changeRef.detectChanges();
    });
  }

  selecionaRecurso(id) {
    this.form.get('recurso').setValue(id);
  }

  search() {
    this.form.get('recurso').setValue(null);
    if(this.typingTimer != null)
      clearTimeout(this.typingTimer);

    this.typingTimer = setTimeout(() => {
      this.loadRecursos(this.recurso_search);
    },1000);
  }

  save() {
    this.btnSalvar = false;
    let searchparams = {
      "filter" : [{
        "type" : "andx",
        "conditions" : [
          { "field" : "acao", "type" : "eq", "value" : this.form.get('acao').value },
          { "field" : "recurso", "type" : "eq", "value" : this.form.get('recurso').value }
        ]
      }],
      "order-by" : []
    };

    this.possibilidadeHttpService.list(searchparams).subscribe((response) => {
      setTimeout(() => {
        if(response.total_items == 0){
          this.possibilidadeHttpService.create(this.form.value).subscribe(() => {
            this.form.get('acao').setValue(null);
            this.btnSalvar = true;
            this.changeRef.detectChanges();
            this.notifyMessage.success("Possibilidade cadastrada com sucesso");
            this.loadPossibilidades();
          },(error) => {
            console.log(error);
            this.notifyMessage.success("Houve um erro ao salvar a possibilidade, tente novamente");
            this.btnSalvar = true;
          });
        }else{
          this.defineFormulario();
          this.btnSalvar = true;
          this.changeRef.detectChanges();
          this.notifyMessage.error("A possibilidade já foi cadastrada");
        }
      },1000);
    });
  }

  resetGeral() {
    this.defineFormulario();
  }

  defineFormulario() {
    this.form = this.formBuilder.group({
      acao        :   [ null ,[ Validators.required ]],
      recurso     :   [ null ,[ Validators.required ]]
    });
  }

  del(item) {
    this.selectToDelete = item;
  }

  delete(e) {
    let searchparams = {
      "filter" : [{
        "type" : "andx",
        "conditions" : [
          { "field" : "acao", "type" : "eq", "value" : this.selectToDelete.acao },
          { "field" : "recurso", "type" : "eq", "value" : this.selectToDelete.recurso }
        ]
      }],
      "order-by" : []
    };

    this.possibilidadeHttpService.list(searchparams).subscribe((response) => {
      this.possibilidadeHttpService.destroy(response._embedded.possibilidade[0].id).subscribe(() => {
        this.notifyMessage.success("Registro deletado com sucesso");
        this.selectToDelete = null;
        this.loadPossibilidades();
      },(error) => {
        this.notifyMessage.error("Houve um erro ao deletar a possibilidade");
        this.selectToDelete = null;
      });
    });
  }

  cancel(e) {
    console.log(e);
  }
}
