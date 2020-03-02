import { Component, OnInit} from '@angular/core';
import {ViewSimple} from "../../../../../model";

@Component({
  selector: 'smart-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  view: ViewSimple;

  constructor() {
    this.view = {
      recurso: "Motoristas",
      title: "Editar Registro",
      icon: "fa fa-plus"
    };
  }

  ngOnInit() {
  }

}
