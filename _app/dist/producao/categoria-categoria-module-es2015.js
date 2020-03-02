(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form-entity [view]=\"view\"></form-entity>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visualizar works!</p>\n");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/categoria.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/categoria.module.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaModule", function() { return CategoriaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar/categoria.component */ "./src/app/features/admin/transporte/categoria/listar/categoria.component.ts");
/* harmony import */ var _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./criar/criar.component */ "./src/app/features/admin/transporte/categoria/criar/criar.component.ts");
/* harmony import */ var _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editar/editar.component */ "./src/app/features/admin/transporte/categoria/editar/editar.component.ts");
/* harmony import */ var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualizar/visualizar.component */ "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts");
/* harmony import */ var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-entity/form-entity.component */ "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/features/admin/base/base.module.ts");
/* harmony import */ var _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../resolvers/transporte/categoria-resolver */ "./src/app/resolvers/transporte/categoria-resolver.ts");













let CategoriaModule = class CategoriaModule {
};
CategoriaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaComponent"],
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
                    path: '', component: _listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaComponent"],
                    resolve: { list: _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"] },
                    data: { breadcrumbs: [{ title: 'Categorias' }] }
                },
                {
                    path: 'visualizar',
                    component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
                    data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" }, { title: "Visualizar Categoria" }] }
                },
                {
                    path: 'criar', component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
                    data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" }, { title: "Criar Categoria" }] }
                },
                {
                    path: 'editar/:id', component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
                    resolve: { entity: _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"] },
                    data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" }, { title: "Editar Categoria" }] }
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_11__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [
            _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"]
        ]
    })
], CategoriaModule);



/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/criar/criar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/criar/criar.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2NyaWFyL2NyaWFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/criar/criar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/criar/criar.component.ts ***!
  \******************************************************************************/
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
            recurso: "Categorias",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./criar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./criar.component.css */ "./src/app/features/admin/transporte/categoria/criar/criar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CriarComponent);



/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/editar/editar.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/editar/editar.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/editar/editar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/editar/editar.component.ts ***!
  \********************************************************************************/
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
            recurso: "Categorias",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar.component.css */ "./src/app/features/admin/transporte/categoria/editar/editar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditarComponent);



/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2Zvcm0tZW50aXR5L2Zvcm0tZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts ***!
  \******************************************************************************************/
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
/* harmony import */ var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/http/transporte/categoria.service */ "./src/app/services/http/transporte/categoria.service.ts");







let FormEntityComponent = class FormEntityComponent extends _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__["FormBase"] {
    constructor(service, http, httpGetter, authService) {
        super(service, http, httpGetter, authService);
        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.controller = "categoria";
        this.returnPath = `/admin/transporte/${this.controller}`;
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
                name: "codigo",
                label: "Código",
                type: "number",
                required: true,
                value: '',
                validators: [] // validações adicionais ex.: Validators.required
            }
        ];
    }
};
FormEntityComponent.ctorParameters = () => [
    { type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-entity.component.css */ "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], FormEntityComponent);



/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/listar/categoria.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/listar/categoria.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2xpc3Rhci9jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/listar/categoria.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/listar/categoria.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http/transporte/categoria.service */ "./src/app/services/http/transporte/categoria.service.ts");
/* harmony import */ var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/crud-base/crud-base.component */ "./src/app/features/admin/base/crud-base/crud-base.component.ts");





let CategoriaComponent = class CategoriaComponent extends _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__["CrudBaseComponent"] {
    constructor(router, serviceHttp, actRoute, changeRef) {
        super(router, serviceHttp, actRoute, changeRef);
        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.title = "Categorias";
        this.controller = "categoria";
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
                titulo: "Nome",
                name: "nome",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            },
            {
                titulo: "Código",
                name: "codigo",
                component: "text",
                col: "4",
                strategy: "like",
                value: ""
            }
        ];
        this.columns = [
            { titulo: "Nome", campo: "nome" },
            { titulo: "Código", campo: "codigo" }
        ];
        this.serachparams = {
            "filter": [],
            "order-by": []
        };
    }
};
CategoriaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categoria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categoria.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categoria.component.css */ "./src/app/features/admin/transporte/categoria/listar/categoria.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CategoriaComponent);



/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL3Zpc3VhbGl6YXIvdmlzdWFsaXphci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts ***!
  \****************************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visualizar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visualizar.component.css */ "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisualizarComponent);



/***/ }),

/***/ "./src/app/resolvers/transporte/categoria-resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/resolvers/transporte/categoria-resolver.ts ***!
  \************************************************************/
/*! exports provided: CategoriaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaResolver", function() { return CategoriaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base-resolver */ "./src/app/resolvers/base/base-resolver.ts");
/* harmony import */ var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/transporte/categoria.service */ "./src/app/services/http/transporte/categoria.service.ts");




let CategoriaResolver = class CategoriaResolver extends _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"] {
    constructor(httpService) {
        super(httpService);
        this.httpService = httpService;
    }
};
CategoriaResolver.ctorParameters = () => [
    { type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] }
];
CategoriaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]])
], CategoriaResolver);



/***/ })

}]);
//# sourceMappingURL=categoria-categoria-module-es2015.js.map