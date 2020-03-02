(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acl-acl-module"],{

/***/ "./src/app/features/admin/acl/acl.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/admin/acl/acl.module.ts ***!
  \**************************************************/
/*! exports provided: AclModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AclModule", function() { return AclModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.module */ "./src/app/features/admin/base/base.module.ts");







let AclModule = class AclModule {
};
AclModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'recurso',
                    loadChildren: () => Promise.all(/*! import() | recurso-recurso-module */[__webpack_require__.e("common"), __webpack_require__.e("recurso-recurso-module")]).then(__webpack_require__.bind(null, /*! ./recurso/recurso.module */ "./src/app/features/admin/acl/recurso/recurso.module.ts")).then(m => m.RecursoModule)
                },
                {
                    path: 'acao',
                    loadChildren: () => Promise.all(/*! import() | acao-acao-module */[__webpack_require__.e("common"), __webpack_require__.e("acao-acao-module")]).then(__webpack_require__.bind(null, /*! ./acao/acao.module */ "./src/app/features/admin/acl/acao/acao.module.ts")).then(m => m.AcaoModule)
                },
                {
                    path: 'perfil',
                    loadChildren: () => Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("common"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "./src/app/features/admin/acl/perfil/perfil.module.ts")).then(m => m.PerfilModule)
                },
                {
                    path: 'possibilidade',
                    loadChildren: () => Promise.all(/*! import() | possibilidade-possibilidade-module */[__webpack_require__.e("common"), __webpack_require__.e("possibilidade-possibilidade-module")]).then(__webpack_require__.bind(null, /*! ./possibilidade/possibilidade.module */ "./src/app/features/admin/acl/possibilidade/possibilidade.module.ts")).then(m => m.PossibilidadeModule)
                },
                {
                    path: 'panel-autorizacao',
                    loadChildren: () => __webpack_require__.e(/*! import() | panel-autorizacao-panel-autorizacao-module */ "panel-autorizacao-panel-autorizacao-module").then(__webpack_require__.bind(null, /*! ./panel-autorizacao/panel-autorizacao.module */ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.module.ts")).then(m => m.PanelAutorizacaoModule)
                },
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], AclModule);



/***/ })

}]);
//# sourceMappingURL=acl-acl-module-es2015.js.map