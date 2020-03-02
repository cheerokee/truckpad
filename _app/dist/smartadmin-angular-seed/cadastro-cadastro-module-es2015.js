(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "./src/app/features/admin/cadastro/cadastro.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/admin/cadastro/cadastro.module.ts ***!
  \************************************************************/
/*! exports provided: CadastroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroModule", function() { return CadastroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.module */ "./src/app/features/admin/base/base.module.ts");







let CadastroModule = class CadastroModule {
};
CadastroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'usuario',
                    loadChildren: () => Promise.all(/*! import() | usuario-usuario-module */[__webpack_require__.e("common"), __webpack_require__.e("usuario-usuario-module")]).then(__webpack_require__.bind(null, /*! ./usuario/usuario.module */ "./src/app/features/admin/cadastro/usuario/usuario.module.ts")).then(m => m.UsuarioModule)
                },
                {
                    path: 'motorista',
                    loadChildren: () => Promise.all(/*! import() | motorista-motorista-module */[__webpack_require__.e("common"), __webpack_require__.e("motorista-motorista-module")]).then(__webpack_require__.bind(null, /*! ./motorista/motorista.module */ "./src/app/features/admin/cadastro/motorista/motorista.module.ts")).then(m => m.MotoristaModule)
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"]
        ]
    })
], CadastroModule);



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module-es2015.js.map