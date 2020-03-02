import { Component, OnInit } from '@angular/core';
import { Viagem } from "../../../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'smart-painel-viagem',
  templateUrl: './painel-viagem.component.html',
  styleUrls: ['./painel-viagem.component.css']
})
export class PainelViagemComponent implements OnInit {

  form: FormGroup;
  btnCadastro: boolean = true;

  viagem: Viagem;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.redefinirFormulario();
  }

  redefinirFormulario() {
    this.form = this.formBuilder.group({
      status            :   [ '' ,[ Validators.required ]],
      origem            :   [ '' ,[ Validators.required,Validators.email ]],
      destino           :   [ '' ,[ Validators.required ]],
      motorista_veiculo :   [ '' ,[ Validators.required ]]
    });
  }

  salvaViagem() {

  }
}
