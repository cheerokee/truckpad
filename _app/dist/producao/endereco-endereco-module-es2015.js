(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["endereco-endereco-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/criar/criar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/criar/criar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/editar/editar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/editar/editar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/listar/endereco.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/listar/endereco.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visualizar works!</p>\n");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco.module.ts ***!
  \************************************************************/
/*! exports provided: EnderecoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoModule", function() { return EnderecoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.module */ "./src/app/features/admin/base/base.module.ts");







let EnderecoModule = class EnderecoModule {
};
EnderecoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'cidade',
                    loadChildren: () => Promise.all(/*! import() | cidade-cidade-module */[__webpack_require__.e("common"), __webpack_require__.e("cidade-cidade-module")]).then(__webpack_require__.bind(null, /*! ./cidade/cidade.module */ "./src/app/features/admin/endereco/cidade/cidade.module.ts")).then(m => m.CidadeModule)
                },
                {
                    path: 'endereco',
                    loadChildren: () => Promise.all(/*! import() | endereco-endereco-module */[__webpack_require__.e("common"), __webpack_require__.e("endereco-endereco-module")]).then(__webpack_require__.bind(null, /*! ./endereco/endereco.module */ "./src/app/features/admin/endereco/endereco/endereco.module.ts")).then(m => m.EnderecoModule)
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"]
        ]
    })
], EnderecoModule);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/criar/criar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/criar/criar.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2VuZGVyZWNvL2VuZGVyZWNvL2NyaWFyL2NyaWFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/criar/criar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/criar/criar.component.ts ***!
  \***************************************************************************/
/*! exports provided: CriarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarComponent", function() { return CriarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CriarComponent = class CriarComponent {
    constructor() {
        this.view = {
            recurso: "Endereços",
            title: "Criar Registro",
            icon: "fa fa-plus"
        };
    }
    ngOnInit() {
    }
};
CriarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-criar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./criar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/criar/criar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./criar.component.css */ "./src/app/features/admin/endereco/endereco/criar/criar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CriarComponent);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/editar/editar.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/editar/editar.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2VuZGVyZWNvL2VuZGVyZWNvL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/editar/editar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/editar/editar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarComponent", function() { return EditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditarComponent = class EditarComponent {
    constructor() {
        this.view = {
            recurso: "Endereços",
            title: "Editar Registro",
            icon: "fa fa-plus"
        };
    }
    ngOnInit() {
    }
};
EditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-editar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/editar/editar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar.component.css */ "./src/app/features/admin/endereco/endereco/editar/editar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditarComponent);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/endereco.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/endereco.module.ts ***!
  \*********************************************************************/
/*! exports provided: EnderecoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoModule", function() { return EnderecoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar/criar.component */ "./src/app/features/admin/endereco/endereco/criar/criar.component.ts");
/* harmony import */ var _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editar/editar.component */ "./src/app/features/admin/endereco/endereco/editar/editar.component.ts");
/* harmony import */ var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visualizar/visualizar.component */ "./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.ts");
/* harmony import */ var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-entity/form-entity.component */ "./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/features/admin/base/base.module.ts");
/* harmony import */ var _resolvers_endereco_endereco_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resolvers/endereco/endereco-resolver */ "./src/app/resolvers/endereco/endereco-resolver.ts");
/* harmony import */ var _listar_endereco_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listar/endereco.component */ "./src/app/features/admin/endereco/endereco/listar/endereco.component.ts");













let EnderecoModule = class EnderecoModule {
};
EnderecoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listar_endereco_component__WEBPACK_IMPORTED_MODULE_12__["EnderecoComponent"],
            _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__["CriarComponent"],
            _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__["EditarComponent"],
            _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__["VisualizarComponent"],
            _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_9__["FormEntityComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '', component: _listar_endereco_component__WEBPACK_IMPORTED_MODULE_12__["EnderecoComponent"],
                    resolve: { list: _resolvers_endereco_endereco_resolver__WEBPACK_IMPORTED_MODULE_11__["EnderecoResolver"] },
                    data: { breadcrumbs: [{ title: 'Endereços' }] }
                },
                {
                    path: 'visualizar',
                    component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__["VisualizarComponent"],
                    data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" }, { title: "Visualizar Endereço" }] }
                },
                {
                    path: 'criar', component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__["CriarComponent"],
                    data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" }, { title: "Criar Endereço" }] }
                },
                {
                    path: 'editar/:id', component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__["EditarComponent"],
                    resolve: { entity: _resolvers_endereco_endereco_resolver__WEBPACK_IMPORTED_MODULE_11__["EnderecoResolver"] },
                    data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" }, { title: "Editar Endereço" }] }
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_10__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [
            _resolvers_endereco_endereco_resolver__WEBPACK_IMPORTED_MODULE_11__["EnderecoResolver"]
        ]
    })
], EnderecoModule);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2VuZGVyZWNvL2VuZGVyZWNvL2Zvcm0tZW50aXR5L2Zvcm0tZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEntityComponent", function() { return FormEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_getter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/http-getter */ "./src/app/services/http-getter.ts");
/* harmony import */ var _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/form-base/form-base */ "./src/app/features/admin/base/form-base/form-base.ts");
/* harmony import */ var _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/http/endereco/endereco.service */ "./src/app/services/http/endereco/endereco.service.ts");







let FormEntityComponent = class FormEntityComponent extends _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__["FormBase"] {
    constructor(service, http, httpGetter, authService) {
        super(service, http, httpGetter, authService);
        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.controller = "endereco";
        this.returnPath = `/admin/endereco/${this.controller}`;
        this.elements = [
            {
                name: "logradouro",
                label: "Logradouro",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "numero",
                label: "Número",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "bairro",
                label: "Bairro",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cep",
                label: "CEP",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "contato",
                label: "Contato",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "telefone",
                label: "Telefone",
                type: "telefone",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "latitude",
                label: "Latitude",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "longitude",
                label: "Longitude",
                type: "text",
                required: false,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "terminal",
                label: "Terminal",
                type: "select",
                options: [
                    { id: 0, text: 'Não' },
                    { id: 1, text: 'Sim' }
                ],
                required: true,
                value: 1,
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cidade",
                label: "Cidade",
                type: "join-autocomplete",
                propriedade: 'nome',
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "motorista",
                label: "Motorista",
                type: "join-autocomplete",
                propriedade: 'nome',
                required: false,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
        let field;
        let srv;
        field = {
            alias: 'cidade',
            entity: 'cidade' // Nome da tabela join
        };
        srv = this.httpGetter.getService(field);
        this.setOptions(srv, field);
        field = {
            alias: 'motorista',
            entity: 'motorista' // Nome da tabela join
        };
        srv = this.httpGetter.getService(field);
        this.setOptions(srv, field);
    }
};
FormEntityComponent.ctorParameters = () => [
    { type: _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_6__["EnderecoService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-entity.component.css */ "./src/app/features/admin/endereco/endereco/form-entity/form-entity.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_6__["EnderecoService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], FormEntityComponent);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/listar/endereco.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/listar/endereco.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2VuZGVyZWNvL2VuZGVyZWNvL2xpc3Rhci9lbmRlcmVjby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/listar/endereco.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/listar/endereco.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EnderecoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoComponent", function() { return EnderecoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/crud-base/crud-base.component */ "./src/app/features/admin/base/crud-base/crud-base.component.ts");
/* harmony import */ var _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/http/endereco/endereco.service */ "./src/app/services/http/endereco/endereco.service.ts");





let EnderecoComponent = class EnderecoComponent extends _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_3__["CrudBaseComponent"] {
    constructor(router, serviceHttp, actRoute, changeRef) {
        super(router, serviceHttp, actRoute, changeRef);
        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.title = "Endereços";
        this.controller = "endereco";
        this.icon = "fal fa-list";
        this.listView = {
            title: this.title,
            icon: this.icon,
            controller: this.controller,
            novo: {
                show: true,
                url: `${this.current_url}/criar`
            },
            visualizar: {
                show: false,
                url: `${this.current_url}/visualizar`
            },
            editar: {
                show: true,
                url: `${this.current_url}/editar`
            },
            deletar: true
        };
        this.filter = [
            {
                titulo: "Contato",
                name: "contato",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            },
            {
                titulo: "Logradouro",
                name: "logradouro",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            },
            {
                titulo: "Cidade",
                name: "cidade",
                joinField: "nome",
                component: "join-autocomplete",
                col: "4",
                strategy: "eq",
                value: ""
            },
            {
                titulo: "Motorista",
                name: "motorista",
                joinField: "nome",
                component: "join-autocomplete",
                col: "4",
                strategy: "eq",
                value: ""
            }
        ];
        this.columns = [
            { titulo: "Contato", campo: "contato" },
            { titulo: "Logradouro", campo: "logradouro" },
            { titulo: "Número", campo: "numero" },
            { titulo: "Cep", campo: "cep" },
            { titulo: "Cidade", campo: "cidade", tipo: "join", attr: 'nome' },
            { titulo: "Motorista", campo: "motorista", tipo: "join", attr: 'nome' },
            { titulo: "Terminal", campo: "terminal", tipo: 'select', labels: ['Não', 'Sim'] }
        ];
        this.serachparams = {
            "filter": [],
            "order-by": []
        };
    }
};
EnderecoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
EnderecoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'endereco',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./endereco.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/listar/endereco.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./endereco.component.css */ "./src/app/features/admin/endereco/endereco/listar/endereco.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], EnderecoComponent);



/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2VuZGVyZWNvL2VuZGVyZWNvL3Zpc3VhbGl6YXIvdmlzdWFsaXphci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VisualizarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarComponent", function() { return VisualizarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisualizarComponent = class VisualizarComponent {
    constructor() { }
    ngOnInit() {
    }
};
VisualizarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-visualizar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visualizar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visualizar.component.css */ "./src/app/features/admin/endereco/endereco/visualizar/visualizar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisualizarComponent);



/***/ }),

/***/ "./src/app/resolvers/endereco/endereco-resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/resolvers/endereco/endereco-resolver.ts ***!
  \*********************************************************/
/*! exports provided: EnderecoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoResolver", function() { return EnderecoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base-resolver */ "./src/app/resolvers/base/base-resolver.ts");
/* harmony import */ var _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/endereco/endereco.service */ "./src/app/services/http/endereco/endereco.service.ts");




let EnderecoResolver = class EnderecoResolver extends _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"] {
    constructor(httpService) {
        super(httpService);
        this.httpService = httpService;
    }
};
EnderecoResolver.ctorParameters = () => [
    { type: _services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_3__["EnderecoService"] }
];
EnderecoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_3__["EnderecoService"]])
], EnderecoResolver);



/***/ })

}]);
//# sourceMappingURL=endereco-endereco-module-es2015.js.map