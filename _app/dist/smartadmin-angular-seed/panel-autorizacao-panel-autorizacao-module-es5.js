function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-autorizacao-panel-autorizacao-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPanelAutorizacaoPanelAutorizacaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"subheader\">\r\n    <h1 class=\"subheader-title\">\r\n        <i class=\"subheader-icon fal fa-lock-alt\"></i> Painel de Autorização\r\n    </h1>\r\n</div>\r\n<div class=\"panel\">\r\n    <div class=\"panel-container show\">\r\n        <div class=\"panel-content\">\r\n            <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"\r\n                       [ngClass]=\"{ 'active' : tab == 'panel-privilegio' }\"\r\n                       data-toggle=\"tab\"\r\n                       (click)=\"tabChange('panel-privilegio')\"\r\n                       href=\"#panel-privilegio\">\r\n                        <i class=\"fal fa-home mr-1\"></i>Gerenciador de Privilégios\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isAdmin\" class=\"nav-item\">\r\n                    <a class=\"nav-link\"\r\n                       [ngClass]=\"{ 'active' : tab == 'panel-possibilidade' }\"\r\n                       data-toggle=\"tab\"\r\n                       (click)=\"tabChange('panel-possibilidade')\"\r\n                       href=\"#panel-possibilidade\">\r\n                        <i class=\"fal fa-user mr-1\"></i>Gerenciador de Possibilidades\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content py-3\">\r\n                <hr />\r\n                <panel-privilegio class=\"tab-pane fade\"\r\n                                  [ngClass]=\"{ 'show active' : tab == 'panel-privilegio' }\"\r\n                                  [id]=\"'panel-privilegio'\"\r\n                                  role=\"tabpanel\"></panel-privilegio>\r\n                <panel-possibilidade class=\"tab-pane fade\"\r\n                                     *ngIf=\"isAdmin\"\r\n                                     [ngClass]=\"{ 'show active' : tab == 'panel-possibilidade' }\"\r\n                                     [id]=\"'panel-possibilidade'\"\r\n                                     role=\"tabpanel\"></panel-possibilidade>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPanelAutorizacaoPanelPossibilidadePanelPossibilidadeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=\"form-panel-possibilidade\" (ngSubmit)=\"save()\"></form>\r\n<div class=\"row mt-5 mb-5\">\r\n    <div class=\"col-md-10 offset-1 card bg-gray-50 pt-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h3>Gerenciador de Possibilidades</h3>\r\n                <p class=\"text-justify\">\r\n                    Devemos definir o que podemos fazer com cada recurso,\r\n                    geramente cada recurso tem suas possibilidades definidas automaticamente quando o usuário\r\n                    se depara com a verificação de permissão.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div [formGroup]=\"form\" class=\"col-md-12 form-group\">\r\n                <label class=\"form-label mb-3\">Selecione o Recurso</label>\r\n                <div class=\"row\">\r\n                    <div *ngFor=\"let recurso of recursos?._embedded.recurso\"\r\n                         class=\"col-md-3 mb-3\">\r\n                        <button type=\"button\"\r\n                                (click)=\"selecionaRecurso(recurso.id)\"\r\n                                class=\"form-control btn btn-primary waves-effect waves-themed\">\r\n                            {{ recurso.nome }}\r\n                            <span *ngIf=\"recurso.id == form.get('recurso').value\"\r\n                                  class=\"badge bg-primary-500 ml-2\">\r\n                        <i class=\"fal fa-check\"></i>\r\n                    </span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\"\r\n                       class=\"d-none\"\r\n                       form=\"form-panel-possibilidade\"\r\n                       [id]=\"'recurso'\"\r\n                       formControlName=\"recurso\" />\r\n                <field-error [field]=\"form.get('recurso')\"\r\n                             [label]=\"'Recurso'\"\r\n                             [messages]=\"[]\"></field-error>\r\n            </div>\r\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\r\n                <label [for]=\"'acao'\" class=\"form-label mb-3\">Escolha a Ação</label>\r\n                <select [id]=\"'acao'\"\r\n                        formControlName=\"acao\"\r\n                        form=\"form-panel-possibilidade\"\r\n                        class=\"form-control form-control\">\r\n                    <option [ngValue]=\"null\" >Selecione...</option>\r\n                    <option *ngFor=\"let acao of acoes\" [ngValue]=\"acao?.id\">{{ acao?.nome }}</option>\r\n                </select>\r\n                <field-error [field]=\"form?.get('acao')\"\r\n                             [label]=\"'Ação'\"\r\n                             [messages]=\"[]\"></field-error>\r\n            </div>\r\n            <div class=\"col-md-9 form-group\">\r\n                <label class=\"form-label mb-3\">&nbsp;</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">\r\n                    <i class=\"fal fa-search\"></i>\r\n                </span>\r\n                    </div>\r\n                    <input type=\"text\"\r\n                           class=\"form-control form-control\"\r\n                           (keyup)=\"search()\"\r\n                           [(ngModel)]=\"recurso_search\"\r\n                           placeholder=\"Pesquise o Recurso\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel-toolbar border-top pt-3 pb-3\">\r\n                    <button type=\"submit\"\r\n                            form=\"form-panel-possibilidade\"\r\n                            id=\"entrar\"\r\n                            [hidden]=\"!btnSalvar\"\r\n                            [disabled]=\"!form.valid\"\r\n                            title=\"SALVAR\"\r\n                            class=\"btn btn-sm btn-primary waves-effect waves-themed\">\r\n                        <i class=\"fal fa-save\"></i>&nbsp;Salvar\r\n                    </button>\r\n                    <button class=\"btn btn-sm btn-danger waves-effect waves-themed\"\r\n                            type=\"button\"\r\n                            [hidden]=\"btnSalvar\"\r\n                            disabled=\"\">\r\n                            <span class=\"spinner-grow spinner-grow-sm\"\r\n                                  role=\"status\"\r\n                                  aria-hidden=\"true\"></span>\r\n                        Aguarde...\r\n                    </button>\r\n                    <button type=\"button\"\r\n                            title=\"CANCELAR\"\r\n                            (click)=\"resetGeral()\"\r\n                            class=\"ml-2 btn btn-sm btn-danger waves-effect waves-themed\">\r\n                        <i class=\"fal fa-times\"></i>&nbsp;Cancelar\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr >\r\n<div class=\"row mt-4\">\r\n    <div class=\"col-md-12\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>Recurso</th>\r\n                <th>Possibilidades</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let possibilidade of possibilidades\">\r\n                <td>{{ possibilidade.recurso_nome }}</td>\r\n                <td>\r\n                    <button *ngFor=\"let acao of possibilidade.acoes\"\r\n                            type=\"button\"\r\n                            [swal]=\"deleteSwal\"\r\n                            (click)=\"del({acao: acao.id,recurso: possibilidade.recurso_id})\"\r\n                            class=\"btn btn-xs btn-secondary waves-effect waves-themed m-1\">\r\n                        {{ acao.nome }} <i class=\"fal fa-times\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<swal #deleteSwal\r\n      title=\"Deseja deletar o registro?\"\r\n      text=\"Essa ação é irreversível\"\r\n      icon=\"question\"\r\n      [showCancelButton]=\"true\"\r\n      [focusCancel]=\"true\"\r\n      [confirmButtonText]=\"'Sim'\"\r\n      [cancelButtonText]=\"'Não'\"\r\n      (confirm)=\"delete($event)\" (cancel)=\"cancel($event)\">\r\n</swal>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminAclPanelAutorizacaoPanelPrivilegioPanelPrivilegioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-5 mb-5\">\n    <div class=\"col-md-10 offset-1 card bg-gray-50 pt-2\">\n        <div class=\"row\">\n            <div class=\"col-md-12 pt-2\">\n                <h4 class=\"font-weight-bold text-primary\">\n                    FAÇA O FILTRO\n                </h4>\n                <hr />\n            </div>\n            <div *ngIf=\"isAdmin\" [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'clinica'\" class=\"form-label\">Escolha a Clínica</label>\n                <base-join-autocomplete [form]=\"form\"\n                                        [element]=\"element_clinica\"\n                                        (onValue)=\"changeClinica(element_clinica,$event)\"\n                                        (onSearch)=\"search($event)\"></base-join-autocomplete>\n                <field-error [field]=\"form?.get('clinica')\"\n                             [label]=\"'Clinica'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'perfil'\" class=\"form-label\">Escolha o Perfil</label>\n                <base-select (onValue)=\"changePerfil(element_perfil,$event)\"\n                             [element]=\"element_perfil\"\n                             [form]=\"form\"></base-select>\n                <field-error [field]=\"form?.get('perfil')\"\n                             [label]=\"'Perfil'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'recurso'\" class=\"form-label\">Escolha o Recurso</label>\n                <base-select (onValue)=\"changeRecurso(element_recurso,$event)\"\n                             [element]=\"element_recurso\"\n                             [form]=\"form\"></base-select>\n                <field-error [field]=\"form?.get('recurso')\"\n                             [label]=\"'Recurso'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'acao'\" class=\"form-label\">Escolha a Ação</label>\n                <base-select *ngIf=\"form.get('recurso').value !== null\"\n                             (onValue)=\"filter(element_acao,$event)\"\n                             [element]=\"element_acao\"\n                             [form]=\"form\"></base-select>\n                <p *ngIf=\"form.get('recurso').value == null\"\n                   class=\"alert alert-warning p-2\">\n                    Selecione o recurso primeiro\n                </p>\n                <field-error [field]=\"form?.get('acao')\"\n                             [label]=\"'Ação'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n        </div>\n    </div>\n</div>\n<hr >\n<div class=\"row mt-4\">\n    <div class=\"col-md-12\">\n        <h4 class=\"text-primary font-weight-bold\">PRIVILÉGIOS</h4>\n        <p *ngIf=\"!form.get('perfil').value\"\n           class=\"alert alert-warning\">\n            Selecione o perfil antes de determinar os privilégios\n        </p>\n        <table *ngIf=\"form.get('perfil').value\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\n                        Recurso\n                    </th>\n                    <th>\n                        Ações\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let possibilidade of possibilidades\">\n                    <td>{{ possibilidade._embedded.recurso.nome }}</td>\n                    <td>\n                        <div class=\"frame-wrap\">\n                            <div *ngFor=\"let acao of possibilidade.acoes\"\n                                 class=\"custom-control custom-checkbox custom-control-inline\">\n                                <input type=\"checkbox\"\n                                       (change)=\"save(possibilidade.recurso,acao.id)\"\n                                       [disabled]=\"!form.get('perfil').value || saveProgress\"\n                                       [checked]=\"isChecked(possibilidade.recurso,acao.id)\"\n                                       class=\"custom-control-input\"\n                                       [attr.id]=\"'checkAcao_' + possibilidade.recurso + '_' + acao.id\">\n                                <label class=\"custom-control-label\"\n                                       [attr.for]=\"'checkAcao_' + possibilidade.recurso + '_' + acao.id\">\n                                    {{ acao.nome }}\n                                </label>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelAutorizacaoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1hdXRvcml6YWNhby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PanelAutorizacaoComponent */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelAutorizacaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelAutorizacaoComponent", function () {
      return PanelAutorizacaoComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/http/acl/privilegio-http.service */
    "./src/app/services/http/acl/privilegio-http.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PanelAutorizacaoComponent =
    /*#__PURE__*/
    function () {
      function PanelAutorizacaoComponent(router, changeRef, location, authService, privilegioHttpService) {
        _classCallCheck(this, PanelAutorizacaoComponent);

        this.router = router;
        this.changeRef = changeRef;
        this.location = location;
        this.authService = authService;
        this.privilegioHttpService = privilegioHttpService;
      }

      _createClass(PanelAutorizacaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var tab;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isAdmin = this.authService.isAdmin();
                    _context.next = 3;
                    return this.privilegioHttpService.permite('Painel de Autorização', 'Visualizar');

                  case 3:
                    tab = localStorage.getItem('panel-autorizacao-tab');
                    this.tab = tab ? tab : 'panel-privilegio';
                    this.changeRef.detectChanges();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "tabChange",
        value: function tabChange(tab) {
          localStorage.setItem('panel-autorizacao-tab', tab);
          this.router.navigateByUrl(this.router.url);
        }
      }]);

      return PanelAutorizacaoComponent;
    }();

    PanelAutorizacaoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"]
      }];
    };

    PanelAutorizacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'panel-autorizacao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-autorizacao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-autorizacao.component.css */
      "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"]])], PanelAutorizacaoComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: PanelAutorizacaoModule */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelAutorizacaoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelAutorizacaoModule", function () {
      return PanelAutorizacaoModule;
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


    var _panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./panel-autorizacao.component */
    "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts");
    /* harmony import */


    var _panel_privilegio_panel_privilegio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panel-privilegio/panel-privilegio.component */
    "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts");
    /* harmony import */


    var _panel_possibilidade_panel_possibilidade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./panel-possibilidade/panel-possibilidade.component */
    "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var _base_base_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../base/base.module */
    "./src/app/features/admin/base/base.module.ts");

    var PanelAutorizacaoModule = function PanelAutorizacaoModule() {
      _classCallCheck(this, PanelAutorizacaoModule);
    };

    PanelAutorizacaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__["PanelAutorizacaoComponent"], _panel_privilegio_panel_privilegio_component__WEBPACK_IMPORTED_MODULE_7__["PanelPrivilegioComponent"], _panel_possibilidade_panel_possibilidade_component__WEBPACK_IMPORTED_MODULE_8__["PanelPossibilidadeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__["PanelAutorizacaoComponent"],
        data: {
          breadcrumbs: [{
            title: 'Painel de Autorização'
          }]
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], _base_base_module__WEBPACK_IMPORTED_MODULE_10__["BaseModule"]],
      providers: []
    })], PanelAutorizacaoModule);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css":
  /*!************************************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelPossibilidadePanelPossibilidadeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1wb3NzaWJpbGlkYWRlL3BhbmVsLXBvc3NpYmlsaWRhZGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: PanelPossibilidadeComponent */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelPossibilidadePanelPossibilidadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelPossibilidadeComponent", function () {
      return PanelPossibilidadeComponent;
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


    var _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/http/acl/acao-http.service */
    "./src/app/services/http/acl/acao-http.service.ts");
    /* harmony import */


    var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/http/acl/recurso-http.service */
    "./src/app/services/http/acl/recurso-http.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/http/acl/possibilidade-http.service */
    "./src/app/services/http/acl/possibilidade-http.service.ts");
    /* harmony import */


    var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/notify-message.service */
    "./src/app/services/notify-message.service.ts");

    var PanelPossibilidadeComponent =
    /*#__PURE__*/
    function () {
      function PanelPossibilidadeComponent(acaoHttpService, recursoHttpService, possibilidadeHttpService, formBuilder, notifyMessage, changeRef) {
        var _this = this;

        _classCallCheck(this, PanelPossibilidadeComponent);

        this.acaoHttpService = acaoHttpService;
        this.recursoHttpService = recursoHttpService;
        this.possibilidadeHttpService = possibilidadeHttpService;
        this.formBuilder = formBuilder;
        this.notifyMessage = notifyMessage;
        this.changeRef = changeRef;
        this.possibilidades = [];
        this.typingTimer = null;
        this.btnSalvar = true;
        this.selectToDelete = {
          acao: null,
          recurso: null
        };
        this.defineFormulario();
        this.acaoHttpService.listAll().then(function (response) {
          _this.acoes = response;

          _this.changeRef.detectChanges();
        });
        this.loadRecursos();
        this.loadPossibilidades();
      }

      _createClass(PanelPossibilidadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadRecursos",
        value: function loadRecursos() {
          var _this2 = this;

          var like = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (like != '') {
            this.recursoHttpService.getByLike(like).subscribe(function (response) {
              _this2.recursos = response;

              _this2.changeRef.detectChanges();
            });
          } else {
            this.recursoHttpService.listResolver().subscribe(function (response) {
              _this2.recursos = response;

              _this2.changeRef.detectChanges();
            });
          }
        }
      }, {
        key: "loadPossibilidades",
        value: function loadPossibilidades() {
          var _this3 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchparams = {
            "filter": [],
            "order-by": [{
              'type': 'field',
              'field': 'recurso',
              'direction': 'ASC'
            }]
          };
          this.possibilidades = [];
          this.possibilidadeHttpService.listAll(searchparams).then(function (response) {
            var recursoAnterior = null;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              var _loop = function _loop() {
                var item = _step.value;
                var recurso = item._embedded.recurso;
                var acao = item._embedded.acao;

                if (recursoAnterior != recurso.id) {
                  recursoAnterior = recurso.id;

                  _this3.possibilidades.push({
                    recurso_id: recurso.id,
                    recurso_nome: recurso.nome,
                    acoes: []
                  });
                }

                var possibilidade = _this3.possibilidades.find(function (x) {
                  return x.recurso_id == recurso.id;
                });

                possibilidade.acoes.push(acao);
              };

              for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this3.changeRef.detectChanges();
          });
        }
      }, {
        key: "selecionaRecurso",
        value: function selecionaRecurso(id) {
          this.form.get('recurso').setValue(id);
        }
      }, {
        key: "search",
        value: function search() {
          var _this4 = this;

          this.form.get('recurso').setValue(null);
          if (this.typingTimer != null) clearTimeout(this.typingTimer);
          this.typingTimer = setTimeout(function () {
            _this4.loadRecursos(_this4.recurso_search);
          }, 1000);
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          this.btnSalvar = false;
          var searchparams = {
            "filter": [{
              "type": "andx",
              "conditions": [{
                "field": "acao",
                "type": "eq",
                "value": this.form.get('acao').value
              }, {
                "field": "recurso",
                "type": "eq",
                "value": this.form.get('recurso').value
              }]
            }],
            "order-by": []
          };
          this.possibilidadeHttpService.list(searchparams).subscribe(function (response) {
            setTimeout(function () {
              if (response.total_items == 0) {
                _this5.possibilidadeHttpService.create(_this5.form.value).subscribe(function () {
                  _this5.form.get('acao').setValue(null);

                  _this5.btnSalvar = true;

                  _this5.changeRef.detectChanges();

                  _this5.notifyMessage.success("Possibilidade cadastrada com sucesso");

                  _this5.loadPossibilidades();
                }, function (error) {
                  console.log(error);

                  _this5.notifyMessage.success("Houve um erro ao salvar a possibilidade, tente novamente");

                  _this5.btnSalvar = true;
                });
              } else {
                _this5.defineFormulario();

                _this5.btnSalvar = true;

                _this5.changeRef.detectChanges();

                _this5.notifyMessage.error("A possibilidade já foi cadastrada");
              }
            }, 1000);
          });
        }
      }, {
        key: "resetGeral",
        value: function resetGeral() {
          this.defineFormulario();
        }
      }, {
        key: "defineFormulario",
        value: function defineFormulario() {
          this.form = this.formBuilder.group({
            acao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            recurso: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }
      }, {
        key: "del",
        value: function del(item) {
          this.selectToDelete = item;
        }
      }, {
        key: "delete",
        value: function _delete(e) {
          var _this6 = this;

          var searchparams = {
            "filter": [{
              "type": "andx",
              "conditions": [{
                "field": "acao",
                "type": "eq",
                "value": this.selectToDelete.acao
              }, {
                "field": "recurso",
                "type": "eq",
                "value": this.selectToDelete.recurso
              }]
            }],
            "order-by": []
          };
          this.possibilidadeHttpService.list(searchparams).subscribe(function (response) {
            _this6.possibilidadeHttpService.destroy(response._embedded.possibilidade[0].id).subscribe(function () {
              _this6.notifyMessage.success("Registro deletado com sucesso");

              _this6.selectToDelete = null;

              _this6.loadPossibilidades();
            }, function (error) {
              _this6.notifyMessage.error("Houve um erro ao deletar a possibilidade");

              _this6.selectToDelete = null;
            });
          });
        }
      }, {
        key: "cancel",
        value: function cancel(e) {
          console.log(e);
        }
      }]);

      return PanelPossibilidadeComponent;
    }();

    PanelPossibilidadeComponent.ctorParameters = function () {
      return [{
        type: _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__["AcaoHttpService"]
      }, {
        type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"]
      }, {
        type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__["NotifyMessageService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    PanelPossibilidadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'panel-possibilidade',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-possibilidade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-possibilidade.component.css */
      "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__["AcaoHttpService"], _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"], _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__["NotifyMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], PanelPossibilidadeComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelPrivilegioPanelPrivilegioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1wcml2aWxlZ2lvL3BhbmVsLXByaXZpbGVnaW8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: PanelPrivilegioComponent */

  /***/
  function srcAppFeaturesAdminAclPanelAutorizacaoPanelPrivilegioPanelPrivilegioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelPrivilegioComponent", function () {
      return PanelPrivilegioComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/http/acl/acao-http.service */
    "./src/app/services/http/acl/acao-http.service.ts");
    /* harmony import */


    var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/http/acl/recurso-http.service */
    "./src/app/services/http/acl/recurso-http.service.ts");
    /* harmony import */


    var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/http/acl/possibilidade-http.service */
    "./src/app/services/http/acl/possibilidade-http.service.ts");
    /* harmony import */


    var _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/http/cadastro/usuario-http.service */
    "./src/app/services/http/cadastro/usuario-http.service.ts");
    /* harmony import */


    var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../services/http/acl/privilegio-http.service */
    "./src/app/services/http/acl/privilegio-http.service.ts");
    /* harmony import */


    var _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../services/http/acl/perfil-http.service */
    "./src/app/services/http/acl/perfil-http.service.ts");
    /* harmony import */


    var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../services/notify-message.service */
    "./src/app/services/notify-message.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PanelPrivilegioComponent =
    /*#__PURE__*/
    function () {
      function PanelPrivilegioComponent(acaoHttpService, recursoHttpService, possibilidadeHttpService, usuarioHttpService, authService, privilegioHttpService, perfilHttpService, formBuilder, notifyMessage, changeRef) {
        _classCallCheck(this, PanelPrivilegioComponent);

        this.acaoHttpService = acaoHttpService;
        this.recursoHttpService = recursoHttpService;
        this.possibilidadeHttpService = possibilidadeHttpService;
        this.usuarioHttpService = usuarioHttpService;
        this.authService = authService;
        this.privilegioHttpService = privilegioHttpService;
        this.perfilHttpService = perfilHttpService;
        this.formBuilder = formBuilder;
        this.notifyMessage = notifyMessage;
        this.changeRef = changeRef;
        this.possibilidades = [];
        this.privilegios = [];
        this.saveProgress = false;
        this.element_perfil = {
          name: "perfil",
          label: "Perfil",
          type: "select",
          required: true,
          value: '',
          options: [],
          validators: []
        };
        this.element_recurso = {
          name: "recurso",
          label: "Recurso",
          type: "select",
          required: true,
          value: '',
          options: [],
          validators: []
        };
        this.element_acao = {
          name: "acao",
          label: "Ação",
          type: "select",
          required: true,
          value: '',
          options: [],
          validators: []
        };
        this.searchParams = {
          filter: [{
            type: 'andx',
            conditions: [],
            where: 'and'
          }]
        };
        this.isAdmin = false;
        this.defineFormulario();
        this.loadPerfis();
        this.loadRecursos();
        this.loadPossibilidades();
      }

      _createClass(PanelPrivilegioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isAdmin = this.authService.isAdmin();
                    this.changeRef.detectChanges();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "defineFormulario",
        value: function defineFormulario() {
          this.form = this.formBuilder.group({
            perfil: [null],
            recurso: [null],
            acao: [null]
          });
        }
      }, {
        key: "loadPerfis",
        value: function loadPerfis() {
          var _this7 = this;

          this.perfilHttpService.listAll().then(function (response) {
            var perfis = response;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = perfis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var perfil = _step2.value;

                _this7.element_perfil.options.push({
                  id: perfil.id,
                  text: perfil.nome
                });

                _this7.changeRef.detectChanges();
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          });
        }
      }, {
        key: "loadRecursos",
        value: function loadRecursos() {
          var _this8 = this;

          this.recursoHttpService.listAll().then(function (response) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = response[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var recurso = _step3.value;

                _this8.element_recurso.options.push({
                  id: recurso.id,
                  text: recurso.nome
                });

                _this8.changeRef.detectChanges();
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          });
        }
      }, {
        key: "loadAcoes",
        value: function loadAcoes(recurso_id) {
          var _this9 = this;

          var searchParams = {
            "filter": [{
              "field": "recurso",
              "type": "eq",
              "value": recurso_id
            }],
            "order-by": []
          };
          this.possibilidadeHttpService.list(searchParams).subscribe(function (response) {
            _this9.element_acao.options = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = response._embedded.possibilidade[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var possibilidade = _step4.value;

                _this9.element_acao.options.push({
                  id: possibilidade._embedded.acao.id,
                  text: possibilidade._embedded.acao.nome
                });
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this9.changeRef.detectChanges();
          });
        }
      }, {
        key: "loadPossibilidades",
        value: function loadPossibilidades() {
          var _this10 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (!this.form.get('perfil').value) return;
          var searchparams = {
            "filter": [{
              type: 'andx',
              conditions: [],
              where: 'and'
            }],
            "order-by": [{
              'type': 'field',
              'field': 'recurso',
              'direction': 'ASC'
            }]
          };
          if (this.form.get('recurso').value > 0) //Se o filtro de recurso for acionado, qualquer possibilidade que não seja do escopo do recurso será ignorado
            searchparams.filter[0].conditions.push({
              type: 'eq',
              field: 'recurso',
              value: this.form.get('recurso').value
            });
          if (this.form.get('acao').value > 0) //Se o filtro de ação for acionado, qualquer possibilidade que não seja do escopo da ação será ignorado
            searchparams.filter[0].conditions.push({
              type: 'eq',
              field: 'acao',
              value: this.form.get('acao').value
            });
          if (searchparams.filter[0].conditions.length == 0) searchparams.filter = [];
          this.possibilidades = [];
          this.possibilidadeHttpService.listAll(searchparams).then(function (response) {
            var recursoAnterior = null;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              var _loop2 = function _loop2() {
                var item = _step5.value;
                var recurso = item._embedded.recurso;
                var acao = item._embedded.acao;

                if (recursoAnterior != recurso.id) {
                  recursoAnterior = recurso.id;
                  var _possibilidade = {
                    recurso: recurso.id,
                    acoes: [],
                    _embedded: {
                      recurso: recurso
                    }
                  };

                  _this10.possibilidades.push(_possibilidade);
                }

                var possibilidade = _this10.possibilidades.find(function (x) {
                  return x.recurso == recurso.id;
                });

                possibilidade.acoes.push(acao);
              };

              for (var _iterator5 = response[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                _loop2();
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            _this10.changeRef.detectChanges();
          });
        }
      }, {
        key: "loadPrivilegios",
        value: function loadPrivilegios(searchParams) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.privilegios = [];
                    this.privilegioHttpService.listAll(searchParams).then(function (response) {
                      _this11.privilegios = response;

                      _this11.changeRef.detectChanges();
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changePerfil",
        value: function changePerfil(element, id_perfil) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.filter(element, id_perfil);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "changeRecurso",
        value: function changeRecurso(element, id_recurso) {
          this.filter(element, id_recurso);
          this.form.get('acao').setValue(null);
          this.loadAcoes(id_recurso);
        }
        /**
         * Função que manipula uma consulta dos privilégios e faz a busca no banco atualizando as condições
         * @param elemento
         * @param valor
         */

      }, {
        key: "filter",
        value: function filter(elemento, valor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var conditions, condition, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // Setando o valor no elemento do formulario e no atributo valor do elemento
                    this.form.get(elemento.name).setValue(valor);
                    elemento.value = valor; // Buscar as condições da variável que define a query

                    conditions = this.searchParams.filter[0].conditions; // Se o campo que está sendo feito a pesquisa foi selecionado um valor nao nulo

                    if (valor > 0) {
                      // Tentar encontrar dentro da query a condição relacionada ao filtro selecionado
                      condition = conditions.find(function (x) {
                        return x.field === elemento.name;
                      }); // Se encontrar apenas atualiza o valor da condição

                      if (condition !== undefined) {
                        condition.value = valor;
                      } else // Senão adicione uma condição a query
                        conditions.push({
                          type: 'eq',
                          field: elemento.name,
                          value: valor
                        });
                    } else {
                      // Se foi selecionado uma opção nula, remover da query a condição
                      i = conditions.findIndex(function (x) {
                        return x.field === elemento.name;
                      });
                      conditions.splice(i, 1);
                    }

                    if (this.form.get('perfil').value) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 6:
                    _context5.next = 8;
                    return this.loadPrivilegios(this.searchParams);

                  case 8:
                    this.loadPossibilidades();

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "save",
        value: function save(recurso_id, acao_id) {
          var _this12 = this;

          this.inProgress(true);
          var searchParams = {
            "acao": acao_id,
            "recurso": recurso_id
          };
          if (this.form.get('perfil').value > 0) searchParams.perfil = this.form.get('perfil').value;
          this.privilegioHttpService.findBy(searchParams).subscribe(function (list) {
            if (list.total_items > 0) {
              var item = list._embedded.privilegio[0];

              _this12.privilegioHttpService.destroy(item.id).subscribe(function () {
                _this12.inProgress(false);
              }, function (error) {
                console.log(error);

                _this12.notifyMessage.error("Erro ao deletar o privilégio");

                _this12.inProgress(false);
              });
            } else {
              var privilegio = {
                acao: acao_id,
                recurso: recurso_id
              };
              if (_this12.form.get('perfil').value > 0) privilegio.perfil = _this12.form.get('perfil').value;

              _this12.privilegioHttpService.create(privilegio).subscribe(function (response) {
                _this12.inProgress(false);
              }, function (error) {
                console.log(error);

                _this12.notifyMessage.error("Erro ao salvar o privilégio");

                _this12.inProgress(false);
              });
            }
          }, function (error) {
            console.log(error);

            _this12.notifyMessage.error("Erro na verificação de privilégios");

            _this12.inProgress(false);
          });
        }
      }, {
        key: "inProgress",
        value: function inProgress(progress) {
          this.saveProgress = progress;
          this.changeRef.detectChanges();
        }
      }, {
        key: "isChecked",
        value: function isChecked(recurso_id, acao_id) {
          if (this.form.get('perfil').value && this.privilegios !== undefined) {
            return this.privilegios.find(function (x) {
              return x._embedded.recurso.id == recurso_id && x._embedded.acao.id === acao_id;
            }) !== undefined ? true : false;
          } else {
            return false;
          }
        }
      }]);

      return PanelPrivilegioComponent;
    }();

    PanelPrivilegioComponent.ctorParameters = function () {
      return [{
        type: _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__["AcaoHttpService"]
      }, {
        type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"]
      }, {
        type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"]
      }, {
        type: _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
      }, {
        type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__["PrivilegioHttpService"]
      }, {
        type: _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__["PerfilHttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__["NotifyMessageService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    PanelPrivilegioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'panel-privilegio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panel-privilegio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panel-privilegio.component.css */
      "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__["AcaoHttpService"], _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"], _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"], _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__["PrivilegioHttpService"], _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__["PerfilHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__["NotifyMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], PanelPrivilegioComponent);
    /***/
  }
}]);
//# sourceMappingURL=panel-autorizacao-panel-autorizacao-module-es5.js.map