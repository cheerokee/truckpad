function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/criar/criar.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/criar/criar.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPerfilCriarCriarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/editar/editar.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/editar/editar.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPerfilEditarEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form-entity [view]=\"view\"></form-entity>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/form-entity/form-entity.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/form-entity/form-entity.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPerfilFormEntityFormEntityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-form [controller]=\"controller\"\r\n           [returnPath]=\"returnPath\"\r\n           [view]=\"view\"\r\n           [elements]=\"elements\"\r\n           [httpService]=\"httpService\"\r\n           (onSearch)=\"search($event)\">\r\n</base-form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/listar/perfil.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/listar/perfil.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPerfilListarPerfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<base-listar [listView]=\"listView\"\r\n             [filter]=\"filter\"\r\n             [columns]=\"columns\"\r\n             [list]=\"list\"\r\n             (onDelete)=\"delete($event)\"\r\n             (onFilter)=\"filtering($event)\">\r\n    <base-pagination *ngIf=\"this.list !== undefined\"\r\n                     class=\"pagination\"\r\n                     [data]=\"this.list\"\r\n                     (onPaginate)=\"paginate($event)\" ></base-pagination>\r\n</base-listar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/visualizar/visualizar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/visualizar/visualizar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPerfilVisualizarVisualizarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>visualizar works!</p>\n";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/criar/criar.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/criar/criar.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPerfilCriarCriarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wZXJmaWwvY3JpYXIvY3JpYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/criar/criar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/criar/criar.component.ts ***!
    \********************************************************************/

  /*! exports provided: CriarComponent */

  /***/
  function srcAppFeaturesAdminAclPerfilCriarCriarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          recurso: "Perfis",
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/criar/criar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./criar.component.css */
      "./src/app/features/admin/acl/perfil/criar/criar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CriarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/editar/editar.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/editar/editar.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPerfilEditarEditarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wZXJmaWwvZWRpdGFyL2VkaXRhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/editar/editar.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/editar/editar.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EditarComponent */

  /***/
  function srcAppFeaturesAdminAclPerfilEditarEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          recurso: "Perfis",
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/editar/editar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar.component.css */
      "./src/app/features/admin/acl/perfil/editar/editar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EditarComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/form-entity/form-entity.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/form-entity/form-entity.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPerfilFormEntityFormEntityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wZXJmaWwvZm9ybS1lbnRpdHkvZm9ybS1lbnRpdHkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/form-entity/form-entity.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/form-entity/form-entity.component.ts ***!
    \********************************************************************************/

  /*! exports provided: FormEntityComponent */

  /***/
  function srcAppFeaturesAdminAclPerfilFormEntityFormEntityComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/http/acl/perfil-http.service */
    "./src/app/services/http/acl/perfil-http.service.ts");
    /* harmony import */


    var _base_form_base_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../base/form-base/form-base */
    "./src/app/features/admin/base/form-base/form-base.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_http_getter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/http-getter */
    "./src/app/services/http-getter.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");

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
        _this.controller = "perfil";
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
          name: "admin",
          label: "É admin?",
          type: "select",
          required: false,
          value: 0,
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
    }(_base_form_base_form_base__WEBPACK_IMPORTED_MODULE_3__["FormBase"]);

    FormEntityComponent.ctorParameters = function () {
      return [{
        type: _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_2__["PerfilHttpService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _services_http_getter__WEBPACK_IMPORTED_MODULE_5__["HttpGetter"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    FormEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form-entity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-entity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/form-entity/form-entity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-entity.component.css */
      "./src/app/features/admin/acl/perfil/form-entity/form-entity.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_2__["PerfilHttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_http_getter__WEBPACK_IMPORTED_MODULE_5__["HttpGetter"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], FormEntityComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/listar/perfil.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/listar/perfil.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPerfilListarPerfilComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wZXJmaWwvbGlzdGFyL3BlcmZpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/listar/perfil.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/listar/perfil.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppFeaturesAdminAclPerfilListarPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
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


    var _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/http/acl/perfil-http.service */
    "./src/app/services/http/acl/perfil-http.service.ts");

    var PerfilComponent =
    /*#__PURE__*/
    function (_base_crud_base_crud_) {
      _inherits(PerfilComponent, _base_crud_base_crud_);

      function PerfilComponent(router, serviceHttp, actRoute, changeRef) {
        var _this2;

        _classCallCheck(this, PerfilComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PerfilComponent).call(this, router, serviceHttp, actRoute, changeRef));
        _this2.router = router;
        _this2.serviceHttp = serviceHttp;
        _this2.actRoute = actRoute;
        _this2.changeRef = changeRef;
        _this2.title = "Perfis";
        _this2.controller = "perfil";
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
          titulo: "É admin?",
          campo: "admin",
          tipo: 'select',
          labels: ['Não', 'Sim']
        }];
        _this2.serachparams = {
          "filter": [],
          "order-by": []
        };
        return _this2;
      }

      return PerfilComponent;
    }(_base_crud_base_crud_base_component__WEBPACK_IMPORTED_MODULE_3__["CrudBaseComponent"]);

    PerfilComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_4__["PerfilHttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/listar/perfil.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.component.css */
      "./src/app/features/admin/acl/perfil/listar/perfil.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_4__["PerfilHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], PerfilComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/perfil.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/perfil.module.ts ***!
    \************************************************************/

  /*! exports provided: PerfilModule */

  /***/
  function srcAppFeaturesAdminAclPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilModule", function () {
      return PerfilModule;
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


    var _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./criar/criar.component */
    "./src/app/features/admin/acl/perfil/criar/criar.component.ts");
    /* harmony import */


    var _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./editar/editar.component */
    "./src/app/features/admin/acl/perfil/editar/editar.component.ts");
    /* harmony import */


    var _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./visualizar/visualizar.component */
    "./src/app/features/admin/acl/perfil/visualizar/visualizar.component.ts");
    /* harmony import */


    var _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./form-entity/form-entity.component */
    "./src/app/features/admin/acl/perfil/form-entity/form-entity.component.ts");
    /* harmony import */


    var _base_base_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../base/base.module */
    "./src/app/features/admin/base/base.module.ts");
    /* harmony import */


    var _listar_perfil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./listar/perfil.component */
    "./src/app/features/admin/acl/perfil/listar/perfil.component.ts");
    /* harmony import */


    var _resolvers_acl_perfil_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../resolvers/acl/perfil-resolver */
    "./src/app/resolvers/acl/perfil-resolver.ts");

    var PerfilModule = function PerfilModule() {
      _classCallCheck(this, PerfilModule);
    };

    PerfilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_listar_perfil_component__WEBPACK_IMPORTED_MODULE_11__["PerfilComponent"], _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__["CriarComponent"], _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__["EditarComponent"], _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__["VisualizarComponent"], _form_entity_form_entity_component__WEBPACK_IMPORTED_MODULE_9__["FormEntityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _listar_perfil_component__WEBPACK_IMPORTED_MODULE_11__["PerfilComponent"],
        resolve: {
          list: _resolvers_acl_perfil_resolver__WEBPACK_IMPORTED_MODULE_12__["PerfilResolver"]
        },
        data: {
          breadcrumbs: [{
            title: 'Perfis'
          }]
        }
      }, {
        path: 'visualizar',
        component: _visualizar_visualizar_component__WEBPACK_IMPORTED_MODULE_8__["VisualizarComponent"],
        data: {
          breadcrumbs: [{
            title: "Perfis",
            route: "/admin/acl/perfil"
          }, {
            title: "Visualizar Ação"
          }]
        }
      }, {
        path: 'criar',
        component: _criar_criar_component__WEBPACK_IMPORTED_MODULE_6__["CriarComponent"],
        data: {
          breadcrumbs: [{
            title: "Perfis",
            route: "/admin/acl/perfil"
          }, {
            title: "Criar Ação"
          }]
        }
      }, {
        path: 'editar/:id',
        component: _editar_editar_component__WEBPACK_IMPORTED_MODULE_7__["EditarComponent"],
        resolve: {
          entity: _resolvers_acl_perfil_resolver__WEBPACK_IMPORTED_MODULE_12__["PerfilResolver"]
        },
        data: {
          breadcrumbs: [{
            title: "Perfis",
            route: "/admin/acl/perfil"
          }, {
            title: "Editar Ação"
          }]
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _base_base_module__WEBPACK_IMPORTED_MODULE_10__["BaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [_resolvers_acl_perfil_resolver__WEBPACK_IMPORTED_MODULE_12__["PerfilResolver"]]
    })], PerfilModule);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/visualizar/visualizar.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/visualizar/visualizar.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPerfilVisualizarVisualizarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wZXJmaWwvdmlzdWFsaXphci92aXN1YWxpemFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/perfil/visualizar/visualizar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/features/admin/acl/perfil/visualizar/visualizar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: VisualizarComponent */

  /***/
  function srcAppFeaturesAdminAclPerfilVisualizarVisualizarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/perfil/visualizar/visualizar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./visualizar.component.css */
      "./src/app/features/admin/acl/perfil/visualizar/visualizar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VisualizarComponent);
    /***/
  },

  /***/
  "./src/app/resolvers/acl/perfil-resolver.ts":
  /*!**************************************************!*\
    !*** ./src/app/resolvers/acl/perfil-resolver.ts ***!
    \**************************************************/

  /*! exports provided: PerfilResolver */

  /***/
  function srcAppResolversAclPerfilResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilResolver", function () {
      return PerfilResolver;
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


    var _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http/acl/perfil-http.service */
    "./src/app/services/http/acl/perfil-http.service.ts");

    var PerfilResolver =
    /*#__PURE__*/
    function (_base_base_resolver__) {
      _inherits(PerfilResolver, _base_base_resolver__);

      function PerfilResolver(httpService) {
        var _this3;

        _classCallCheck(this, PerfilResolver);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PerfilResolver).call(this, httpService));
        _this3.httpService = httpService;
        return _this3;
      }

      return PerfilResolver;
    }(_base_base_resolver__WEBPACK_IMPORTED_MODULE_2__["BaseResolver"]);

    PerfilResolver.ctorParameters = function () {
      return [{
        type: _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_3__["PerfilHttpService"]
      }];
    };

    PerfilResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_3__["PerfilHttpService"]])], PerfilResolver);
    /***/
  }
}]);
//# sourceMappingURL=perfil-perfil-module-es5.js.map