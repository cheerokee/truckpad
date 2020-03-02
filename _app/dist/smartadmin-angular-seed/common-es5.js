function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/features/admin/base/crud-base/crud-base.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/features/admin/base/crud-base/crud-base.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CrudBaseComponent */

  /***/
  function srcAppFeaturesAdminBaseCrudBaseCrudBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudBaseComponent", function () {
      return CrudBaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CrudBaseComponent =
    /*#__PURE__*/
    function () {
      function CrudBaseComponent(router, serviceHttp, actRoute, changeRef) {
        var _this = this;

        _classCallCheck(this, CrudBaseComponent);

        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.current_url = this.router.url;
        this.navigationSubscription = this.router.events.subscribe(function (evt) {
          if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            // trick the Router into believing it's last link wasn't previously loaded
            _this.router.navigated = false; // if you need to scroll back to top, here is the right place

            window.scrollTo(0, 0);

            _this.load();
          }
        });
      }

      _createClass(CrudBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // avoid memory leaks here by cleaning up after ourselves. If we
          // don't then we will continue to run our initialiseInvites()
          // method on every navigationEnd event.
          if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
          }
        }
      }, {
        key: "load",
        value: function load() {
          var _this2 = this;

          this.actRoute.data.subscribe(function (data) {
            _this2.list = data.list;

            _this2.changeRef.detectChanges();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this3 = this;

          this.serviceHttp.destroy(id).subscribe(function () {
            _this3.router.navigateByUrl(_this3.router.url);
          });
        }
      }, {
        key: "paginate",
        value: function paginate(page) {
          var _this4 = this;

          this.serviceHttp.list(this.serachparams, page).subscribe(function (response) {
            _this4.list = response;

            _this4.changeRef.detectChanges();
          });
        }
      }, {
        key: "filtering",
        value: function filtering(filter) {
          var _this5 = this;

          var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var item = _step.value;

              if (item.value == "") {
                var deletIndex = _this5.serachparams.filter.findIndex(function (x) {
                  return x.field == item.name;
                });

                if (deletIndex > -1) {
                  _this5.serachparams.filter.splice(deletIndex, 1);
                }

                return "continue";
              }

              var filterItem = _this5.filter.find(function (x) {
                return x.name == item.name;
              });

              filterItem.value = item.value;
              var value = filterItem.strategy == 'like' ? "%".concat(filterItem.value, "%") : filterItem.value;
              seachItem = _this5.serachparams.filter.find(function (x) {
                return x.field == filterItem.name;
              });

              if (seachItem !== undefined) {
                seachItem.value = value;
              } else {
                _this5.serachparams.filter.push({
                  type: filterItem.strategy,
                  field: filterItem.name,
                  value: value
                });
              }
            };

            for (var _iterator = filter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var seachItem;

              var _ret = _loop();

              if (_ret === "continue") continue;
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

          if (reload) {
            this.load();
          }
        }
      }]);

      return CrudBaseComponent;
    }();
    /***/

  },

  /***/
  "./src/app/features/admin/base/form-base/form-base.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/admin/base/form-base/form-base.ts ***!
    \************************************************************/

  /*! exports provided: FormBase */

  /***/
  function srcAppFeaturesAdminBaseFormBaseFormBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBase", function () {
      return FormBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormBase =
    /*#__PURE__*/
    function () {
      function FormBase(service, http, httpGetter, authService) {
        _classCallCheck(this, FormBase);

        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.httpService = service;
      }

      _createClass(FormBase, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setOptions",
        value: function setOptions(httpService, field) {
          var seachString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          var alias;
          var entity;

          if (typeof field === 'object') {
            alias = field.alias;
            entity = field.entity;
          } else {
            alias = field;
            entity = field;
          }

          if (httpService) {
            var element = this.elements.find(function (x) {
              return x.name == alias;
            });

            if (element) {
              httpService.getByLike(seachString).subscribe(function (response) {
                console.log(response);
                element.options = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = response._embedded[entity][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;
                    element.options.push({
                      text: element.propriedade !== undefined ? item[element.propriedade] : item.nome,
                      id: item.id
                    });
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
          }
        }
      }, {
        key: "search",
        value: function search(e) {
          var element = this.elements.find(function (x) {
            return x.name === e.element;
          });

          if (element !== undefined) {
            var srv = this.httpGetter.getService(element.name);
            this.setOptions(srv, element.name, e.value);
          }
        }
      }]);

      return FormBase;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormBase.prototype, "view", void 0);
    /***/
  },

  /***/
  "./src/app/resolvers/base/base-resolver.ts":
  /*!*************************************************!*\
    !*** ./src/app/resolvers/base/base-resolver.ts ***!
    \*************************************************/

  /*! exports provided: BaseResolver */

  /***/
  function srcAppResolversBaseBaseResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseResolver", function () {
      return BaseResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BaseResolver =
    /*#__PURE__*/
    function () {
      function BaseResolver(httpService) {
        _classCallCheck(this, BaseResolver);

        this.httpService = httpService;
      }

      _createClass(BaseResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return route.params.id !== undefined ? this.httpService.get(route.params.id) : this.httpService.listResolver(route.data);
        }
      }]);

      return BaseResolver;
    }();
    /***/

  },

  /***/
  "./src/app/services/base-functions.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/base-functions.service.ts ***!
    \****************************************************/

  /*! exports provided: BaseFunctionsService */

  /***/
  function srcAppServicesBaseFunctionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseFunctionsService", function () {
      return BaseFunctionsService;
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

    var BaseFunctionsService =
    /*#__PURE__*/
    function () {
      function BaseFunctionsService(router) {
        _classCallCheck(this, BaseFunctionsService);

        this.router = router;
        this.typingTimer = null;
      } // Marcara de telefone para campos de formulários reativos, função executada ao pressionar a tecla


      _createClass(BaseFunctionsService, [{
        key: "KeyTel",
        value: function KeyTel(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            if (valor.length == 16) valor = valor.substring(0, valor.length - 1);
            valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito

            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos

            valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos

            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "KeyMoeda",
        value: function KeyMoeda(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            var v = valor.replace(/\D/g, '');
            v = (v / 100).toFixed(2) + '';
            v = v.replace(".", ",");
            v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
            valor = v;
            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "converteDateDateSql",
        value: function converteDateDateSql(valor) {
          if (valor === "") {
            valor = '';
          } else {
            var temp = valor.split('/');
            valor = new Date(temp[2] + '-' + temp[1] + '-' + temp[0]);
          }

          return valor;
        }
      }, {
        key: "converteMoedaFloat",
        value: function converteMoedaFloat(valor) {
          if (valor === "") {
            valor = 0;
          } else {
            valor = valor + "";
            valor = valor.replace(".", "");
            valor = valor.replace(",", ".");
            valor = parseFloat(valor);
          }

          return valor;
        }
      }, {
        key: "KeyCpf",
        value: function KeyCpf(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "KeyDate",
        value: function KeyDate(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;

            if (valor.match(/^\d{2}$/) !== null) {
              form.get(field).setValue(valor + '/');
            } else if (valor.match(/^\d{2}\/\d{2}$/) !== null) {
              form.get(field).setValue(valor + '/');
            }
          });
        }
      }, {
        key: "KeyCnpj",
        value: function KeyCnpj(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "KeyCep",
        value: function KeyCep(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2");
            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "KeyNum",
        value: function KeyNum(form, field) {
          setTimeout(function () {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            form.get(field).setValue(valor);
          });
        }
      }, {
        key: "showErrors",
        value: function showErrors(errors) {
          return !(typeof errors === "undefined") ? Object.keys(errors).length != 0 : false;
        }
      }, {
        key: "reloadCurrentRoute",
        value: function reloadCurrentRoute() {
          window.location.href = window.location.href;
        }
      }, {
        key: "calculaIdade",
        value: function calculaIdade(date) {
          var nascimento = new Date(date.date);
          var hoje = new Date();
          return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
        }
      }, {
        key: "arrayCompare",
        value: function arrayCompare(a1, a2) {
          if (a1.length != a2.length) return false;
          var length = a2.length;

          for (var i = 0; i < length; i++) {
            if (a1[i] !== a2[i]) return false;
          }

          return true;
        }
        /**
         *
         * @param array needle
         * @param any haystack
         */

      }, {
        key: "inArray",
        value: function inArray(needle, haystack) {
          var length = haystack.length;

          for (var i = 0; i < length; i++) {
            if (typeof haystack[i] == 'object') {
              if (this.arrayCompare(haystack[i], needle)) return true;
            } else {
              if (haystack[i] == needle) return true;
            }
          }

          return false;
        } // Função usada como parâmetro da função sort -> para ordenar Ex. arr.sort(compare())

      }, {
        key: "compare",
        value: function compare(a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        }
      }, {
        key: "delayFunction",
        value: function delayFunction(fn, timer) {
          if (this.typingTimer != null) clearTimeout(this.typingTimer);
          this.typingTimer = setTimeout(fn, timer);
        }
      }]);

      return BaseFunctionsService;
    }();

    BaseFunctionsService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BaseFunctionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BaseFunctionsService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map