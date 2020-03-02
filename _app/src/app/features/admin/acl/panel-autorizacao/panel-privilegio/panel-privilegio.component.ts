import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from "@angular/forms";

import {
  SearchParams,
  ElementForm,
  Possibilidade,
  Privilegio,
  Recurso
} from "../../../../../model";

import { AcaoHttpService } from "../../../../../services/http/acl/acao-http.service";
import { RecursoHttpService } from "../../../../../services/http/acl/recurso-http.service";
import { PossibilidadeHttpService } from "../../../../../services/http/acl/possibilidade-http.service";
import { UsuarioHttpService } from "../../../../../services/http/cadastro/usuario-http.service";
import { PrivilegioHttpService } from "../../../../../services/http/acl/privilegio-http.service";
import { PerfilHttpService } from "../../../../../services/http/acl/perfil-http.service";

import { NotifyMessageService } from "../../../../../services/notify-message.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'panel-privilegio',
  templateUrl: './panel-privilegio.component.html',
  styleUrls: ['./panel-privilegio.component.css']
})
export class PanelPrivilegioComponent implements OnInit {

  public form: FormGroup;

  private possibilidades: Possibilidade[] = [];
  private privilegios: Privilegio[] = [];

  private saveProgress: boolean = false;

  public element_perfil: ElementForm = {
    name: "perfil",
    label: "Perfil",
    type: "select",
    required: true,
    value: '',
    options: [],
    validators: []
  };

  public element_recurso: ElementForm = {
    name: "recurso",
    label: "Recurso",
    type: "select",
    required: true,
    value: '',
    options: [],
    validators: []
  };

  public element_acao: ElementForm = {
    name: "acao",
    label: "Ação",
    type: "select",
    required: true,
    value: '',
    options: [],
    validators: []
  };

  public searchParams: SearchParams = {
    filter : [
      {
        type : 'andx',
        conditions : [],
        where : 'and'
      }
    ]
  };

  public isAdmin: boolean = false;

  constructor(private acaoHttpService: AcaoHttpService,
              private recursoHttpService: RecursoHttpService,
              private possibilidadeHttpService: PossibilidadeHttpService,
              private usuarioHttpService: UsuarioHttpService,
              private authService: AuthService,
              private privilegioHttpService: PrivilegioHttpService,
              private perfilHttpService: PerfilHttpService,
              public  formBuilder: FormBuilder,
              private notifyMessage: NotifyMessageService,
              private changeRef: ChangeDetectorRef) {
    this.defineFormulario();

    this.loadPerfis();
    this.loadRecursos();
    this.loadPossibilidades();
  }

  async ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.changeRef.detectChanges();
  }

  defineFormulario() {
    this.form = this.formBuilder.group({
      perfil    :   [ null ],
      recurso   :   [ null ],
      acao      :   [ null ]
    });
  }

  loadPerfis() {
    this.perfilHttpService.listAll().then((response) => {
      let perfis = response;
      for(let perfil of perfis){
        this.element_perfil.options.push({ id: perfil.id, text: perfil.nome });
        this.changeRef.detectChanges();
      }
    });
  }

  loadRecursos() {
    this.recursoHttpService.listAll().then((response) => {
      for(let recurso of response){
        this.element_recurso.options.push({ id: recurso.id, text: recurso.nome });
        this.changeRef.detectChanges();
      }
    });
  }

  loadAcoes(recurso_id) {
    let searchParams: SearchParams = {
      "filter": [
        {
          "field" : "recurso",
          "type" : "eq",
          "value" : recurso_id
        }
      ],
      "order-by": []
    };

    this.possibilidadeHttpService.list(searchParams).subscribe((response) => {
      this.element_acao.options = [];
      for(let possibilidade of response._embedded.possibilidade){
        this.element_acao.options.push({
          id: possibilidade._embedded.acao.id, text: possibilidade._embedded.acao.nome
        });
      }
      this.changeRef.detectChanges();
    });
  }

  loadPossibilidades(page: number = 1) {
    if(!this.form.get('perfil').value)
      return;

    let searchparams: SearchParams = {
        "filter" : [
            {
                type : 'andx',
                conditions : [],
                where : 'and'
            }
        ],
        "order-by" : [
            { 'type' : 'field', 'field' : 'recurso','direction' : 'ASC'}
        ]
    };

    if(this.form.get('recurso').value > 0) //Se o filtro de recurso for acionado, qualquer possibilidade que não seja do escopo do recurso será ignorado
        searchparams.filter[0].conditions.push({ type : 'eq', field : 'recurso', value : this.form.get('recurso').value  });

    if(this.form.get('acao').value > 0) //Se o filtro de ação for acionado, qualquer possibilidade que não seja do escopo da ação será ignorado
        searchparams.filter[0].conditions.push({ type : 'eq', field : 'acao', value : this.form.get('acao').value  });


    if(searchparams.filter[0].conditions.length == 0)
        searchparams.filter = [];

    this.possibilidades = [];

    this.possibilidadeHttpService.listAll(searchparams).then((response: Possibilidade[]) => {
      let recursoAnterior = null;
      for(let item of response){

          let recurso = item._embedded.recurso;
          let acao = item._embedded.acao;

          if(recursoAnterior != recurso.id){
              recursoAnterior = recurso.id;

              let possibilidade = {
                  recurso : recurso.id,
                  acoes: [],
                  _embedded : {
                      recurso : recurso
                  }
              };

              this.possibilidades.push(possibilidade);
          }

          let possibilidade = this.possibilidades.find(x => x.recurso == recurso.id);
          possibilidade.acoes.push(acao);
      }

      this.changeRef.detectChanges();
    });
  }

  async loadPrivilegios(searchParams) {
    this.privilegios = [];

    this.privilegioHttpService.listAll(searchParams).then((response) => {
      this.privilegios = response;
      this.changeRef.detectChanges();
    });
  }

  async changePerfil(element: ElementForm,id_perfil: number) {
    this.filter(element,id_perfil);
  }

  changeRecurso(element: ElementForm,id_recurso: number) {
    this.filter(element,id_recurso);
    this.form.get('acao').setValue(null);
    this.loadAcoes(id_recurso);
  }

  /**
   * Função que manipula uma consulta dos privilégios e faz a busca no banco atualizando as condições
   * @param elemento
   * @param valor
   */
  async filter(elemento: ElementForm,valor: number) {
    // Setando o valor no elemento do formulario e no atributo valor do elemento
    this.form.get(elemento.name).setValue(valor);
    elemento.value = valor;

    // Buscar as condições da variável que define a query
    let conditions = this.searchParams.filter[0].conditions;

    // Se o campo que está sendo feito a pesquisa foi selecionado um valor nao nulo
    if(valor > 0){
      // Tentar encontrar dentro da query a condição relacionada ao filtro selecionado
      let condition = conditions.find(x => x.field === elemento.name);

      // Se encontrar apenas atualiza o valor da condição
      if(condition !== undefined){
        condition.value = valor;
      }else // Senão adicione uma condição a query
        conditions.push({
          type : 'eq',
          field : elemento.name,
          value : valor
        });

    }else{ // Se foi selecionado uma opção nula, remover da query a condição
      let i = conditions.findIndex(x => x.field === elemento.name);
      conditions.splice(i,1);
    }

    if(!this.form.get('perfil').value)
      return;
    await this.loadPrivilegios(this.searchParams);
    this.loadPossibilidades();
  }

  save(recurso_id: number,acao_id: number) {
    this.inProgress(true);

    let searchParams: any = {
      "acao" : acao_id,
      "recurso" : recurso_id
    };

    if(this.form.get('perfil').value > 0)
      searchParams.perfil = this.form.get('perfil').value;

    this.privilegioHttpService.findBy(searchParams).subscribe((list) => {
      if(list.total_items > 0) {
        let item = list._embedded.privilegio[0];
        this.privilegioHttpService.destroy(item.id).subscribe(() => {
          this.inProgress(false);
        },error => {
          console.log(error);
          this.notifyMessage.error("Erro ao deletar o privilégio");
          this.inProgress(false);
        })
      }else{
        let privilegio: Privilegio = {
          acao : acao_id,
          recurso : recurso_id
        };

        if(this.form.get('perfil').value > 0)
          privilegio.perfil = this.form.get('perfil').value;

        this.privilegioHttpService.create(privilegio).subscribe((response) => {
          this.inProgress(false);
        },error => {
          console.log(error);
          this.notifyMessage.error("Erro ao salvar o privilégio");
          this.inProgress(false);
        });
      }
    },error => {
      console.log(error);
      this.notifyMessage.error("Erro na verificação de privilégios");
      this.inProgress(false);
    });
  }

  inProgress(progress: boolean) {
    this.saveProgress = progress;
    this.changeRef.detectChanges();
  }

  isChecked(recurso_id,acao_id) {
    if( this.form.get('perfil').value && this.privilegios !== undefined ){
      return ( this.privilegios.find( x => x._embedded.recurso.id == recurso_id && x._embedded.acao.id === acao_id) !== undefined ) ? true : false;
    }else{
      return false;
    }
  }
}
