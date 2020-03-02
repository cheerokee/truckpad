function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transporte-transporte-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAdminTransportePainelViagemPainelViagemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"panel\">\n            <div class=\"panel-hdr\">\n                <h2>\n                    Gerenciador de Viagens\n                </h2>\n            </div>\n            <div class=\"panel-container show\">\n                <div class=\"panel-content\">\n                    <form (ngSubmit)=\"salvaViagem()\">\n\n                    </form>\n                </div>\n                <div class=\"panel-content\">\n                    <div class=\"panel-tag\">\n                        All panels needs to have an unique ID in order to use the panel funtions. <code>.panel</code> is a container with no padding, <code>.panel-hdr</code> has a <code>min-height</code> value and default <code>flexbox</code> properties. The <code>.panel-toolbar</code> is inserted into <code>.panel-hdr</code> for extra elements. The <code>.panel-container</code> wraps <code>.panel-content</code> which has a predefined padding.\n                    </div>\n                    <p>\n                        Default panel text.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesAdminTransportePainelViagemPainelViagemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3RyYW5zcG9ydGUvcGFpbmVsLXZpYWdlbS9wYWluZWwtdmlhZ2VtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PainelViagemComponent */

  /***/
  function srcAppFeaturesAdminTransportePainelViagemPainelViagemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PainelViagemComponent", function () {
      return PainelViagemComponent;
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

    var PainelViagemComponent =
    /*#__PURE__*/
    function () {
      function PainelViagemComponent(formBuilder) {
        _classCallCheck(this, PainelViagemComponent);

        this.formBuilder = formBuilder;
        this.btnCadastro = true;
      }

      _createClass(PainelViagemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.redefinirFormulario();
        }
      }, {
        key: "redefinirFormulario",
        value: function redefinirFormulario() {
          this.form = this.formBuilder.group({
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            origem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            destino: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            motorista_veiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "salvaViagem",
        value: function salvaViagem() {}
      }]);

      return PainelViagemComponent;
    }();

    PainelViagemComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    PainelViagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-painel-viagem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./painel-viagem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./painel-viagem.component.css */
      "./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], PainelViagemComponent);
    /***/
  },

  /***/
  "./src/app/features/admin/transporte/transporte.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/admin/transporte/transporte.module.ts ***!
    \****************************************************************/

  /*! exports provided: TransporteModule */

  /***/
  function srcAppFeaturesAdminTransporteTransporteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransporteModule", function () {
      return TransporteModule;
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
    /*! ../../../bootstrap/bootstrap.module */
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


    var _base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../base/base.module */
    "./src/app/features/admin/base/base.module.ts");
    /* harmony import */


    var _painel_viagem_painel_viagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./painel-viagem/painel-viagem.component */
    "./src/app/features/admin/transporte/painel-viagem/painel-viagem.component.ts");

    var TransporteModule = function TransporteModule() {
      _classCallCheck(this, TransporteModule);
    };

    TransporteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_painel_viagem_painel_viagem_component__WEBPACK_IMPORTED_MODULE_7__["PainelViagemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'painel-viagem',
        component: _painel_viagem_painel_viagem_component__WEBPACK_IMPORTED_MODULE_7__["PainelViagemComponent"],
        data: {
          breadcrumbs: [{
            title: 'Painel de Viagens'
          }]
        }
      }, {
        path: 'categoria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | categoria-categoria-module */
          [__webpack_require__.e("common"), __webpack_require__.e("categoria-categoria-module")]).then(__webpack_require__.bind(null,
          /*! ./categoria/categoria.module */
          "./src/app/features/admin/transporte/categoria/categoria.module.ts")).then(function (m) {
            return m.CategoriaModule;
          });
        }
      }, {
        path: 'marca',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | marca-marca-module */
          [__webpack_require__.e("common"), __webpack_require__.e("marca-marca-module")]).then(__webpack_require__.bind(null,
          /*! ./marca/marca.module */
          "./src/app/features/admin/transporte/marca/marca.module.ts")).then(function (m) {
            return m.MarcaModule;
          });
        }
      }, {
        path: 'veiculo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | veiculo-veiculo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("veiculo-veiculo-module")]).then(__webpack_require__.bind(null,
          /*! ./veiculo/veiculo.module */
          "./src/app/features/admin/transporte/veiculo/veiculo.module.ts")).then(function (m) {
            return m.VeiculoModule;
          });
        }
      }, {
        path: 'viagem',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | viagem-viagem-module */
          [__webpack_require__.e("common"), __webpack_require__.e("viagem-viagem-module")]).then(__webpack_require__.bind(null,
          /*! ./viagem/viagem.module */
          "./src/app/features/admin/transporte/viagem/viagem.module.ts")).then(function (m) {
            return m.ViagemModule;
          });
        }
      }]), _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"], _base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"]]
    })], TransporteModule);
    /***/
  }
}]);
//# sourceMappingURL=transporte-transporte-module-es5.js.map