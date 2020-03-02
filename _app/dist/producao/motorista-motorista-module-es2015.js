(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["motorista-motorista-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/criar/criar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/criar/criar.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/editar/editar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/editar/editar.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/listar/motorista.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/listar/motorista.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visualizar works!</p>\n");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/criar/criar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/criar/criar.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2NhZGFzdHJvL21vdG9yaXN0YS9jcmlhci9jcmlhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/criar/criar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/criar/criar.component.ts ***!
  \****************************************************************************/
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
            recurso: "Motoristas",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./criar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/criar/criar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./criar.component.css */ "./src/app/features/admin/cadastro/motorista/criar/criar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CriarComponent);



/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/editar/editar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/editar/editar.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2NhZGFzdHJvL21vdG9yaXN0YS9lZGl0YXIvZWRpdGFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/editar/editar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/editar/editar.component.ts ***!
  \******************************************************************************/
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
            recurso: "Motoristas",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/editar/editar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar.component.css */ "./src/app/features/admin/cadastro/motorista/editar/editar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditarComponent);



/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2NhZGFzdHJvL21vdG9yaXN0YS9mb3JtLWVudGl0eS9mb3JtLWVudGl0eS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.ts ***!
  \****************************************************************************************/
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
/* harmony import */ var _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/http/cadastro/motorista-http.service */ "./src/app/services/http/cadastro/motorista-http.service.ts");







let FormEntityComponent = class FormEntityComponent extends _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__["FormBase"] {
    constructor(service, http, httpGetter, authService) {
        super(service, http, httpGetter, authService);
        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.controller = "motorista";
        this.returnPath = `/admin/cadastro/${this.controller}`;
        this.elements = [
            {
                name: "nome",
                label: "Nome",
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
                name: "data_nascimento",
                label: "Data de Nascimento",
                type: "date",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cnh",
                label: "CNH",
                type: "text",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "cpf",
                label: "CPF",
                type: "cpf",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "tipo_cnh",
                label: "Tipo CNH",
                type: "select",
                options: [
                    { id: 'A', text: 'A - Moto' },
                    { id: 'B', text: 'B - Carro' },
                    { id: 'AB', text: 'AB - Carro + Moto' },
                    { id: 'D', text: 'D - Caminhão' },
                    { id: 'AD', text: 'AD - Caminhão + Moto' },
                    { id: 'E', text: 'E - Caminhão com Reboque, Carretas' },
                    { id: 'AE', text: 'AE - Caminhão com Reboque, Carretas + Moto' }
                ],
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "ativo",
                label: "Ativo",
                type: "select",
                options: [
                    { id: 0, text: 'Não' },
                    { id: 1, text: 'Sim' }
                ],
                required: true,
                value: 1,
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
};
FormEntityComponent.ctorParameters = () => [
    { type: _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_6__["MotoristaHttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-entity.component.css */ "./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_6__["MotoristaHttpService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], FormEntityComponent);



/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/listar/motorista.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/listar/motorista.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2NhZGFzdHJvL21vdG9yaXN0YS9saXN0YXIvbW90b3Jpc3RhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/listar/motorista.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/listar/motorista.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MotoristaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoristaComponent", function() { return MotoristaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http/cadastro/motorista-http.service */ "./src/app/services/http/cadastro/motorista-http.service.ts");
/* harmony import */ var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/crud-base/crud-base.component */ "./src/app/features/admin/base/crud-base/crud-base.component.ts");





let MotoristaComponent = class MotoristaComponent extends _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__["CrudBaseComponent"] {
    constructor(router, serviceHttp, actRoute, changeRef) {
        super(router, serviceHttp, actRoute, changeRef);
        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.title = "Motoristas";
        this.controller = "motorista";
        this.icon = "fal fa-truck";
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
                titulo: "Nome",
                name: "nome",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            },
            {
                titulo: "CPF",
                name: "cpf",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            },
            {
                titulo: "Ativo",
                name: "ativo",
                component: "select",
                col: "4",
                strategy: "like",
                options: [
                    { value: 0, label: 'Não' },
                    { value: 1, label: 'Sim' }
                ],
                value: ''
            }
        ];
        this.columns = [
            { titulo: "Nome", campo: "nome" },
            { titulo: "Telefone", campo: "telefone" },
            { titulo: "Data de Nascimento", campo: "data_nascimento", tipo: 'date' },
            { titulo: "CNH", campo: "cnh" },
            { titulo: "Tipo de CNH", campo: "tipo_cnh" },
            { titulo: "CPF", campo: "cpf" },
            { titulo: "Ativo", campo: "ativo", tipo: 'select', labels: ['Não', 'Sim'] }
        ];
        this.serachparams = {
            "filter": [],
            "order-by": []
        };
    }
};
MotoristaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__["MotoristaHttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
MotoristaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'motorista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./motorista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/listar/motorista.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./motorista.component.css */ "./src/app/features/admin/cadastro/motorista/listar/motorista.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__["MotoristaHttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MotoristaComponent);



/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/motorista.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/motorista.module.ts ***!
  \***********************************************************************/
/*! exports provided: MotoristaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoristaModule", function() { return MotoristaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _listar_motorista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar/motorista.component */ "./src/app/features/admin/cadastro/motorista/listar/motorista.component.ts");
/* harmony import */ var _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./criar/criar.component */ "./src/app/features/admin/cadastro/motorista/criar/criar.component.ts");
/* harmony import */ var _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editar/editar.component */ "./src/app/features/admin/cadastro/motorista/editar/editar.component.ts");
/* harmony import */ var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualizar/visualizar.component */ "./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.ts");
/* harmony import */ var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-entity/form-entity.component */ "./src/app/features/admin/cadastro/motorista/form-entity/form-entity.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/features/admin/base/base.module.ts");
/* harmony import */ var _resolvers_cadastro_motorista_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../resolvers/cadastro/motorista-resolver */ "./src/app/resolvers/cadastro/motorista-resolver.ts");













let MotoristaModule = class MotoristaModule {
};
MotoristaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listar_motorista_component__WEBPACK_IMPORTED_MODULE_6__["MotoristaComponent"],
            _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
            _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
            _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
            _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__["FormEntityComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '', component: _listar_motorista_component__WEBPACK_IMPORTED_MODULE_6__["MotoristaComponent"],
                    resolve: { list: _resolvers_cadastro_motorista_resolver__WEBPACK_IMPORTED_MODULE_12__["MotoristaResolver"] },
                    data: { breadcrumbs: [{ title: 'Motoristas' }] }
                },
                {
                    path: 'visualizar',
                    component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
                    data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" }, { title: "Visualizar Motorista" }] }
                },
                {
                    path: 'criar', component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
                    data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" }, { title: "Criar Motorista" }] }
                },
                {
                    path: 'editar/:id', component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
                    resolve: { entity: _resolvers_cadastro_motorista_resolver__WEBPACK_IMPORTED_MODULE_12__["MotoristaResolver"] },
                    data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" }, { title: "Editar Motorista" }] }
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_11__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [
            _resolvers_cadastro_motorista_resolver__WEBPACK_IMPORTED_MODULE_12__["MotoristaResolver"]
        ]
    })
], MotoristaModule);



/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2NhZGFzdHJvL21vdG9yaXN0YS92aXN1YWxpemFyL3Zpc3VhbGl6YXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.ts ***!
  \**************************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visualizar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visualizar.component.css */ "./src/app/features/admin/cadastro/motorista/visualizar/visualizar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisualizarComponent);



/***/ }),

/***/ "./src/app/resolvers/cadastro/motorista-resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/resolvers/cadastro/motorista-resolver.ts ***!
  \**********************************************************/
/*! exports provided: MotoristaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoristaResolver", function() { return MotoristaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base-resolver */ "./src/app/resolvers/base/base-resolver.ts");
/* harmony import */ var _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/cadastro/motorista-http.service */ "./src/app/services/http/cadastro/motorista-http.service.ts");




let MotoristaResolver = class MotoristaResolver extends _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"] {
    constructor(httpService) {
        super(httpService);
        this.httpService = httpService;
    }
};
MotoristaResolver.ctorParameters = () => [
    { type: _services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__["MotoristaHttpService"] }
];
MotoristaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_cadastro_motorista_http_service__WEBPACK_IMPORTED_MODULE_3__["MotoristaHttpService"]])
], MotoristaResolver);



/***/ })

}]);
//# sourceMappingURL=motorista-motorista-module-es2015.js.map