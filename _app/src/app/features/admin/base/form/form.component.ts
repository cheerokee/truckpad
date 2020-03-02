import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NotifyMessageService } from "../../../../services/notify-message.service";
import { ElementForm, ViewSimple } from "../../../../model";
import {PrivilegioHttpService} from "../../../../services/http/acl/privilegio-http.service";
import {BaseFunctionsService} from "../../../../services/base-functions.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'base-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() controller: string;
  @Input() returnPath: string;
  @Input() view: ViewSimple;
  @Input() elements: ElementForm[];
  @Input() httpService: any;

  @Output() //EVENTO
  onSearch: EventEmitter<any> = new EventEmitter<any>();

  edit: number|null = null;
  btnSalvar: boolean = true;
  form: FormGroup;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public formBuilder: FormBuilder,
              public changeRef: ChangeDetectorRef,
              private notifyMessage: NotifyMessageService,
              private functions: BaseFunctionsService,
              private datePipe: DatePipe,
              public privilegioHttpService: PrivilegioHttpService) {
  }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      if(params.id !== undefined)
      {
        this.edit = params.id;
        await this.privilegioHttpService.permite(this.view.recurso,'Editar');
      }else{
        await this.privilegioHttpService.permite(this.view.recurso,'Criar');
      }
    });

    this.route.data.subscribe(data => {
      var pos_load_params = [];
      if(data.entity !== undefined){
        let entity = data.entity;
        for(let element of this.elements){
          if(element.type == 'join-select' || element.type == 'join-autocomplete'){
            if(entity._embedded[element.name] !== undefined){
              element.value = entity._embedded[element.name].id;
              let option = {id: entity._embedded[element.name].id,text: entity._embedded[element.name][element.propriedade]};
              element.options = element.options.concat(option);
              pos_load_params.push({ 'name': element.name, 'option' : option });
            }
          }else if(element.type == 'date'){
            element.value =  this.datePipe.transform(entity[element.name].date,'dd/MM/yyyy');
          }else{
            element.value = entity[element.name];
          }
        }
      }

      this.defineFormulario(pos_load_params);
    });
  }

  save()
  {
    this.btnSalvar = false;
    // Função para tratar os dados antes de savar
    this.preSave();

    if(this.edit)
    {
      this.httpService.update(this.edit,this.form.value).subscribe((response) => {
        this.finalizaSave();
      })
    }else{
      this.httpService.create(this.form.value).subscribe((response) => {
        this.finalizaSave();
      })
    }
  }

  preSave() {
    let value: any;
    for(let element of this.elements){
      value = this.form.get(element.name).value;
      switch (element.type) {
        case 'moeda':
          value = this.functions.converteMoedaFloat(value);
          this.form.get(element.name).setValue(value);
          break;
        case 'date':
          value = this.functions.converteDateDateSql(value);
          this.form.get(element.name).setValue(value);
          break;
      }
    }

    return;
  }

  finalizaSave() {
    this.btnSalvar = true;
    this.changeRef.detectChanges();
    this.notifyMessage.success('Registro salvo com sucesso');
    this.router.navigateByUrl(this.returnPath);
  }

  resetGeral() {
    this.defineFormulario([]);
  }

  defineFormulario(pos_load_params) {
    this.form = this.formBuilder.group({});

    for(let i in this.elements){
      let element = this.elements[i];
      let control = new FormControl('');

      if(element.required){
        control.setValidators(Validators.required);
      }

      if(element.type == 'email'){
        control.setValidators(Validators.email);
      }

      for(let validator of element.validators){
        control.setValidators(validator);
      }

      this.form.addControl(element.name, control);

      if(element.value != null && element.value != ''){
        let value = element.value;
        if(element.type == 'number')
          value = Number(value);

        this.form.get(element.name).setValue(value);
      }else{
        this.form.get(element.name).setValue(null);
      }
    }

    if(pos_load_params.length > 0)
      for(let pos_param of pos_load_params)
      {
        let i = this.elements.findIndex(x => x.name === pos_param.name);
        let element = this.elements[i];

        element.options = [];
        this.elements[i].options.concat(pos_param.option);
        this.changeRef.detectChanges();

        element.value = pos_param.option.id;

        this.form.get(element.name).setValue(pos_param.option.id);
      }
  }

  search(e) {
    this.onSearch.emit(e);
  }
}
