import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BaseFunctionsService {

  constructor(private router: Router) { }

  // Marcara de telefone para campos de formulários reativos, função executada ao pressionar a tecla
  KeyTel(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      if(valor.length == 16)
        valor = valor.substring(0,(valor.length - 1));

      valor = valor.replace(/\D/g,"");             //Remove tudo o que não é dígito
      valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos

      valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

      form.get(field).setValue(valor);
    });
  }

  KeyMoeda(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      var v = valor.replace(/\D/g,'');
      v = (v/100).toFixed(2) + '';
      v = v.replace(".", ",");
      v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
      v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
      valor = v;

      form.get(field).setValue(valor);
    });
  }

  converteDateDateSql(valor){
    if(valor === ""){
      valor =  '';
    }else{
      let temp = valor.split('/');
      valor = new Date(temp[2]+'-'+temp[1]+'-'+temp[0]);
    }
    return valor;
  }

  converteMoedaFloat(valor){
    if(valor === ""){
      valor =  0;
    }else{
      valor = valor+"";
      valor = valor.replace(".","");
      valor = valor.replace(",",".");
      valor = parseFloat(valor);
    }
    return valor;
  }

  KeyCpf(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      valor = valor.replace(/\D/g,"");
      valor = valor.replace(/(\d{3})(\d)/,"$1.$2");
      valor = valor.replace(/(\d{3})(\d)/,"$1.$2");
      valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

      form.get(field).setValue(valor);
    });
  }

  KeyDate(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      if (valor.match(/^\d{2}$/) !== null) {
        form.get(field).setValue(valor + '/');
      } else if (valor.match(/^\d{2}\/\d{2}$/) !== null) {
        form.get(field).setValue(valor + '/');
      }
    });
  }

  KeyCnpj(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      valor = valor.replace(/\D/g,"");
      valor = valor.replace(/^(\d{2})(\d)/,"$1.$2");
      valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
      valor = valor.replace(/\.(\d{3})(\d)/,".$1/$2");
      valor = valor.replace(/(\d{4})(\d)/,"$1-$2");

      form.get(field).setValue(valor);
    });
  }

  KeyCep(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      valor = valor.replace(/\D/g,"");
      valor = valor.replace(/^(\d{2})(\d)/,"$1.$2");
      valor = valor.replace(/\.(\d{3})(\d)/,".$1-$2");

      form.get(field).setValue(valor);
    });
  }

  KeyNum(form,field) {
    setTimeout(() => {
      var valor = form.get(field).value;

      valor = valor.replace(/\D/g,"");

      form.get(field).setValue(valor);
    });
  }

  showErrors(errors) {
    return (!(typeof errors === "undefined"))?Object.keys(errors).length != 0:false;
  }

  reloadCurrentRoute() {
      window.location.href = window.location.href
  }

  calculaIdade(date) {
    let nascimento = new Date(date.date);
    let hoje = new Date();
    return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
  }

  arrayCompare(a1, a2) {
    if (a1.length != a2.length) return false;
    var length = a2.length;
    for (var i = 0; i < length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }

  /**
   *
   * @param array needle
   * @param any haystack
   */
  inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
      if(typeof haystack[i] == 'object') {
        if(this.arrayCompare(haystack[i], needle)) return true;
      } else {
        if(haystack[i] == needle) return true;
      }
    }
    return false;
  }

  // Função usada como parâmetro da função sort -> para ordenar Ex. arr.sort(compare())
  compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  private typingTimer = null;
  delayFunction(fn,timer) {
    if(this.typingTimer != null) clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(fn,timer);
  }
}
