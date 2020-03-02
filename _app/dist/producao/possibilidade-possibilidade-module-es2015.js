(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["possibilidade-possibilidade-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/criar/criar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/criar/criar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/editar/editar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/editar/editar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visualizar works!</p>\n");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/criar/criar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/criar/criar.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wb3NzaWJpbGlkYWRlL2NyaWFyL2NyaWFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/criar/criar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/criar/criar.component.ts ***!
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
            recurso: "Possibilidades",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./criar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/criar/criar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./criar.component.css */ "./src/app/features/admin/acl/possibilidade/criar/criar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CriarComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/editar/editar.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/editar/editar.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wb3NzaWJpbGlkYWRlL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/editar/editar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/editar/editar.component.ts ***!
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
            recurso: "Possibilidades",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/editar/editar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar.component.css */ "./src/app/features/admin/acl/possibilidade/editar/editar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditarComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wb3NzaWJpbGlkYWRlL2Zvcm0tZW50aXR5L2Zvcm0tZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.ts ***!
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
/* harmony import */ var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/http/acl/possibilidade-http.service */ "./src/app/services/http/acl/possibilidade-http.service.ts");
/* harmony import */ var _services_http_getter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/http-getter */ "./src/app/services/http-getter.ts");
/* harmony import */ var _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/form-base/form-base */ "./src/app/features/admin/base/form-base/form-base.ts");







let FormEntityComponent = class FormEntityComponent extends _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_6__["FormBase"] {
    constructor(service, http, httpGetter, authService) {
        super(service, http, httpGetter, authService);
        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.controller = "possibilidade";
        this.returnPath = `/admin/acl/${this.controller}`;
        this.elements = [
            {
                name: "acao",
                label: "Ação",
                type: "join-select",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            },
            {
                name: "recurso",
                label: "Recurso",
                type: "join-autocomplete",
                required: true,
                value: '',
                options: [],
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
        let field;
        let srv;
        field = 'acao';
        srv = this.httpGetter.getService(field);
        this.setOptions(srv, field);
        field = 'recurso';
        let serachparams = {
            "filter": [],
            "order-by": []
        };
        srv = this.httpGetter.getService(field);
        this.setOptions(srv, field);
    }
};
FormEntityComponent.ctorParameters = () => [
    { type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_4__["PossibilidadeHttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_http_getter__WEBPACK_IMPORTED_MODULE_5__["HttpGetter"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-entity.component.css */ "./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_4__["PossibilidadeHttpService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_http_getter__WEBPACK_IMPORTED_MODULE_5__["HttpGetter"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], FormEntityComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wb3NzaWJpbGlkYWRlL2xpc3Rhci9wb3NzaWJpbGlkYWRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.ts ***!
  \************************************************************************************/
/*! exports provided: PossibilidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibilidadeComponent", function() { return PossibilidadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http/acl/possibilidade-http.service */ "./src/app/services/http/acl/possibilidade-http.service.ts");
/* harmony import */ var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/crud-base/crud-base.component */ "./src/app/features/admin/base/crud-base/crud-base.component.ts");





let PossibilidadeComponent = class PossibilidadeComponent extends _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__["CrudBaseComponent"] {
    constructor(router, serviceHttp, actRoute, changeRef) {
        super(router, serviceHttp, actRoute, changeRef);
        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.title = "Possibilidades";
        this.controller = "possibilidade";
        this.icon = "fal fa-space-shuttle";
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
                titulo: "Ação",
                name: "acao",
                joinField: "nome",
                component: "join-select",
                col: "4",
                strategy: "eq",
                value: ""
            },
            {
                titulo: "Recurso",
                name: "recurso",
                joinField: "nome",
                component: "join-autocomplete",
                col: "4",
                strategy: "eq",
                value: ""
            }
        ];
        this.columns = [
            { titulo: "Ação", campo: "acao", tipo: "join", attr: 'nome' },
            { titulo: "Recurso", campo: "recurso", tipo: "join", attr: 'nome' }
        ];
        this.serachparams = {
            "filter": [],
            "order-by": []
        };
    }
};
PossibilidadeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__["PossibilidadeHttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PossibilidadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'possibilidade',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./possibilidade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./possibilidade.component.css */ "./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__["PossibilidadeHttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PossibilidadeComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/possibilidade.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/possibilidade.module.ts ***!
  \**************************************************************************/
/*! exports provided: PossibilidadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibilidadeModule", function() { return PossibilidadeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _listar_possibilidade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar/possibilidade.component */ "./src/app/features/admin/acl/possibilidade/listar/possibilidade.component.ts");
/* harmony import */ var _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./criar/criar.component */ "./src/app/features/admin/acl/possibilidade/criar/criar.component.ts");
/* harmony import */ var _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editar/editar.component */ "./src/app/features/admin/acl/possibilidade/editar/editar.component.ts");
/* harmony import */ var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualizar/visualizar.component */ "./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.ts");
/* harmony import */ var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-entity/form-entity.component */ "./src/app/features/admin/acl/possibilidade/form-entity/form-entity.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/features/admin/base/base.module.ts");
/* harmony import */ var _resolvers_acl_possibilidade_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../resolvers/acl/possibilidade-resolver */ "./src/app/resolvers/acl/possibilidade-resolver.ts");













let PossibilidadeModule = class PossibilidadeModule {
};
PossibilidadeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listar_possibilidade_component__WEBPACK_IMPORTED_MODULE_6__["PossibilidadeComponent"],
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
                    path: '', component: _listar_possibilidade_component__WEBPACK_IMPORTED_MODULE_6__["PossibilidadeComponent"],
                    resolve: { list: _resolvers_acl_possibilidade_resolver__WEBPACK_IMPORTED_MODULE_12__["PossibilidadeResolver"] },
                    data: { breadcrumbs: [{ title: 'Possibilidades' }] }
                },
                {
                    path: 'visualizar',
                    component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
                    data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" }, { title: "Visualizar Possibilidade" }] }
                },
                {
                    path: 'criar', component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
                    data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" }, { title: "Criar Possibilidade" }] }
                },
                {
                    path: 'editar/:id', component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
                    resolve: { entity: _resolvers_acl_possibilidade_resolver__WEBPACK_IMPORTED_MODULE_12__["PossibilidadeResolver"] },
                    data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" }, { title: "Editar Possibilidade" }] }
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_11__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [
            _resolvers_acl_possibilidade_resolver__WEBPACK_IMPORTED_MODULE_12__["PossibilidadeResolver"]
        ]
    })
], PossibilidadeModule);



/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wb3NzaWJpbGlkYWRlL3Zpc3VhbGl6YXIvdmlzdWFsaXphci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visualizar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visualizar.component.css */ "./src/app/features/admin/acl/possibilidade/visualizar/visualizar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisualizarComponent);



/***/ }),

/***/ "./src/app/resolvers/acl/possibilidade-resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/resolvers/acl/possibilidade-resolver.ts ***!
  \*********************************************************/
/*! exports provided: PossibilidadeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibilidadeResolver", function() { return PossibilidadeResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base-resolver */ "./src/app/resolvers/base/base-resolver.ts");
/* harmony import */ var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/acl/possibilidade-http.service */ "./src/app/services/http/acl/possibilidade-http.service.ts");




let PossibilidadeResolver = class PossibilidadeResolver extends _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"] {
    constructor(httpService) {
        super(httpService);
        this.httpService = httpService;
    }
};
PossibilidadeResolver.ctorParameters = () => [
    { type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__["PossibilidadeHttpService"] }
];
PossibilidadeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_3__["PossibilidadeHttpService"]])
], PossibilidadeResolver);



/***/ })

}]);
//# sourceMappingURL=possibilidade-possibilidade-module-es2015.js.map