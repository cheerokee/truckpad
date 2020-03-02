import { Component, OnInit } from '@angular/core';
import { ViewSimple } from "../../../../../model";

@Component({
  selector: 'smart-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  view: ViewSimple;

  constructor() {
    this.view = {
      recurso: "Recursos",
      title: "Criar Registro",
      icon: "fa fa-plus"
    };
  }

  ngOnInit() {
  }

}
