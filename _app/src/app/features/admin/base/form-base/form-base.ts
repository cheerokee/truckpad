import { Input, OnInit } from "@angular/core";
import { ElementForm, ElementSearch } from "../../../../model";
import { HttpClient } from "@angular/common/http";
import { HttpGetter } from "../../../../services/http-getter";
import { AuthService } from "../../../../services/auth.service";

export class FormBase implements OnInit {

    @Input() view;

    controller: string;
    returnPath: string;
    elements: ElementForm[];
    httpService: any;

    constructor(public service: any,
                public http: HttpClient,
                public httpGetter: HttpGetter,
                public authService: AuthService) {
        this.httpService = service;
    }

    ngOnInit(): void {

    }

    setOptions(httpService,field,seachString: string = "") {
        let alias: string;
        let entity: string;

        if(typeof field === 'object')
        {
            alias = field.alias;
            entity = field.entity;
        }else{
            alias = field;
            entity = field;
        }

        if(httpService){
            let element = this.elements.find(x => x.name == alias);
            if(element){
                httpService.getByLike(seachString).subscribe((response) => {
                    element.options = [];
                    for(let item of response._embedded[entity]){
                        element.options.push({ text: ( element.propriedade !== undefined) ? item[element.propriedade] : item.nome, id: item.id });
                    }
                });
            }
        }
    }

    search(e: ElementSearch){
        let element = this.elements.find(x => x.name === e.element);
        if(element !== undefined){
            element.value = e.value;
            let srv = this.httpGetter.getService(element.name);
            this.setOptions(srv,element.name,e.value);
        }
    }
}
