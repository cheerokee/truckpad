function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/register/register.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/register/register.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-sm-8 col-lg-5 p-4 panel\">\r\n                <header class=\"text-center mb-3\">\r\n                    <h2 class=\"h2 g-color-black g-font-weight-600\">\r\n                        Faça o Cadastro\r\n                    </h2>\r\n                </header>\r\n                <form class=\"form-signin form-validate g-py-15\" (submit)=\"submit()\">\r\n                    <div [formGroup]=\"form\" class=\"mb-4\">\r\n                        <label [for]=\"'nome'\" class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                            {{ ( form.get('tipo_pessoa') && form.get('tipo_pessoa')?.value ) ? \"Nome Fantasia\" : \"Nome Completo\" }}:\r\n                        </label>\r\n                        <input [id]=\"'nome'\"\r\n                               type=\"text\"\r\n                               formControlName=\"nome\"\r\n                               class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15\"\r\n                               placeholder=\"Seu nome completo\" required autofocus>\r\n                        <field-error [field]=\"'nome'\"\r\n                                     [label]=\"'Nome Completo'\"\r\n                                     [messages]=\"[]\"></field-error>\r\n                    </div>\r\n                    <div [formGroup]=\"form\" class=\"mb-4\">\r\n                        <label [for]=\"'email'\" class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                            E-mail:\r\n                        </label>\r\n                        <input [id]=\"'email'\"\r\n                               type=\"email\"\r\n                               formControlName=\"email\"\r\n                               class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15\"\r\n                               placeholder=\"Digite o e-mail\" autofocus>\r\n                        <field-error [field]=\"'email'\"\r\n                                     [label]=\"'E-mail'\"\r\n                                     [messages]=\"[]\"></field-error>\r\n                    </div>\r\n                    <div [formGroup]=\"form\" class=\"mb-4\">\r\n                        <label [for]=\"'telefone'\" class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                            Celular:\r\n                        </label>\r\n                        <input [id]=\"'telefone'\"\r\n                               formControlName=\"telefone\"\r\n                               type=\"text\"\r\n                               class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15\"\r\n                               placeholder=\"Digite o Telefone\"\r\n                               (keydown)=\"functions.KeyTel(form,'telefone')\">\r\n\r\n                        <field-error [field]=\"'telefone'\"\r\n                                     [label]=\"'Celular'\"\r\n                                     [messages]=\"[]\"></field-error>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div [formGroup]=\"form\" class=\"g-mb-35\">\r\n                                <label [for]=\"'senha'\" class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                                    Senha:\r\n                                </label>\r\n                                <input [id]=\"'senha'\"\r\n                                       formControlName=\"senha\"\r\n                                       type=\"password\"\r\n                                       data-msg=\"Por favor entre com a senha\"\r\n                                       class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 mb-3\"\r\n                                       placeholder=\"Digite sua senha\">\r\n                                <field-error [field]=\"'senha'\"\r\n                                             [label]=\"'senha'\"\r\n                                             [messages]=\"[]\"></field-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div [formGroup]=\"form\" class=\"g-mb-35\">\r\n                                <label [for]=\"'confirma'\" class=\"g-color-gray-dark-v2 g-font-weight-600 g-font-size-13\">\r\n                                    Confirme a senha:\r\n                                </label>\r\n                                <input [id]=\"'confirma'\"\r\n                                       formControlName=\"confirma\"\r\n                                       type=\"password\"\r\n                                       data-msg=\"Por favor entre com a senha\"\r\n                                       class=\"form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 mb-3\"\r\n                                       placeholder=\"Confirme sua senha\">\r\n                                <field-error [field]=\"'confirma'\"\r\n                                             [label]=\"'Confirmação'\"\r\n                                             [messages]=\"[]\"></field-error>\r\n                                <p *ngIf=\"form.get('senha').value != form.get('confirma').value\" class=\"invalid-feedback d-block\">\r\n                                    A senha e a confirmação não coincidem\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mb-4 mt-4 d-flex justify-content-center\">\r\n                        <button class=\"btn btn-lg btn-danger waves-effect waves-themed\"\r\n                                type=\"button\"\r\n                                [hidden]=\"btnCadastro\"\r\n                                disabled=\"\">\r\n                            <span class=\"spinner-grow spinner-grow-sm\"\r\n                                  role=\"status\"\r\n                                  aria-hidden=\"true\"></span>\r\n                            Aguarde...\r\n                        </button>\r\n                        <button type=\"submit\"\r\n                                [hidden]=\"!btnCadastro\"\r\n                                [disabled]=\"!form.valid\"\r\n                                class=\"btn btn-lg btn-primary waves-effect waves-themed\">\r\n                            Cadastrar\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <footer class=\"text-center\">\r\n                    <p class=\"g-color-gray-dark-v5 g-font-size-13 mb-0\">\r\n                        Possuo uma conta,\r\n                        <a [routerLink]=\"['/auth']\" class=\"g-font-weight-600\">\r\n                            efetuar o login\r\n                        </a>\r\n                    </p>\r\n                </footer>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/features/register/register.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/features/register/register.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/register/register.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/register/register.component.ts ***!
    \*********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppFeaturesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http/cadastro/usuario-http.service */
    "./src/app/services/http/cadastro/usuario-http.service.ts");
    /* harmony import */


    var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/notify-message.service */
    "./src/app/services/notify-message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_base_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/base-functions.service */
    "./src/app/services/base-functions.service.ts");
    /* harmony import */


    var _services_http_cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/http/cadastro/usuario-perfil-http.service */
    "./src/app/services/http/cadastro/usuario-perfil-http.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(usuarioHttp, usuarioPerfilHttp, actRoute, formBuilder, changeRef, notifyMessage, route, router, functions) {
        _classCallCheck(this, RegisterComponent);

        this.usuarioHttp = usuarioHttp;
        this.usuarioPerfilHttp = usuarioPerfilHttp;
        this.actRoute = actRoute;
        this.formBuilder = formBuilder;
        this.changeRef = changeRef;
        this.notifyMessage = notifyMessage;
        this.route = route;
        this.router = router;
        this.functions = functions; //Chave para aparição do botão cadastro

        this.btnCadastro = true;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Aplicando validações no formulário reativo
          this.redefinirFormulario();
        }
      }, {
        key: "redefinirFormulario",
        value: function redefinirFormulario() {
          this.form = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            telefone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirma: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var emailValido;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.changeStatusBtnCadastro(false);
                    _context2.next = 3;
                    return this.usuarioHttp.checaEmail(this.form.get('email').value);

                  case 3:
                    emailValido = _context2.sent;

                    if (emailValido) {
                      this.salvarUsuario().then(function (usuario) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var result;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.usuarioPerfilHttp.salvarPerfil(usuario, 'Administrador');

                                case 2:
                                  _context.next = 4;
                                  return this.enviaConfirmacao(usuario);

                                case 4:
                                  result = _context.sent;

                                  if (result) {
                                    this.notifyMessage.success('Você se cadastrou com sucesso, acesse o email na caixa de entrada para ativar sua conta', 3000).then(function () {
                                      _this2.router.navigateByUrl('/auth');
                                    });
                                  } else this.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');

                                  this.changeStatusBtnCadastro(true);

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (error) {
                        console.log(error);

                        _this.notifyMessage.error('Houve um erro ao cadastrar o usuário, entre em contato com o administrador');

                        _this.changeStatusBtnCadastro(true);
                      });
                    } else {
                      this.notifyMessage.error('Esse e-mail já está cadastrado em nosso sistema');
                      this.changeStatusBtnCadastro(true);
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "salvarUsuario",
        value: function salvarUsuario() {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.usuarioHttp.create(_this3.form.value).subscribe(function (usuario) {
              _this3.form.reset();

              resolve(usuario);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "enviaConfirmacao",
        value: function enviaConfirmacao(usuario) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", new Promise(function (resolve) {
                      _this4.usuarioHttp.enviaConfirmacao(usuario).subscribe(function (response) {
                        if (response.result) resolve(true);
                        resolve(false);
                      }, function (error) {
                        console.log(error);
                        resolve(false);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "enviaNotificacao",
        value: function enviaNotificacao(usuario) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", new Promise(function (resolve) {
                      _this5.usuarioHttp.enviaNotificacao(usuario).subscribe(function (response) {
                        if (response.result) resolve(true);
                        resolve(false);
                      }, function (error) {
                        console.log(error);
                        resolve(false);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "changeStatusBtnCadastro",
        value: function changeStatusBtnCadastro(status) {
          this.btnCadastro = status;
          this.changeRef.detectChanges();
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioHttpService"]
      }, {
        type: _services_http_cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioPerfilHttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__["NotifyMessageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_base_functions_service__WEBPACK_IMPORTED_MODULE_6__["BaseFunctionsService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/register/register.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/features/register/register.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioHttpService"], _services_http_cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioPerfilHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_notify_message_service__WEBPACK_IMPORTED_MODULE_4__["NotifyMessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_base_functions_service__WEBPACK_IMPORTED_MODULE_6__["BaseFunctionsService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/features/register/register.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/register/register.module.ts ***!
    \******************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppFeaturesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
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
    /*! ../../bootstrap/bootstrap.module */
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


    var _register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/features/register/register.component.ts");
    /* harmony import */


    var _resolvers_register_register_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../resolvers/register/register-resolver */
    "./src/app/resolvers/register/register-resolver.ts");

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: {
          breadcrumbs: ['Dashboard', 'Register']
        }
      }, {
        path: ':chave',
        component: _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        resolve: {
          list: _resolvers_register_register_resolver__WEBPACK_IMPORTED_MODULE_7__["RegisterResolver"]
        },
        data: {
          breadcrumbs: ['Dashboard', 'Register']
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [_resolvers_register_register_resolver__WEBPACK_IMPORTED_MODULE_7__["RegisterResolver"]]
    })], RegisterModule);
    /***/
  },

  /***/
  "./src/app/resolvers/register/register-resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/resolvers/register/register-resolver.ts ***!
    \*********************************************************/

  /*! exports provided: RegisterResolver */

  /***/
  function srcAppResolversRegisterRegisterResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterResolver", function () {
      return RegisterResolver;
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


    var _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http/cadastro/usuario-http.service */
    "./src/app/services/http/cadastro/usuario-http.service.ts");

    var RegisterResolver =
    /*#__PURE__*/
    function () {
      function RegisterResolver(httpService) {
        _classCallCheck(this, RegisterResolver);

        this.httpService = httpService;
      }

      _createClass(RegisterResolver, [{
        key: "resolve",
        value: function resolve(route) {
          this.searchParams = {
            filter: [{
              type: 'eq',
              field: 'activation_key',
              value: route.params.chave
            }]
          };
          return this.httpService.list(this.searchParams);
        }
      }]);

      return RegisterResolver;
    }();

    RegisterResolver.ctorParameters = function () {
      return [{
        type: _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioHttpService"]
      }];
    };

    RegisterResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioHttpService"]])], RegisterResolver);
    /***/
  }
}]);
//# sourceMappingURL=features-register-register-module-es5.js.map