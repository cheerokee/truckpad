function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/auth.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/auth.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-sm-8 col-lg-5 p-4 panel\">\r\n                <header class=\"text-center mb-4\">\r\n                    <h2 class=\"h2 g-color-black g-font-weight-600\">\r\n                        <i class=\"fal fa-lock-alt\"></i>&nbsp;&nbsp;Área Restrita\r\n                    </h2>\r\n                </header>\r\n                <div *ngIf=\"showMessageError\" >\r\n                    <alert-error [(show)]=\"showMessageError\">Credenciais Inválidas</alert-error>\r\n                </div>\r\n                <alert-error [(show)]=\"btnReenvio\">\r\n                    Reenvie o e-mail para confirmação\r\n                </alert-error>\r\n                <div *ngIf=\"btnReenvio\" class=\"mb-4 d-flex justify-content-center\">\r\n\r\n                    <button type=\"button\"\r\n                            (click)=\"ReenviarConfirmacao()\"\r\n                            class=\"btn btn-lg btn-danger\" >\r\n                        <i class=\"fal fa-envelope\"></i>&nbsp;Reenviar\r\n                    </button>\r\n                </div>\r\n                <form class=\"form-signin form-validate g-py-15\" (submit)=\"submit()\">\r\n                    <div [formGroup]=\"form\" class=\"mb-4\">\r\n                        <label [for]=\"'email'\"\r\n                               class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                            Email:\r\n                        </label>\r\n                        <input [id]=\"'email'\"\r\n                               type=\"email\"\r\n                               formControlName=\"email\"\r\n                               class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15\"\r\n                               placeholder=\"Digite o e-mail\" autofocus>\r\n                        <field-error [field]=\"form.get('email')\"\r\n                                     [label]=\"'E-mail'\"\r\n                                     [messages]=\"[]\"></field-error>\r\n                    </div>\r\n                    <div [formGroup]=\"form\" class=\"g-mb-35\">\r\n                        <label [for]=\"'senha'\"\r\n                               class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                            Password:\r\n                        </label>\r\n                        <input [id]=\"'senha'\"\r\n                               type=\"password\"\r\n                               formControlName=\"senha\"\r\n                               class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15\"\r\n                               placeholder=\"Digite a Senha\" autofocus>\r\n                        <field-error [field]=\"form.get('senha')\"\r\n                                     [label]=\"'Senha'\"\r\n                                     [messages]=\"[]\"></field-error>\r\n\r\n                        <div class=\"row justify-content-between\">\r\n                            <div class=\"col align-self-center\">\r\n\r\n                            </div>\r\n                            <div class=\"col align-self-center text-right\">\r\n                                <a [routerLink]=\"['/forgot']\" class=\"g-font-size-12\">\r\n                                    Esqueceu a senha?\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mb-4 mt-4 d-flex justify-content-center\">\r\n                        <button type=\"submit\"\r\n                                id=\"entrar\"\r\n                                [hidden]=\"!btnEntrar\"\r\n                                [disabled]=\"!form.valid\"\r\n                                class=\"btn btn-lg btn-primary waves-effect waves-themed\">\r\n                            Entrar\r\n                        </button>\r\n                        <button class=\"btn btn-lg btn-danger waves-effect waves-themed\"\r\n                                type=\"button\"\r\n                                [hidden]=\"btnEntrar\"\r\n                                disabled=\"\">\r\n                            <span class=\"spinner-grow spinner-grow-sm\"\r\n                                  role=\"status\"\r\n                                  aria-hidden=\"true\"></span>\r\n                            Aguarde...\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <footer class=\"text-center\">\r\n                    <p class=\"g-color-gray-dark-v5 g-font-size-13 mb-0\">\r\n                        Ainda não está cadastrado?\r\n                        <a [routerLink]=\"['/register']\" class=\"g-font-weight-600\">\r\n                            Cadastre-se\r\n                        </a>\r\n                    </p>\r\n                </footer>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./src/app/features/auth/auth.component.css":
  /*!**************************************************!*\
    !*** ./src/app/features/auth/auth.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/auth/auth.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/features/auth/auth.component.ts ***!
    \*************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppFeaturesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/notify-message.service */
    "./src/app/services/notify-message.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/http/cadastro/usuario-http.service */
    "./src/app/services/http/cadastro/usuario-http.service.ts");
    /* harmony import */


    var _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/http/configuracao/configuracao-http.service */
    "./src/app/services/http/configuracao/configuracao-http.service.ts");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent(authService, router, route, formBuilder, changeRef, notifyMessage, usuarioHttp, configuracaoHttpService) {
        _classCallCheck(this, AuthComponent);

        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.changeRef = changeRef;
        this.notifyMessage = notifyMessage;
        this.usuarioHttp = usuarioHttp;
        this.configuracaoHttpService = configuracaoHttpService;
        this.btnEntrar = true;
        this.btnReenvio = false;
        this.showMessageError = false;
        this.form = this.formBuilder.group({
          email: ['admin@email.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
          senha: ['123', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = this.authService.getUsuarioSession();
          if (this.usuario) this.router.navigateByUrl('/admin');

          if (this.route.snapshot.queryParams.confirmado !== undefined && this.route.snapshot.queryParams.confirmado) {
            this.notifyMessage.success("Você foi ativado com sucesso", 2000);
            this.router.navigateByUrl('/auth');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.btnEntrar = false;
                    this.authService.login(this.form.value).subscribe(function (response) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.btnEntrar = true;
                                this.changeRef.detectChanges();

                                if (!response.result) {
                                  _context.next = 10;
                                  break;
                                }

                                this.authService.setUsuarioSession(response.usuario);
                                _context.next = 6;
                                return this.authService.setAdmin();

                              case 6:
                                this.configuracaoHttpService.autoSet();
                                this.router.navigateByUrl('/admin');
                                _context.next = 12;
                                break;

                              case 10:
                                this.notifyMessage.error(response.msg);

                                if (response.tipo) {
                                  this.btnReenvio = true;
                                  this.changeRef.detectChanges();
                                }

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this.notifyMessage.error("Email ou senha incorreto!");

                      _this.btnEntrar = true;

                      _this.changeRef.detectChanges();
                    });
                    return _context2.abrupt("return", false);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ReenviarConfirmacao",
        value: function ReenviarConfirmacao() {
          var _this2 = this;

          this.btnReenvio = false;
          var subscribe = this.usuarioHttp.enviaConfirmacao(this.form.value).subscribe(function (response) {
            if (response.result) {
              _this2.notifyMessage.success('Acesse o email na caixa de entrada para ativar sua conta');
            } else _this2.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');

            _this2.btnReenvio = true;

            _this2.changeRef.detectChanges();
          }, function (error) {
            _this2.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');

            _this2.btnReenvio = true;

            _this2.changeRef.detectChanges();
          });
          this.subscribes.push(subscribe);
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__["NotifyMessageService"]
      }, {
        type: _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"]
      }, {
        type: _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracaoHttpService"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/features/auth/auth.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__["NotifyMessageService"], _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"], _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracaoHttpService"]])], AuthComponent);
    /***/
  },

  /***/
  "./src/app/features/auth/auth.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/features/auth/auth.module.ts ***!
    \**********************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppFeaturesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/features/auth/auth.component.ts");
    /* harmony import */


    var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../bootstrap/bootstrap.module */
    "./src/app/bootstrap/bootstrap.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        data: {
          breadcrumbs: ['Dashboard', 'Auth']
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["BootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], AuthModule);
    /***/
  }
}]);
//# sourceMappingURL=features-auth-auth-module-es5.js.map