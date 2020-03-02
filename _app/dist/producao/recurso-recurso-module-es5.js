function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recurso-recurso-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/criar/criar.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/criar/criar.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclRecursoCriarCriarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/editar/editar.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/editar/editar.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclRecursoEditarEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/form-entity/form-entity.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/form-entity/form-entity.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclRecursoFormEntityFormEntityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\">\r\n</base-form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/listar/recurso.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/listar/recurso.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclRecursoListarRecursoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/visualizar/visualizar.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/visualizar/visualizar.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclRecursoVisualizarVisualizarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>visualizar works!</p>\n";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/criar/criar.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/criar/criar.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclRecursoCriarCriarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9yZWN1cnNvL2NyaWFyL2NyaWFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/criar/criar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/criar/criar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CriarComponent */

  /***/
  function srcAppFeaturesAdminAclRecursoCriarCriarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          recurso: "Recursos",
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/criar/criar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./criar.component.css */
      "./src/app/features/admin/acl/recurso/criar/criar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CriarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/editar/editar.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/editar/editar.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclRecursoEditarEditarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9yZWN1cnNvL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/editar/editar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/editar/editar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditarComponent */

  /***/
  function srcAppFeaturesAdminAclRecursoEditarEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          recurso: "Recursos",
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/editar/editar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar.component.css */
      "./src/app/features/admin/acl/recurso/editar/editar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EditarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/form-entity/form-entity.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/form-entity/form-entity.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclRecursoFormEntityFormEntityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9yZWN1cnNvL2Zvcm0tZW50aXR5L2Zvcm0tZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/form-entity/form-entity.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/form-entity/form-entity.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FormEntityComponent */

  /***/
  function srcAppFeaturesAdminAclRecursoFormEntityFormEntityComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../base/form-base/form-base */
    "./src/app/features/admin/base/form-base/form-base.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_http_getter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/http-getter */
    "./src/app/services/http-getter.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/http/acl/recurso-http.service */
    "./src/app/services/http/acl/recurso-http.service.ts");

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
        _this.controller = "recurso";
        _this.returnPath = "/admin/acl/".concat(_this.controller);
        _this.elements = [{
          name: "nome",
          label: "Nome",
          type: "text",
          required: true,
          value: '',
          options: [],
          validators: [] // validações adicionais ex.: Validators.required

        }, {
          name: "somente_admin",
          label: "Somente Admin?",
          type: "select",
          required: true,
          value: '',
          options: [{
            id: 0,
            text: 'Não'
          }, {
            id: 1,
            text: 'Sim'
          }],
          validators: [] // validações adicionais ex.: Validators.required

        }];
        return _this;
      }

      return FormEntityComponent;
    }(_base_form_base_form_base__WEBPACK_IMPORTED_MODULE_2__["FormBase"]);

    FormEntityComponent.ctorParameters = function () {
      return [{
        type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_6__["RecursoHttpService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form-entity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-entity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/form-entity/form-entity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-entity.component.css */
      "./src/app/features/admin/acl/recurso/form-entity/form-entity.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_6__["RecursoHttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_http_getter__WEBPACK_IMPORTED_MODULE_4__["HttpGetter"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], FormEntityComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/listar/recurso.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/listar/recurso.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclRecursoListarRecursoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9yZWN1cnNvL2xpc3Rhci9yZWN1cnNvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/listar/recurso.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/listar/recurso.component.ts ***!
    \************************************************************************/

  /*! exports provided: RecursoComponent */

  /***/
  function srcAppFeaturesAdminAclRecursoListarRecursoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecursoComponent", function () {
      return RecursoComponent;
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


    var _base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../base/crud-base/crud-base.component */
    "./src/app/features/admin/base/crud-base/crud-base.component.ts");
    /* harmony import */


    var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/http/acl/recurso-http.service */
    "./src/app/services/http/acl/recurso-http.service.ts");

    var RecursoComponent =
    /*#__PURE__*/
    function (_base_crud_base_crud_) {
      _inherits(RecursoComponent, _base_crud_base_crud_);

      function RecursoComponent(router, serviceHttp, actRoute, changeRef) {
        var _this2;

        _classCallCheck(this, RecursoComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RecursoComponent).call(this, router, serviceHttp, actRoute, changeRef));
        _this2.router = router;
        _this2.serviceHttp = serviceHttp;
        _this2.actRoute = actRoute;
        _this2.changeRef = changeRef;
        _this2.title = "Recursos";
        _this2.controller = "recurso";
        _this2.icon = "fal fa-space-shuttle";
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
        }];
        _this2.columns = [{
          titulo: "Nome",
          campo: "nome"
        }, {
          titulo: "Somente admin?",
          campo: "somente_admin",
          tipo: 'select',
          labels: ['Não', 'Sim']
        }];
        _this2.serachparams = {
          "filter": [],
          "order-by": []
        };
        return _this2;
      }

      return RecursoComponent;
    }(_base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_3__["CrudBaseComponent"]);

    RecursoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    RecursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'recurso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recurso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/listar/recurso.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recurso.component.css */
      "./src/app/features/admin/acl/recurso/listar/recurso.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], RecursoComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/recurso.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/recurso.module.ts ***!
    \**************************************************************/

  /*! exports provided: RecursoModule */

  /***/
  function srcAppFeaturesAdminAclRecursoRecursoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecursoModule", function () {
      return RecursoModule;
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


    var _listar_recurso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listar/recurso.component */
    "./src/app/features/admin/acl/recurso/listar/recurso.component.ts");
    /* harmony import */


    var _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./criar/criar.component */
    "./src/app/features/admin/acl/recurso/criar/criar.component.ts");
    /* harmony import */


    var _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./editar/editar.component */
    "./src/app/features/admin/acl/recurso/editar/editar.component.ts");
    /* harmony import */


    var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./visualizar/visualizar.component */
    "./src/app/features/admin/acl/recurso/visualizar/visualizar.component.ts");
    /* harmony import */


    var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./form-entity/form-entity.component */
    "./src/app/features/admin/acl/recurso/form-entity/form-entity.component.ts");
    /* harmony import */


    var _base_base_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../base/base.module */
    "./src/app/features/admin/base/base.module.ts");
    /* harmony import */


    var _resolvers_acl_recurso_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../resolvers/acl/recurso-resolver */
    "./src/app/resolvers/acl/recurso-resolver.ts");

    var RecursoModule = function RecursoModule() {
      _classCallCheck(this, RecursoModule);
    };

    RecursoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_listar_recurso_component__WEBPACK_IMPORTED_MODULE_6__["RecursoComponent"], _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"], _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"], _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"], _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_10__["FormEntityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _listar_recurso_component__WEBPACK_IMPORTED_MODULE_6__["RecursoComponent"],
        resolve: {
          list: _resolvers_acl_recurso_resolver__WEBPACK_IMPORTED_MODULE_12__["RecursoResolver"]
        },
        data: {
          breadcrumbs: [{
            title: 'Recursos'
          }]
        }
      }, {
        path: 'visualizar',
        component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarComponent"],
        data: {
          breadcrumbs: [{
            title: "Recursos",
            route: "/admin/acl/recurso"
          }, {
            title: "Visualizar Recurso"
          }]
        }
      }, {
        path: 'criar',
        component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_7__["CriarComponent"],
        data: {
          breadcrumbs: [{
            title: "Recursos",
            route: "/admin/acl/recurso"
          }, {
            title: "Criar Recurso"
          }]
        }
      }, {
        path: 'editar/:id',
        component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_8__["EditarComponent"],
        resolve: {
          entity: _resolvers_acl_recurso_resolver__WEBPACK_IMPORTED_MODULE_12__["RecursoResolver"]
        },
        data: {
          breadcrumbs: [{
            title: "Recursos",
            route: "/admin/acl/recurso"
          }, {
            title: "Editar Recurso"
          }]
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _base_base_module__WEBPACK_IMPORTED_MODULE_11__["BaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [_resolvers_acl_recurso_resolver__WEBPACK_IMPORTED_MODULE_12__["RecursoResolver"]]
    })], RecursoModule);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/visualizar/visualizar.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/visualizar/visualizar.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclRecursoVisualizarVisualizarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9yZWN1cnNvL3Zpc3VhbGl6YXIvdmlzdWFsaXphci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/recurso/visualizar/visualizar.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/features/admin/acl/recurso/visualizar/visualizar.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: VisualizarComponent */

  /***/
  function srcAppFeaturesAdminAclRecursoVisualizarVisualizarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/recurso/visualizar/visualizar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./visualizar.component.css */
      "./src/app/features/admin/acl/recurso/visualizar/visualizar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VisualizarComponent);
    /***/
  },

  /***/
  "./src/app/resolvers/acl/recurso-resolver.ts":
  /*!***************************************************!*\
    !*** ./src/app/resolvers/acl/recurso-resolver.ts ***!
    \***************************************************/

  /*! exports provided: RecursoResolver */

  /***/
  function srcAppResolversAclRecursoResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecursoResolver", function () {
      return RecursoResolver;
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


    var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http/acl/recurso-http.service */
    "./src/app/services/http/acl/recurso-http.service.ts");

    var RecursoResolver =
    /*#__PURE__*/
    function (_base_base_resolver__) {
      _inherits(RecursoResolver, _base_base_resolver__);

      function RecursoResolver(httpService) {
        var _this3;

        _classCallCheck(this, RecursoResolver);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RecursoResolver).call(this, httpService));
        _this3.httpService = httpService;
        return _this3;
      }

      return RecursoResolver;
    }(_base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"]);

    RecursoResolver.ctorParameters = function () {
      return [{
        type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"]
      }];
    };

    RecursoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"]])], RecursoResolver);
    /***/
  }
}]);
//# sourceMappingURL=recurso-recurso-module-es5.js.map