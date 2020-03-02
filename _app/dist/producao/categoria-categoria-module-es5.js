function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransporteCategoriaCriarCriarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransporteCategoriaEditarEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransporteCategoriaFormEntityFormEntityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransporteCategoriaListarCategoriaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransporteCategoriaVisualizarVisualizarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>visualizar works!</p>\n";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/categoria.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/categoria.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CategoriaModule */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaCategoriaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaModule", function () {
      return CategoriaModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../bootstrap/bootstrap.module */
    "./src/app/bootstrap/bootstrap.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listar/categoria.component */
    "./src/app/features/admin/transporte/categoria/listar/categoria.component.ts");
    /* harmony import */


    var _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./criar/criar.component */
    "./src/app/features/admin/transporte/categoria/criar/criar.component.ts");
    /* harmony import */


    var _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./editar/editar.component */
    "./src/app/features/admin/transporte/categoria/editar/editar.component.ts");
    /* harmony import */


    var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./visualizar/visualizar.component */
    "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts");
    /* harmony import */


    var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./form-entity/form-entity.component */
    "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts");
    /* harmony import */


    var _base_base_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../base/base.module */
    "./src/app/features/admin/base/base.module.ts");
    /* harmony import */


    var _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../resolvers/transporte/categoria-resolver */
    "./src/app/resolvers/transporte/categoria-resolver.ts");

    var CategoriaModule = function CategoriaModule() {
      _classCallCheck(this, CategoriaModule);
    };

    CategoriaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaComponent"], _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"], _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"], _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"], _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__["FormEntityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _listar_categoria_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaComponent"],
        resolve: {
          list: _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"]
        },
        data: {
          breadcrumbs: [{
            title: 'Categorias'
          }]
        }
      }, {
        path: 'visualizar',
        component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
        data: {
          breadcrumbs: [{
            title: "Categorias",
            route: "/admin/transporte/categoria"
          }, {
            title: "Visualizar Categoria"
          }]
        }
      }, {
        path: 'criar',
        component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
        data: {
          breadcrumbs: [{
            title: "Categorias",
            route: "/admin/transporte/categoria"
          }, {
            title: "Criar Categoria"
          }]
        }
      }, {
        path: 'editar/:id',
        component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
        resolve: {
          entity: _resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"]
        },
        data: {
          breadcrumbs: [{
            title: "Categorias",
            route: "/admin/transporte/categoria"
          }, {
            title: "Editar Categoria"
          }]
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _base_base_module__WEBPACK_IMPORTED_MODULE_11__["BaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [_resolvers_transporte_categoria_resolver__WEBPACK_IMPORTED_MODULE_12__["CategoriaResolver"]]
    })], CategoriaModule);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/criar/criar.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/criar/criar.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaCriarCriarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2NyaWFyL2NyaWFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/criar/criar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/criar/criar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CriarComponent */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaCriarCriarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarComponent", function () {
      return CriarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CriarComponent =
    /*#__PURE__*/
    function () {
      function CriarComponent() {
        _classCallCheck(this, CriarComponent);

        this.view = {
          recurso: "Categorias",
          title: "Criar Registro",
          icon: "fa fa-plus"
        };
      }

      _createClass(CriarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CriarComponent;
    }();

    CriarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-criar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./criar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/criar/criar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./criar.component.css */
      "./src/app/features/admin/transporte/categoria/criar/criar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CriarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/editar/editar.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/editar/editar.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaEditarEditarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/editar/editar.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/editar/editar.component.ts ***!
    \********************************************************************************/

  /*! exports provided: EditarComponent */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaEditarEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarComponent", function () {
      return EditarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditarComponent =
    /*#__PURE__*/
    function () {
      function EditarComponent() {
        _classCallCheck(this, EditarComponent);

        this.view = {
          recurso: "Categorias",
          title: "Editar Registro",
          icon: "fa fa-plus"
        };
      }

      _createClass(EditarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditarComponent;
    }();

    EditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-editar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/editar/editar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar.component.css */
      "./src/app/features/admin/transporte/categoria/editar/editar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EditarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaFormEntityFormEntityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2Zvcm0tZW50aXR5L2Zvcm0tZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FormEntityComponent */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaFormEntityFormEntityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormEntityComponent", function () {
      return FormEntityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_http_getter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/http-getter */
    "./src/app/services/http-getter.ts");
    /* harmony import */


    var _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../base/form-base/form-base */
    "./src/app/features/admin/base/form-base/form-base.ts");
    /* harmony import */


    var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/http/transporte/categoria.service */
    "./src/app/services/http/transporte/categoria.service.ts");

    var FormEntityComponent =
    /*#__PURE__*/
    function (_base_form_base_form_) {
      _inherits(FormEntityComponent, _base_form_base_form_);

      function FormEntityComponent(service, http, httpGetter, authService) {
        var _this;

        _classCallCheck(this, FormEntityComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormEntityComponent).call(this, service, http, httpGetter, authService));
        _this.service = service;
        _this.http = http;
        _this.httpGetter = httpGetter;
        _this.authService = authService;
        _this.controller = "categoria";
        _this.returnPath = "/admin/transporte/".concat(_this.controller);
        _this.elements = [{
          name: "nome",
          label: "Nome",
          type: "text",
          required: true,
          value: '',
          validators: [] // validações adicionais ex.: Validators.required

        }, {
          name: "codigo",
          label: "Código",
          type: "number",
          required: true,
          value: '',
          validators: [] // validações adicionais ex.: Validators.required

        }];
        return _this;
      }

      return FormEntityComponent;
    }(_base_form_base_form_base__WEBPACK_IMPORTED_MODULE_5__["FormBase"]);

    FormEntityComponent.ctorParameters = function () {
      return [{
        type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form-entity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-entity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-entity.component.css */
      "./src/app/features/admin/transporte/categoria/form-entity/form-entity.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], FormEntityComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/listar/categoria.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/listar/categoria.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaListarCategoriaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL2xpc3Rhci9jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/listar/categoria.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/listar/categoria.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CategoriaComponent */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaListarCategoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function () {
      return CategoriaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/http/transporte/categoria.service */
    "./src/app/services/http/transporte/categoria.service.ts");
    /* harmony import */


    var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../base/crud-base/crud-base.component */
    "./src/app/features/admin/base/crud-base/crud-base.component.ts");

    var CategoriaComponent =
    /*#__PURE__*/
    function (_base_crud_base_crud_) {
      _inherits(CategoriaComponent, _base_crud_base_crud_);

      function CategoriaComponent(router, serviceHttp, actRoute, changeRef) {
        var _this2;

        _classCallCheck(this, CategoriaComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CategoriaComponent).call(this, router, serviceHttp, actRoute, changeRef));
        _this2.router = router;
        _this2.serviceHttp = serviceHttp;
        _this2.actRoute = actRoute;
        _this2.changeRef = changeRef;
        _this2.title = "Categorias";
        _this2.controller = "categoria";
        _this2.icon = "fal fa-list";
        _this2.listView = {
          title: _this2.title,
          icon: _this2.icon,
          controller: _this2.controller,
          novo: {
            show: true,
            url: "".concat(_this2.current_url, "/criar")
          },
          visualizar: {
            show: false,
            url: "".concat(_this2.current_url, "/visualizar")
          },
          editar: {
            show: true,
            url: "".concat(_this2.current_url, "/editar")
          },
          deletar: true
        };
        _this2.filter = [{
          titulo: "Nome",
          name: "nome",
          component: "text",
          col: "4",
          strategy: "like",
          value: ""
        }, {
          titulo: "Código",
          name: "codigo",
          component: "text",
          col: "4",
          strategy: "like",
          value: ""
        }];
        _this2.columns = [{
          titulo: "Nome",
          campo: "nome"
        }, {
          titulo: "Código",
          campo: "codigo"
        }];
        _this2.serachparams = {
          "filter": [],
          "order-by": []
        };
        return _this2;
      }

      return CategoriaComponent;
    }(_base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_4__["CrudBaseComponent"]);

    CategoriaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    CategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'categoria',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categoria.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/listar/categoria.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categoria.component.css */
      "./src/app/features/admin/transporte/categoria/listar/categoria.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CategoriaComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaVisualizarVisualizarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvY2F0ZWdvcmlhL3Zpc3VhbGl6YXIvdmlzdWFsaXphci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: VisualizarComponent */

  /***/
  function srcAppFeaturesAdminTransporteCategoriaVisualizarVisualizarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizarComponent", function () {
      return VisualizarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VisualizarComponent =
    /*#__PURE__*/
    function () {
      function VisualizarComponent() {
        _classCallCheck(this, VisualizarComponent);
      }

      _createClass(VisualizarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisualizarComponent;
    }();

    VisualizarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-visualizar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./visualizar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./visualizar.component.css */
      "./src/app/features/admin/transporte/categoria/visualizar/visualizar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VisualizarComponent);
    /***/
  },

  /***/
  "./src/app/resolvers/transporte/categoria-resolver.ts":
  /*!************************************************************!*\
    !*** ./src/app/resolvers/transporte/categoria-resolver.ts ***!
    \************************************************************/

  /*! exports provided: CategoriaResolver */

  /***/
  function srcAppResolversTransporteCategoriaResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaResolver", function () {
      return CategoriaResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_base_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base/base-resolver */
    "./src/app/resolvers/base/base-resolver.ts");
    /* harmony import */


    var _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http/transporte/categoria.service */
    "./src/app/services/http/transporte/categoria.service.ts");

    var CategoriaResolver =
    /*#__PURE__*/
    function (_base_base_resolver__) {
      _inherits(CategoriaResolver, _base_base_resolver__);

      function CategoriaResolver(httpService) {
        var _this3;

        _classCallCheck(this, CategoriaResolver);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CategoriaResolver).call(this, httpService));
        _this3.httpService = httpService;
        return _this3;
      }

      return CategoriaResolver;
    }(_base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"]);

    CategoriaResolver.ctorParameters = function () {
      return [{
        type: _services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]
      }];
    };

    CategoriaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_transporte_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]])], CategoriaResolver);
    /***/
  }
}]);
//# sourceMappingURL=categoria-categoria-module-es5.js.map