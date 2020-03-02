function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy recursive":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy namespace object ***!
    \*******************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxPushNotificationsNode_modulesAngularCoreFesm2015LazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/auth/auth.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/auth/auth.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>auth works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutDropdownAppsDropdownAppsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div dropdown>\r\n  <a id=\"button-basic\" class=\"header-icon\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"dropdown-basic\">\r\n    <i class=\"fal fa-cube\"></i>\r\n  </a>\r\n  <div id=\"dropdown-basic\" class=\"dropdown-menu dropdown-menu-animated-center w-auto h-auto\"\r\n    role=\"menu\" aria-labelledby=\"button-basic\" >\r\n    <div class=\"dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top\">\r\n      <h4 class=\"m-0 text-center color-white\">\r\n        Atalho\r\n        <small class=\"mb-0 opacity-80\">Ferramentas & Aplicações</small>\r\n      </h4>\r\n    </div>\r\n    <div class=\"custom-scroll h-100\">\r\n      <ul class=\"app-list\">\r\n        <li>\r\n          <a  [routerLink]=\"['/admin/perfil-panel']\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-2 icon-stack-3x color-primary-400\"></i>\r\n              <i class=\"base-10 text-white icon-stack-1x\"></i>\r\n              <i class=\"ni md-profile color-primary-800 icon-stack-2x\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Minha Conta\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/admin/paciente']\" class=\"app-list-item hover-white\">\r\n    \r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-9 icon-stack-3x color-success-400\"></i>\r\n              <i class=\"base-2 icon-stack-2x color-success-500\"></i>\r\n              <i class=\"ni ni-users icon-stack-1x text-white\"></i>\r\n            </span>\r\n    \r\n            <span class=\"app-list-name\">\r\n              Pacientes\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"app-list-item hover-white\">\r\n            <span class=\"icon-stack\">\r\n              <i class=\"base-2 icon-stack-3x color-primary-600\"></i>\r\n              <i class=\"base-3 icon-stack-2x color-primary-700\"></i>\r\n              <i class=\"ni ni-settings icon-stack-1x text-white fs-lg\"></i>\r\n            </span>\r\n            <span class=\"app-list-name\">\r\n              Contas\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\t\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-user/dropdown-user.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-user/dropdown-user.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutDropdownUserDropdownUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div dropdown>\r\n  <a data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" title=\"{{usuario?.email}}\"\r\n     class=\"header-icon d-flex align-items-center justify-content-center ml-2\">\r\n    <img src=\"{{ foto }}\" class=\"cursor-pointer profile-image rounded-circle\" alt=\"{{usuario?.nome}}\">\r\n  </a>\r\n  <div class=\"dropdown-menu dropdown-menu-animated-right dropdown-lg\">\r\n    <div class=\"dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top\">\r\n      <div class=\"d-flex flex-row align-items-center mt-1 mb-1 color-white\">\r\n        <span class=\"mr-2\">\r\n          <img src=\"{{ foto }}\"\r\n               class=\"rounded-circle profile-image\"\r\n               alt=\"{{ usuario?.nome }}\">\r\n        </span>\r\n        <div class=\"info-card-text\">\r\n          <div class=\"fs-lg text-truncate text-truncate-lg\">{{usuario?.nome}}</div>\r\n          <span class=\"text-truncate text-truncate-md opacity-80\">{{usuario?.email}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    <a [routerLink]=\"['/admin/perfil-panel']\" class=\"dropdown-item\" data-action=\"app-reset\">\r\n      <span >Detalhes do Perfil</span>\r\n    </a>\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    <a href=\"#\" class=\"dropdown-item\" data-action=\"app-fullscreen\">\r\n      <span >Maximizar a Tela</span>\r\n      <i class=\"float-right text-muted fw-n\">F11</i>\r\n    </a>\r\n    <div class=\"dropdown-divider m-0\"></div>\r\n    <a class=\"dropdown-item fw-500 pt-3 pb-3\" (click)=\"deslogar()\">\r\n      <span >Deslogar</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutFabShortcutFabShortcutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"shortcut-menu hidden-sm-down\">\r\n  <input type=\"checkbox\" class=\"menu-open\" name=\"menu-open\" id=\"menu_open\"/>\r\n  <label for=\"menu_open\" class=\"menu-open-button \">\r\n    <span class=\"app-shortcut-icon d-block\"></span>\r\n  </label>\r\n  <a href=\"#\" class=\"menu-item btn\" (click)=\"scrollTop($event)\" placement=\"left\" tooltip=\"Scroll Top\">\r\n    <i class=\"fal fa-arrow-up\"></i>\r\n  </a>\r\n  <a href=\"page_login-alt.html\" class=\"menu-item btn\" (click)=\"logout($event)\" placement=\"left\" data-placement=\"top\" data-toogle=\"tooltip\" title data-original-title=\"Tooltip success background\">\r\n    <i class=\"fal fa-sign-out\"></i>\r\n  </a>\r\n  <a href=\"#\" class=\"menu-item btn\" data-action=\"app-fullscreen\" (click)=\"fullScreen($event)\" placement=\"left\" tooltip=\"Full Screen\">\r\n    <i class=\"fal fa-expand\"></i>\r\n  </a>\r\n  <a href=\"#\" class=\"menu-item btn\" data-action=\"app-print\" (click)=\"printPage($event)\" placement=\"left\" tooltip=\"Print page\">\r\n    <i class=\"fal fa-print\"></i>\r\n  </a>\r\n</nav>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/logo/logo.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/logo/logo.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutLogoLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-logo\">\r\n  <a href=\"#\" class=\"page-logo-link press-scale-down d-flex align-items-center\"\r\n    data-toggle=\"modal\"\r\n    (click)=\"openShortcut($event)\">\r\n    <img src=\"/assets/img/{{ logo }}\" alt=\"{{ appName }}\" aria-roledescription=\"logo\" />\r\n    <span class=\"page-logo-text mr-1\">{{ appName }}</span>\r\n    <i class=\"fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300\"></i>\r\n  </a>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/main/main.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/main/main.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\r\n  <div class=\"page-inner\">\r\n    <smart-sidebar *ngIf=\"canShowNavBar()\" class=\"d-flex flex-column flex-fill \"></smart-sidebar>\r\n\r\n    <div class=\"page-content-wrapper\">\r\n      <smart-page-header *ngIf=\"canShowNavBar()\"></smart-page-header>\r\n\r\n      <main id=\"js-page-content\" role=\"main\" [ngClass]=\"{ 'd-flex justify-content-center' : inAuthRoute() }\" class=\"page-content\">\r\n        <smart-page-breadcrumb *ngIf=\"canShowNavBar()\"></smart-page-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <smart-page-footer *ngIf=\"canShowNavBar()\" class=\"d-flex w-100 order-4 \"></smart-page-footer>\r\n    </div>\r\n\r\n    <smart-fab-shortcut *ngIf=\"canShowNavBar()\"></smart-fab-shortcut>\r\n\r\n    <!-- this overlay is activated only when mobile menu is triggered -->\r\n    <div *ngIf=\"canShowNavBar()\" class=\"page-content-overlay\" (click)=\"closeMobileNav($event)\" data-class=\"mobile-nav-on\"></div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutPageBreadcrumbPageBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb page-breadcrumb\" *ngIf=\"vm$ | async as vm\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/admin']\" smartStubClick>\r\n      Resumo\r\n    </a>\r\n  </li>\r\n\r\n  <ng-container *ngIf=\"vm.state && vm.state.data && vm.state.data.breadcrumbs\">\r\n    <li class=\"breadcrumb-item\"\r\n        *ngFor=\"let crumb of vm.state.data.breadcrumbs; let i = index\"\r\n        [routerLink]=\"crumb.route\"\r\n        [class.active]=\"vm.state.data.breadcrumbs.length === (i + 1)\">\r\n      {{ (crumb.title != '' ) ? crumb.title : crumb }}\r\n    </li>\r\n    \r\n  </ng-container>\r\n\r\n  <li class=\"position-absolute pos-top pos-right d-none d-sm-block\">\r\n    <span>{{ date | date }}</span>\r\n  </li>\r\n</ol>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-footer/page-footer.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-footer/page-footer.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutPageFooterPageFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"page-footer w-100\" role=\"contentinfo\">\r\n\t<div class=\"d-flex align-items-center flex-1 text-muted\">\r\n\t\t<span class=\"hidden-md-down fw-700\" [innerHTML]=\"copyright\"></span>\r\n\t</div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-header/page-header.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-header/page-header.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutPageHeaderPageHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header  class=\"page-header\" role=\"banner\">\r\n    <smart-logo></smart-logo>\r\n    <smart-settings-shortcut></smart-settings-shortcut>\r\n      \r\n    <!-- DOC: mobile button appears during mobile width -->\r\n    <div class=\"hidden-lg-up\">\r\n      <a href=\"#\" (click)=\"openMobileNav($event)\" class=\"header-btn btn press-scale-down\" data-action=\"toggle\" data-class=\"mobile-nav-on\">\r\n        <i class=\"ni ni-menu\"></i>\r\n      </a>\r\n    </div>\r\n  \r\n    <div class=\"search\">\r\n      <form class=\"app-forms hidden-xs-down\" role=\"search\" action=\"search-results.html\" autocomplete=\"off\">\r\n         <!-- <i class=\"fal fa-search position-absolute fs-xl m-2 p-1 text-muted pos-left\"></i>  -->\r\n        <input type=\"text\" id=\"search-field\" placeholder=\"Procure por alguma coisa\" class=\"form-control\" tabindex=\"1\">\r\n        <a href=\"#\" onclick=\"return false;\" class=\"btn-danger btn-search-close js-waves-off d-none\" data-action=\"toggle\" data-class=\"mobile-search-on\">\r\n          <i class=\"fal fa-times\"></i>\r\n        </a>\r\n      </form>\r\n    </div>\r\n  \r\n    <div class=\"ml-auto d-flex\">\r\n      \r\n      <!-- activate app search icon (mobile) -->\r\n      <div class=\"hidden-sm-up\">\r\n        <a href=\"#\" class=\"header-icon\" data-action=\"toggle\" data-class=\"mobile-search-on\" data-focus=\"search-field\" title=\"Search\">\r\n          <i class=\"fal fa-search\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <smart-settings-modal></smart-settings-modal>\r\n\r\n      <smart-dropdown-apps class=\"d-none\"></smart-dropdown-apps>\r\n\r\n      <smart-dropdown-user></smart-dropdown-user>\r\n    </div>\r\n  \r\n  </header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-heading/page-heading.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-heading/page-heading.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutPageHeadingPageHeadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"subheader\">\r\n\r\n    \r\n  \r\n    <h1 class=\"subheader-title\">\r\n        <i class='fal fa-info-circle'></i> Introduction\r\n      <small>\r\n          A brief introduction to this WebApp\r\n      </small>\r\n    </h1>\t\r\n  \r\n    \r\n  \r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-modal/settings-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-modal/settings-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutSettingsModalSettingsModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"liberaConfiguracao\" class=\"hidden-md-down\">\r\n  <a class=\"header-icon\" data-toggle=\"modal\" (click)=\"openModal($event)\">\r\n    <i class=\"fal fa-cog\"></i>\r\n  </a>\r\n</div>\r\n\r\n<ng-template #template>\r\n  <div class=\"dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100\">\r\n    <h4 class=\"m-0 text-center color-white\">\r\n      Configurações de Layout\r\n      <small class=\"mb-0 opacity-80\">\r\n        Painel de Configuração de Usuário\r\n      </small>\r\n    </h4>\r\n    <button type=\"button\"\r\n            class=\"close text-white position-absolute pos-top pos-right p-2 m-1 mr-2\"\r\n            data-dismiss=\"modal\"\r\n            aria-label=\"Close\"\r\n            (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\"><i class=\"fal fa-times\"></i></span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body p-0\">\r\n    <smart-settings></smart-settings>\r\n  </div>\r\n</ng-template>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutSettingsShortcutSettingsShortcutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- DOC: nav menu layout change shortcut -->\r\n<div class=\"hidden-md-down dropdown-icon-menu position-relative\">\r\n  <a href=\"#\"\r\n     class=\"header-btn btn js-waves-off\"\r\n     (click)=\"toggleHideNavigation($event)\"\r\n     title=\"Esconder a Navegação\"\r\n     data-class=\"nav-function-hidden\" >\r\n    <i class=\"ni ni-menu\"></i>\r\n  </a>\r\n  <ul>\r\n    <li>\r\n      <a href=\"#\"\r\n         class=\"btn js-waves-off\"\r\n         (click)=\"toggleMinifyNavigation($event)\"\r\n         title=\"Minificar a Navegação\"\r\n         data-class=\"nav-function-minify\" >\r\n        <i class=\"ni ni-minify-nav\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\"\r\n         class=\"btn js-waves-off\"\r\n         (click)=\"toggleFixedNavigation($event)\"\r\n         title=\"Trancar a Navegação\"\r\n         data-class=\"nav-function-fixed\" >\r\n        <i class=\"ni ni-lock-nav\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings/settings.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings/settings.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"settings-panel\" *ngIf=\"vm$ | async as vm\">\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Layout da Aplicação\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"list\" id=\"fh\">\r\n    <smart-on-off [checked]=\"vm.fixedHeader\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleFixedHeader($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Cabeçalho Fixo</span>\r\n    <span class=\"onoffswitch-title-desc\" >\r\n      Cabeçalho estará fixo em todos os momentos\r\n    </span>\r\n  </div>\r\n  <div class=\"list\" id=\"nff\">\r\n    <smart-on-off [checked]=\"vm.fixedNavigation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleFixedNavigation($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Navegação Fixa</span>\r\n    <span class=\"onoffswitch-title-desc\">Painel esquerdo fica fixo</span>\r\n  </div>\r\n  <div class=\"list\" id=\"nfm\">\r\n    <smart-on-off [checked]=\"vm.minifyNavigation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleMinifyNavigation($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Navegação Minificada</span>\r\n    <span class=\"onoffswitch-title-desc\">Inclinar a navegação para maximizar o espaço</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nfh\">\r\n    <smart-on-off [checked]=\"vm.hideNavigation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleHideNavigation($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Esconder a Navegação</span>\r\n    <span class=\"onoffswitch-title-desc\">Role o mouse na borda para revelar</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nft\">\r\n    <smart-on-off [checked]=\"vm.topNavigation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleTopNavigation($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Navegação no Topo</span>\r\n    <span class=\"onoffswitch-title-desc\">Realocar o menu lateral no topo</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"mmb\">\r\n    <smart-on-off [checked]=\"vm.boxedLayout\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleBoxedLayout($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Layout em Caixa</span>\r\n    <span class=\"onoffswitch-title-desc\">Encapsula em um contêiner</span>\r\n  </div>\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Menu Dispositivo Móvel\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nmp\">\r\n    <smart-on-off [checked]=\"vm.pushContent\"\r\n                  (checkedChange)=\"configuracaoHttpService.togglePushContent($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Conteúdo de Envio</span>\r\n    <span class=\"onoffswitch-title-desc\">O conteúdo enviado no menu revela</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"nmno\">\r\n    <smart-on-off [checked]=\"vm.noOverlay\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleNoOverlay($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Sem Sobreposição</span>\r\n    <span class=\"onoffswitch-title-desc\">Remove a malha na revelação do menu</span>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"sldo\">\r\n    <smart-on-off [checked]=\"vm.offCanvas\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleOffCanvas($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Off-Canvas <sup>(beta)</sup></span>\r\n    <span class=\"onoffswitch-title-desc\">Menu de sobreposições de conteúdo</span>\r\n  </div>\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Acessibilidade\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list\" id=\"mbf\">\r\n    <smart-on-off [checked]=\"vm.biggerContentFont\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleBiggerContentFont($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Fonte de Conteúdo Maior</span>\r\n    <span class=\"onoffswitch-title-desc\" >\r\n      As fontes de conteúdo são maiores para facilitar a\r\n    </span>\r\n  </div>\r\n  <div class=\"list\" id=\"mhc\">\r\n    <smart-on-off [checked]=\"vm.highContrastText\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleHighContrastText($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Texto de alto contraste (WCAG 2 AA)</span>\r\n    <span class=\"onoffswitch-title-desc\">4.5:1 relação de contraste do texto</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mcb\">\r\n    <smart-on-off [checked]=\"vm.daltonism\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleDaltonism($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Daltonismo <sup>(beta)</sup> </span>\r\n    <span class=\"onoffswitch-title-desc\">Deficiência de visão de cores</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mpc\">\r\n    <smart-on-off [checked]=\"vm.preloaderInside\"\r\n                  (checkedChange)=\"configuracaoHttpService.togglePreloaderInsise($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Pré-carregamento Dentro</span>\r\n    <span class=\"onoffswitch-title-desc\">Pré-carregamento estará dentro do conteúdo</span>\r\n  </div>\r\n\r\n  <div class=\"mt-4 d-table w-100 px-5\">\r\n    <div class=\"d-table-cell align-middle\">\r\n      <h5 class=\"p-0\">\r\n        Modificações Globais\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"list\" id=\"mcbg\">\r\n    <smart-on-off [checked]=\"vm.cleanPageBackground\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleCleanPageBackground($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Limpar fundo da página</span>\r\n    <span class=\"onoffswitch-title-desc\">Adicionar mais espaço em branco</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mhni\">\r\n    <smart-on-off [checked]=\"vm.hideNavigationIcons\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleHideNavigationIcons($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Ocultar ícones de navegação</span>\r\n    <span class=\"onoffswitch-title-desc\">Ícones de navegação invisível</span>\r\n  </div>\r\n  <div class=\"list\" id=\"dan\">\r\n    <smart-on-off [checked]=\"vm.disableCSSAnimation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleDisableCSSAnimation($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Desabilitar animações CSS</span>\r\n    <span class=\"onoffswitch-title-desc\">Desativa animações baseadas em CSS</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mhic\">\r\n    <smart-on-off [checked]=\"vm.hideInfoCard\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleHideInfoCard($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Ocultar cartão de informações</span>\r\n    <span class=\"onoffswitch-title-desc\">\r\n      Oculta o cartão de informações do painel esquerdo\r\n    </span>\r\n  </div>\r\n  <div class=\"list\" id=\"mlph\">\r\n    <smart-on-off [checked]=\"vm.leanSubheader\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleLeanSubheader($event,true)\" >\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Subtítulo Lean</span>\r\n    <span class=\"onoffswitch-title-desc\">Cabeçalho de página distinto</span>\r\n  </div>\r\n  <div class=\"list\" id=\"mnl\">\r\n    <smart-on-off [checked]=\"vm.hierarchicalNavigation\"\r\n                  (checkedChange)=\"configuracaoHttpService.toggleHierarchicalNavigation($event,true)\">\r\n    </smart-on-off>\r\n    <span class=\"onoffswitch-title\">Navegação Hierárquica</span>\r\n    <span class=\"onoffswitch-title-desc\">Divisão clara dos links de navegação</span>\r\n  </div>\r\n\r\n  <div class=\"list mt-3\">\r\n    <span class=\"onoffswitch-title\" >\r\n      Tamanho da fonte global <small>(RESETA NA ATUALIZAÇÃO)</small>\r\n    </span>\r\n    <div class=\"btn-group btn-group-sm btn-group-toggle my-2\"\r\n         data-toggle=\"buttons\">\r\n      <label [class.active]=\"vm.globalFontSize === 'sm'\"\r\n             class=\"btn btn-default btn-sm\"\r\n             (click)=\"configuracaoHttpService.setGlobalFontSize('sm',true)\" >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> P\r\n      </label>\r\n      <label [class.active]=\"vm.globalFontSize === 'md'\"\r\n             class=\"btn btn-default btn-sm\"\r\n             (click)=\"configuracaoHttpService.setGlobalFontSize('md',true)\" >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> M\r\n      </label>\r\n      <label [class.active]=\"vm.globalFontSize === 'lg'\"\r\n             class=\"btn btn-default btn-sm\"\r\n             (click)=\"configuracaoHttpService.setGlobalFontSize('lg',true)\" >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> G\r\n      </label>\r\n      <label [class.active]=\"vm.globalFontSize === 'xl'\"\r\n             class=\"btn btn-default btn-sm\"\r\n             (click)=\"configuracaoHttpService.setGlobalFontSize('xl',true)\" >\r\n        <input type=\"radio\" name=\"changeFrontSize\" /> XG\r\n      </label>\r\n    </div>\r\n    <span class=\"onoffswitch-title-desc d-block mb-g\" >\r\n      Alterar o tamanho da fonte <strong>raiz</strong> para afetar os valores rem\r\n    </span >\r\n  </div>\r\n  <hr class=\"m-0\">\r\n\t<div class=\"p-3 d-flex align-items-center justify-content-center bg-faded\">\r\n\t\t<button class=\"btn btn-outline-danger fw-500 mr-2\" (click)=\"configuracaoHttpService.appReset($event)\">\r\n          Resetar Configurações\r\n        </button>\r\n\t\t<button class=\"btn btn-danger fw-500\" (click)=\"configuracaoHttpService.factoryReset($event)\">\r\n          Restauração de Fábrica\r\n        </button>\r\n\t</div>\r\n</div>\r\n<span id=\"saving\"></span>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutShortcutModalShortcutModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-content\">\r\n  <div class=\"modal-body\">\r\n    <ul class=\"app-list w-auto h-auto p-0 text-left\">\r\n      <li>\r\n        <a [routerLink]=\"['/admin']\"\r\n          (mouseup)=\"closeShortcut($event)\"\r\n          class=\"app-list-item text-white border-0 m-0\">\r\n          <div class=\"icon-stack\">\r\n            <i class=\"base base-7 icon-stack-3x opacity-100 color-primary-500 \" ></i>\r\n            <i class=\"base base-7 icon-stack-2x opacity-100 color-primary-300 \" ></i>\r\n            <i class=\"fal fa-home icon-stack-1x opacity-100 color-white\"></i>\r\n          </div>\r\n          <span class=\"app-list-name\">\r\n            Home\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/admin/perfil']\"\r\n           (mouseup)=\"closeShortcut($event)\"\r\n           class=\"app-list-item text-white border-0 m-0\">\r\n          <div class=\"icon-stack\">\r\n            <i class=\"base base-7 icon-stack-3x opacity-100 color-primary-500 \" ></i>\r\n            <i class=\"base base-7 icon-stack-2x opacity-100 color-primary-300 \" ></i>\r\n            <i class=\"fal fa-user icon-stack-1x opacity-100 color-white\"></i>\r\n          </div>\r\n          <span class=\"app-list-name\">\r\n            Perfil\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidebar/sidebar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidebar/sidebar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside *ngIf=\"vm$ | async as vm\" class=\"page-sidebar\" [class.list-filter-active]=\"vm.active\">\r\n  <smart-logo></smart-logo>\r\n\r\n  <smart-navigation  class=\"d-flex flex-column flex-fill \"></smart-navigation>\r\n</aside>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavFilterMsgNavFilterMsgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"vm$ | async as vm\">\r\n  <div\r\n    *ngIf=\"vm.active\"\r\n    class=\"filter-message js-filter-message bg-success-600\"\r\n  >\r\n    showing {{ vm.matched }} from {{ vm.total }} total\r\n  </div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter/nav-filter.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter/nav-filter.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavFilterNavFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"nav-filter\" *ngIf=\"vm$ | async as vm\">\r\n  <div class=\"position-relative\">\r\n    <input\r\n      type=\"text\"\r\n      id=\"nav_filter_input\"\r\n      placeholder=\"Filter menu\"\r\n      class=\"form-control\"\r\n      #input\r\n      (keyup)=\"handleKeyup($event, input.value)\"\r\n      value=\"{{vm.text}}\"\r\n      tabindex=\"0\"\r\n    />\r\n    <a\r\n      href=\"#\"\r\n      class=\"btn-primary btn-search-close js-waves-off\"\r\n      data-class=\"list-filter-active\"\r\n      (click)=\"toggleFilter($event)\"\r\n    >\r\n      <i class=\"fal fa-chevron-up\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-footer/nav-footer.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-footer/nav-footer.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavFooterNavFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"nav-footer shadow-top\">\r\n  <a\r\n    href=\"#\"\r\n    (click)=\"toggleMinifyNavigation($event)\"\r\n    data-class=\"nav-function-minify\"\r\n    class=\"hidden-md-down\"\r\n  >\r\n    <i class=\"ni ni-chevron-right\"></i>\r\n    <i class=\"ni ni-chevron-right\"></i>\r\n  </a>\r\n  <ul class=\"list-table m-auto nav-footer-buttons\">\r\n    <li *ngIf=\"liberaChat\">\r\n      <a smartStubClick href=\"#\" container=\"body\" tooltip=\"Suporte Chat\">\r\n        <i class=\"fal fa-life-ring\"></i>\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"liberaLigacao\">\r\n      <a smartStubClick href=\"#\" container=\"body\" tooltip=\"Fazer uma ligação\">\r\n        <i class=\"fal fa-phone\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavInfoCardNavInfoCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"info-card\">\r\n  <a [routerLink]=\"['/admin/perfil']\">\r\n    <img src=\"{{ authService.getFoto() }}\"\r\n         class=\"profile-image rounded-circle\"\r\n         alt=\"{{ usuario.nome }}\"/>\r\n  </a>\r\n  <div class=\"info-card-text\">\r\n    <a [routerLink]=\"['/admin/perfil']\" class=\"cursor-pointer d-flex align-items-center text-white\">\r\n      <span class=\"text-truncate text-truncate-sm d-inline-block\">\r\n        {{ usuario.nome }}\r\n      </span>\r\n    </a>\r\n    <span class=\"d-inline-block text-truncate text-truncate-sm\">\r\n      {{ usuario.ocupacao }}\r\n    </span>\r\n  </div>\r\n  <img\r\n    src=\"assets/img/card-backgrounds/cover-2-lg.png\"\r\n    class=\"cover\"\r\n    alt=\"cover\"\r\n  />\r\n  <a\r\n    href=\"#\"\r\n\t\t(click)=\"toggleFilter($event)\"\r\n    class=\"pull-trigger-btn\"\r\n    data-class=\"list-filter-active\"\r\n  >\r\n    <i class=\"fal fa-angle-down\"></i>\r\n  </a>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-item/nav-item.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-item/nav-item.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavItemNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"item.items\">\r\n  <a (click)=\"toggleSection($event)\" title=\"{{ item.title }}\" href=\"#\">\r\n    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n    <span class=\"nav-link-text\">{{ item.title }}</span>\r\n    <span *ngIf=\"item.badge\" class=\"{{item.badge.class}}\">{{item.badge.label}}</span>\r\n    <b class=\"collapse-sign\"\r\n      ><em\r\n        class=\"{{ item.open ? 'fal fa-angle-up' : 'fal fa-angle-down' }}\"\r\n      ></em\r\n    ></b>\r\n  </a>\r\n  <ul\r\n    *ngIf=\"item.open || minified || item.matched !== null\"\r\n    class=\"d-block ov-h\"\r\n    [@slideInOut]\r\n  >\r\n    <li\r\n      smart-nav-item\r\n      *ngFor=\"let child of item.items; trackBy: trackByFn\"\r\n      [item]=\"child\"\r\n      [minified]=\"minified\"\r\n    ></li>\r\n  </ul>\r\n</ng-container>\r\n<ng-container *ngIf=\"!item.items && item.routerLink\">\r\n  <a routerLink=\"{{ item.routerLink }}\" title=\"{{ item.title }}\">\r\n    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n    <span class=\"nav-link-text\">{{ item.title }}</span>\r\n    <span *ngIf=\"item.badge\" class=\"{{item.badge.class}}\">{{item.badge.label}}</span>\r\n  </a>\r\n</ng-container>\r\n<ng-container *ngIf=\"item.navTitle\">\r\n  {{ item.title }}\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav/nav.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav/nav.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul id=\"js-nav-menu\" class=\"nav-menu\" *ngIf=\"vm$ | async as vm\">\r\n  <li smart-nav-item *ngFor=\"let item of items; trackBy: trackByFn\" [item]=\"item\" [minified]=\"vm.minified\" ></li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _shared_layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/layout/main/main.component */
    "./src/app/shared/layout/main/main.component.ts");
    /* harmony import */


    var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/layout/layout.module */
    "./src/app/shared/layout/layout.module.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: '',
      component: _shared_layout_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
      children: [{
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-auth-auth-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-auth-auth-module~features-forgot-forgot-module~features~6252076f"), __webpack_require__.e("features-auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ./features/auth/auth.module */
          "./src/app/features/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-forgot-forgot-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-auth-auth-module~features-forgot-forgot-module~features~6252076f"), __webpack_require__.e("features-forgot-forgot-module")]).then(__webpack_require__.bind(null,
          /*! ./features/forgot/forgot.module */
          "./src/app/features/forgot/forgot.module.ts")).then(function (m) {
            return m.ForgotModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-register-register-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-auth-auth-module~features-forgot-forgot-module~features~6252076f"), __webpack_require__.e("common"), __webpack_require__.e("features-register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./features/register/register.module */
          "./src/app/features/register/register.module.ts")).then(function (m) {
            return m.RegisterModule;
          });
        }
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-admin-admin-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-auth-auth-module~features-forgot-forgot-module~features~6252076f"), __webpack_require__.e("common"), __webpack_require__.e("features-admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./features/admin/admin.module */
          "./src/app/features/admin/admin.module.ts")).then(function (m) {
            return m.AdminModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'smartadmin-angular-seed';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-root',
      template: '<router-outlet></router-outlet>'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: APP_CONFIG */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var APP_CONFIG = {
      app: 'SmartAdmin',
      appName: 'TruckPad',
      user: 'Dr. Jonas Inhani Martins',
      email: 'drlantern@gotbootstrap.com',
      twitter: 'codexlantern',
      avatar: 'avatar-admin.png',
      version: '4.0.0',
      bs4v: '4.3',
      logo: 'logo.png',
      logoM: 'logo.png',
      // tslint:disable-next-line:max-line-length
      copyright: "2020 \xA9 TruckPad por&nbsp;<a href=\"http://www.inovensti.com.br\" class=\"text-primary fw-500\" title=\"Inovens Tecnologia da Informa\xE7\xE3o\" target=\"_blank\">Inovens</a>"
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])('pt-BR');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.navigation.ts":
  /*!***********************************!*\
    !*** ./src/app/app.navigation.ts ***!
    \***********************************/

  /*! exports provided: NavigationItems */

  /***/
  function srcAppAppNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItems", function () {
      return NavigationItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var NavigationItems = [{
      title: 'Resumo',
      tags: 'dashboard',
      icon: 'fal fa-warehouse',
      routerLink: '/admin'
    }, {
      title: 'Cadastros',
      tags: 'cadastros',
      icon: 'fal fa-database',
      items: [{
        title: 'Usuários',
        tags: 'usuarios',
        routerLink: '/admin/cadastro/usuario'
      }, {
        title: 'Motoristas',
        tags: 'motoristas',
        routerLink: '/admin/cadastro/motorista'
      }]
    }, {
      title: 'Autorização',
      tags: 'autorizacao',
      icon: 'fal fa-shield-alt',
      items: [{
        title: 'Painel de Autorização',
        tags: 'Painel de Autorização',
        routerLink: '/admin/acl/panel-autorizacao'
      }, {
        title: 'Recursos',
        tags: 'Recursos',
        routerLink: '/admin/acl/recurso'
      }, {
        title: 'Ações',
        tags: 'Ações',
        routerLink: '/admin/acl/acao'
      }, {
        title: 'Perfis',
        tags: 'Perfis',
        routerLink: '/admin/acl/perfil'
      }, {
        title: 'Possibilidades',
        tags: 'Possibilidades',
        routerLink: '/admin/acl/possibilidade'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule, throwIfAlreadyLoaded */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
      return throwIfAlreadyLoaded;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../store */
    "./src/app/store/index.ts");
    /* harmony import */


    var _store_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../store/router */
    "./src/app/store/router/index.ts");
    /* harmony import */


    var _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../shared/dialogs/dialogs.module */
    "./src/app/shared/dialogs/dialogs.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _pipes_number_format_br_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../pipes/number-format-br.pipe */
    "./src/app/pipes/number-format-br.pipe.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");
    /**
     * Module for global imports
     */


    var CoreModule = // thi module can be load only once
    function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    };

    CoreModule.ctorParameters = function () {
      return [{
        type: CoreModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }];
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pipes_number_format_br_pipe__WEBPACK_IMPORTED_MODULE_23__["NumberFormatBrPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], // ngrx modules
      _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
        metaReducers: _store__WEBPACK_IMPORTED_MODULE_16__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictStateSerializability: false,
          strictActionSerializability: false
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(_toConsumableArray(_store__WEBPACK_IMPORTED_MODULE_16__["effects"])), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
        actionsBlocklist: ['@ngrx/router*']
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(), // import ngx-bootstrap services here
      ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_21__["PopoverModule"].forRoot(), _shared_dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_18__["DialogsModule"]],
      exports: [_pipes_number_format_br_pipe__WEBPACK_IMPORTED_MODULE_23__["NumberFormatBrPipe"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"], ngx_push_notifications__WEBPACK_IMPORTED_MODULE_24__["PushNotificationService"], // use custom serializer to strip redundant router data
      {
        provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"],
        useClass: _store_router__WEBPACK_IMPORTED_MODULE_17__["CustomSerializer"]
      }]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])], CoreModule);

    function throwIfAlreadyLoaded(parentModule, moduleName) {
      if (parentModule) {
        throw new Error("".concat(moduleName, " has already been loaded. Import ").concat(moduleName, " modules in the AppModule only."));
      }
    }
    /***/

  },

  /***/
  "./src/app/pipes/number-format-br.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/number-format-br.pipe.ts ***!
    \************************************************/

  /*! exports provided: NumberFormatBrPipe */

  /***/
  function srcAppPipesNumberFormatBrPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberFormatBrPipe", function () {
      return NumberFormatBrPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NumberFormatBrPipe =
    /*#__PURE__*/
    function () {
      function NumberFormatBrPipe() {
        _classCallCheck(this, NumberFormatBrPipe);
      }

      _createClass(NumberFormatBrPipe, [{
        key: "transform",
        value: function transform(value, args) {
          return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(value);
        }
      }]);

      return NumberFormatBrPipe;
    }();

    NumberFormatBrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'numberFormatBr'
    })], NumberFormatBrPipe);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router, authService) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.getUsuarioSession() != null) {
            return true;
          } else {
            this.router.navigate(['/auth']);
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.protocolo, "://").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.host);
        this.me = null;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(this.url, "/service/auth"), user);
        }
      }, {
        key: "forgot",
        value: function forgot(email) {
          return this.http.post("".concat(this.url, "/services/recuperar-senha"), {
            email: email
          });
        }
      }, {
        key: "isAuth",
        value: function isAuth() {
          return true;
        }
      }, {
        key: "setAdmin",
        value: function setAdmin() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            var usuario = _this.getUsuarioSession();

            if (usuario) {
              _this.http.get("".concat(_this.url, "/services/is-admin?usuario=").concat(usuario.id)).subscribe(function (response) {
                console.log(response);
                localStorage.setItem('isadmin', response.result);
                resolve(response.result);
              });
            }
          });
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return localStorage.getItem('isadmin') == 'true' ? true : false;
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('auth');
          sessionStorage.removeItem('configuracao');
        }
      }, {
        key: "setUsuarioSession",
        value: function setUsuarioSession(usuario) {
          sessionStorage.setItem('auth', JSON.stringify(usuario));
        }
      }, {
        key: "getUsuarioSession",
        value: function getUsuarioSession() {
          this.me = JSON.parse(sessionStorage.getItem('auth'));
          return this.me;
        }
      }, {
        key: "getFoto",
        value: function getFoto() {
          if (this.me) {
            var src = this.me.image ? this.url + this.me.image : "/assets/img/sem_imagem.jpg";
            return src;
          } else {
            return "/assets/img/sem_imagem.jpg";
          }
        }
      }, {
        key: "fileExists",
        value: function fileExists(urlToFile) {
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', urlToFile, false);
          xhr.send();

          if (xhr.status == 404) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/http/acl/perfil-http.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/http/acl/perfil-http.service.ts ***!
    \**********************************************************/

  /*! exports provided: PerfilHttpService */

  /***/
  function srcAppServicesHttpAclPerfilHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilHttpService", function () {
      return PerfilHttpService;
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


    var _base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-http.service */
    "./src/app/services/http/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/services/auth.service.ts");

    var PerfilHttpService =
    /*#__PURE__*/
    function (_base_http_service__W) {
      _inherits(PerfilHttpService, _base_http_service__W);

      function PerfilHttpService(http, authService) {
        var _this2;

        _classCallCheck(this, PerfilHttpService);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PerfilHttpService).call(this, http, authService, '/perfil'));
        _this2.authService = authService;
        _this2.table = 'perfil';
        return _this2;
      }

      _createClass(PerfilHttpService, [{
        key: "listResolver",
        value: function listResolver(params) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var serachparams = {
            "filter": [],
            "order-by": []
          };
          return this.list(serachparams, page);
        }
      }, {
        key: "list",
        value: function list(searchParams) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return _get(_getPrototypeOf(PerfilHttpService.prototype), "list", this).call(this, searchParams, page);
        }
      }, {
        key: "listAll",
        value: function listAll() {
          var serachparams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            "filter": [],
            "order-by": []
          };
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this4 = this;

                        var isAdmin, values;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                isAdmin = this.authService.isAdmin();
                                if (!isAdmin) serachparams = {
                                  filter: [{
                                    type: 'isnull',
                                    field: 'admin'
                                  }]
                                };
                                values = [];
                                this.list(serachparams).subscribe(function (response) {
                                  var page_total = response.page_count;
                                  var _iteratorNormalCompletion = true;
                                  var _didIteratorError = false;
                                  var _iteratorError = undefined;

                                  try {
                                    for (var _iterator = response._embedded[_this4.table][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                      var entity = _step.value;
                                      values.push(entity);
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

                                  if (page_total > 1) {
                                    (function () {
                                      var page_current = 2;

                                      while (page_current <= page_total) {
                                        _this4.list(serachparams, page_current).subscribe(function (response) {
                                          var _iteratorNormalCompletion2 = true;
                                          var _didIteratorError2 = false;
                                          var _iteratorError2 = undefined;

                                          try {
                                            for (var _iterator2 = response._embedded[_this4.table][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                              var entity = _step2.value;
                                              values.push(entity);
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

                                          if (page_current >= page_total) {
                                            resolve(values);
                                          }
                                        });

                                        page_current++;
                                      }
                                    })();
                                  } else {
                                    resolve(values);
                                  }
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "getByLike",
        value: function getByLike() {
          var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var searchparams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          searchparams = {
            "filter": [{
              "type": "andx",
              "conditions": [{
                "field": "nome",
                "type": "like",
                "value": "%".concat(searchString, "%")
              }]
            }],
            "order-by": []
          };
          return _get(_getPrototypeOf(PerfilHttpService.prototype), "getByLike", this).call(this, searchString, searchparams);
        }
      }]);

      return PerfilHttpService;
    }(_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"]);

    PerfilHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    PerfilHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], PerfilHttpService);
    /***/
  },

  /***/
  "./src/app/services/http/acl/privilegio-http.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/http/acl/privilegio-http.service.ts ***!
    \**************************************************************/

  /*! exports provided: PrivilegioHttpService */

  /***/
  function srcAppServicesHttpAclPrivilegioHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivilegioHttpService", function () {
      return PrivilegioHttpService;
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


    var _base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-http.service */
    "./src/app/services/http/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../cadastro/usuario-perfil-http.service */
    "./src/app/services/http/cadastro/usuario-perfil-http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PrivilegioHttpService =
    /*#__PURE__*/
    function (_base_http_service__W2) {
      _inherits(PrivilegioHttpService, _base_http_service__W2);

      function PrivilegioHttpService(http, authService, usuarioPerfilHttpService, router) {
        var _this5;

        _classCallCheck(this, PrivilegioHttpService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(PrivilegioHttpService).call(this, http, authService, '/privilegio'));
        _this5.authService = authService;
        _this5.usuarioPerfilHttpService = usuarioPerfilHttpService;
        _this5.router = router;
        _this5.uri = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.protocolo, "://").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.host);
        _this5.table = 'privilegio';
        return _this5;
      }

      _createClass(PrivilegioHttpService, [{
        key: "findBy",
        value: function findBy(searchParams) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this.http.get("".concat(this.uri, "/services/privilegio") + "?page=" + page + "&" + this.serialize(searchParams, ''));
        }
      }, {
        key: "permite",
        value: function permite(recurso, acao) {
          var retorna = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      var usuario = _this6.authService.getUsuarioSession();

                      var params = {
                        usuario: usuario.id,
                        recurso: recurso,
                        acao: acao
                      };
                      var uri = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.protocolo, "://").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.host, "/services/permite?").concat(_this6.serialize(params, ''));

                      _this6.http.get(uri).subscribe(function (response) {
                        if (!response.result) {
                          if (retorna) {
                            resolve(response.result);
                          } else {
                            _this6.router.navigate(['admin', 'sem-permissao']);

                            resolve();
                          }
                        } else {
                          resolve(response.result);
                        }
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
        key: "permiteMassa",
        // Está sendo usado basta dar ctrl + f e pesquisar, apenas está sendo comentado temporariamente
        value: function permiteMassa(recursos, acao) {
          var usuario = this.authService.getUsuarioSession();
          var uri = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.protocolo, "://").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.host, "/services/permite-massa");

          if (usuario) {
            return this.http.post(uri, {
              usuario: usuario.id,
              recursos: recursos,
              acao: acao
            });
          } else {
            return this.http.post(uri, {
              usuario: null,
              recursos: recursos,
              acao: acao
            });
          }
        }
      }]);

      return PrivilegioHttpService;
    }(_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"]);

    PrivilegioHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioPerfilHttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    PrivilegioHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _cadastro_usuario_perfil_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioPerfilHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], PrivilegioHttpService);
    /***/
  },

  /***/
  "./src/app/services/http/base-http.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/http/base-http.service.ts ***!
    \****************************************************/

  /*! exports provided: BaseHttpService */

  /***/
  function srcAppServicesHttpBaseHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseHttpService", function () {
      return BaseHttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var BaseHttpService =
    /*#__PURE__*/
    function () {
      function BaseHttpService(http, authService, endPoint) {
        _classCallCheck(this, BaseHttpService);

        this.http = http;
        this.authService = authService;
        this.endPoint = endPoint;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.url;

        this.serialize = function (obj, prefix) {
          var str = [],
              p;

          for (p in obj) {
            if (obj.hasOwnProperty(p)) {
              var k = prefix ? prefix + "[" + p + "]" : p,
                  v = obj[p];
              str.push(v !== null && typeof v === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
          }

          return str.join("&");
        };

        this.baseUrl += endPoint;
      }

      _createClass(BaseHttpService, [{
        key: "create",
        value: function create(data) {
          return this.http.post(this.baseUrl, data);
        }
      }, {
        key: "destroy",
        value: function destroy(id) {
          return this.http.delete("".concat(this.baseUrl, "/").concat(id)); //Para aplicar tranformações;
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(this.baseUrl, "/").concat(id)); //Para aplicar tranformações;
        }
      }, {
        key: "getByLike",
        value: function getByLike() {
          var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var serachparams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            "filter": [],
            "order-by": []
          };
          return this.list(serachparams);
        } // @ts-ignore

      }, {
        key: "list",
        value: function list(searchParams) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this.http.get(this.baseUrl + "?page=" + page + "&" + this.serialize(searchParams, ''));
        }
      }, {
        key: "listResolver",
        value: function listResolver() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            "filter": [],
            "order-by": []
          };
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this.list(params, page);
        }
      }, {
        key: "listAll",
        value: function listAll() {
          var _this7 = this;

          var serachparams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            "filter": [],
            "order-by": []
          };
          return new Promise(function (resolve) {
            var values = [];

            _this7.list(serachparams).subscribe(function (response) {
              var page_total = response.page_count;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = response._embedded[_this7.table][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var entity = _step3.value;
                  values.push(entity);
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

              if (page_total > 1) {
                (function () {
                  var page_current = 2;

                  while (page_current <= page_total) {
                    _this7.list(serachparams, page_current).subscribe(function (response) {
                      var _iteratorNormalCompletion4 = true;
                      var _didIteratorError4 = false;
                      var _iteratorError4 = undefined;

                      try {
                        for (var _iterator4 = response._embedded[_this7.table][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                          var entity = _step4.value;
                          values.push(entity);
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

                      if (page_current >= page_total) {
                        resolve(values);
                      }
                    });

                    page_current++;
                  }
                })();
              } else {
                resolve(values);
              }
            });
          });
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.patch("".concat(this.baseUrl, "/").concat(id), data);
        }
      }]);

      return BaseHttpService;
    }();
    /***/

  },

  /***/
  "./src/app/services/http/cadastro/usuario-http.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/services/http/cadastro/usuario-http.service.ts ***!
    \****************************************************************/

  /*! exports provided: UsuarioHttpService */

  /***/
  function srcAppServicesHttpCadastroUsuarioHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioHttpService", function () {
      return UsuarioHttpService;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _base_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../base-http.service */
    "./src/app/services/http/base-http.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var UsuarioHttpService =
    /*#__PURE__*/
    function (_base_http_service__W3) {
      _inherits(UsuarioHttpService, _base_http_service__W3);

      function UsuarioHttpService(http, authService) {
        var _this8;

        _classCallCheck(this, UsuarioHttpService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(UsuarioHttpService).call(this, http, authService, '/usuario'));
        _this8.authService = authService;
        _this8.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api.protocolo, "://").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api.host);
        return _this8;
      }

      _createClass(UsuarioHttpService, [{
        key: "list",
        value: function list(searchParams) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "list", this).call(this, searchParams, page);
        }
      }, {
        key: "getByLike",
        value: function getByLike() {
          var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var searchparams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          searchparams = {
            "filter": [{
              "type": "andx",
              "conditions": [{
                "field": "nome",
                "type": "like",
                "value": "%".concat(searchString, "%")
              }]
            }],
            "order-by": []
          };
          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "getByLike", this).call(this, searchString, searchparams);
        }
      }, {
        key: "get",
        value: function get(id) {
          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "get", this).call(this, id);
        }
      }, {
        key: "create",
        value: function create(data) {
          var _this9 = this;

          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "create", this).call(this, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (usuario) {
            _this9.saveSlug(usuario).subscribe(function () {});
          }));
        }
      }, {
        key: "update",
        value: function update(id, data) {
          var _this10 = this;

          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "update", this).call(this, id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (usuario) {
            _this10.saveSlug(usuario).subscribe(function () {});
          }));
        }
      }, {
        key: "destroy",
        value: function destroy(id) {
          return _get(_getPrototypeOf(UsuarioHttpService.prototype), "destroy", this).call(this, id);
        }
      }, {
        key: "enviaConfirmacao",
        value: function enviaConfirmacao(usuario) {
          return this.http.post("".concat(this.url, "/services/envia-confirmacao"), usuario);
        }
      }, {
        key: "enviaNotificacao",
        value: function enviaNotificacao(usuario) {
          return this.http.post("".concat(this.url, "/services/envia-notificacao"), usuario);
        }
      }, {
        key: "saveSlug",
        value: function saveSlug(usuario) {
          return this.http.post("".concat(this.url, "/services/salvar-slug"), {
            id: usuario.id,
            field: 'nome',
            entity: "Cadastro\\Entity\\Usuario"
          });
        }
      }, {
        key: "getClinicas",
        value: function getClinicas() {
          var like = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this.http.get("".concat(this.url, "/services/clinicas?page=").concat(page, "&").concat(like != '' ? 'like = ' + like : ''));
        }
      }, {
        key: "checaEmail",
        value: function checaEmail(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", new Promise(function (resolve, reject) {
                      var filter = {
                        "filter": [{
                          'type': 'andx',
                          'conditions': [{
                            'field': 'email',
                            'type': 'eq',
                            'value': email
                          }],
                          'where': 'and'
                        }],
                        "order-by": []
                      };

                      _this11.list(filter).subscribe(function (response) {
                        resolve(response.total_items <= 0);
                      }, function (error) {
                        reject(false);
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
      }]);

      return UsuarioHttpService;
    }(_base_http_service__WEBPACK_IMPORTED_MODULE_5__["BaseHttpService"]);

    UsuarioHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    UsuarioHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], UsuarioHttpService);
    /***/
  },

  /***/
  "./src/app/services/http/cadastro/usuario-perfil-http.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/services/http/cadastro/usuario-perfil-http.service.ts ***!
    \***********************************************************************/

  /*! exports provided: UsuarioPerfilHttpService */

  /***/
  function srcAppServicesHttpCadastroUsuarioPerfilHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioPerfilHttpService", function () {
      return UsuarioPerfilHttpService;
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


    var _base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-http.service */
    "./src/app/services/http/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _notify_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../notify-message.service */
    "./src/app/services/notify-message.service.ts");
    /* harmony import */


    var _usuario_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usuario-http.service */
    "./src/app/services/http/cadastro/usuario-http.service.ts");
    /* harmony import */


    var _acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../acl/perfil-http.service */
    "./src/app/services/http/acl/perfil-http.service.ts");

    var UsuarioPerfilHttpService =
    /*#__PURE__*/
    function (_base_http_service__W4) {
      _inherits(UsuarioPerfilHttpService, _base_http_service__W4);

      function UsuarioPerfilHttpService(http, notifyMessage, usuarioHttp, authService, perfilHttpService) {
        var _this12;

        _classCallCheck(this, UsuarioPerfilHttpService);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(UsuarioPerfilHttpService).call(this, http, authService, '/usuario-perfil'));
        _this12.notifyMessage = notifyMessage;
        _this12.usuarioHttp = usuarioHttp;
        _this12.authService = authService;
        _this12.perfilHttpService = perfilHttpService;
        _this12.table = 'usuario-perfil';
        return _this12;
      }

      _createClass(UsuarioPerfilHttpService, [{
        key: "salvarPerfil",
        value: function salvarPerfil(usuario, perfil_nome) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      _this13.perfilHttpService.getByLike(perfil_nome).subscribe(function (response) {
                        //Verifica se foi encontrado o perfi
                        if (response.total_items == 0) reject();
                        var perfil = response._embedded.perfil[0];
                        var usuario_perfil = {
                          usuario: usuario.id,
                          perfil: perfil.id
                        };

                        _this13.create(usuario_perfil).subscribe(function (response) {
                          resolve(true);
                        }, function (error) {
                          reject();
                        });
                      });
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }]);

      return UsuarioPerfilHttpService;
    }(_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"]);

    UsuarioPerfilHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _notify_message_service__WEBPACK_IMPORTED_MODULE_5__["NotifyMessageService"]
      }, {
        type: _usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__["PerfilHttpService"]
      }];
    };

    UsuarioPerfilHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _notify_message_service__WEBPACK_IMPORTED_MODULE_5__["NotifyMessageService"], _usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_7__["PerfilHttpService"]])], UsuarioPerfilHttpService);
    /***/
  },

  /***/
  "./src/app/services/http/configuracao/configuracao-http.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/services/http/configuracao/configuracao-http.service.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfiguracaoHttpService */

  /***/
  function srcAppServicesHttpConfiguracaoConfiguracaoHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoHttpService", function () {
      return ConfiguracaoHttpService;
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


    var _base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-http.service */
    "./src/app/services/http/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _store_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var ConfiguracaoHttpService =
    /*#__PURE__*/
    function (_base_http_service__W5) {
      _inherits(ConfiguracaoHttpService, _base_http_service__W5);

      function ConfiguracaoHttpService(http, authService, store) {
        var _this14;

        _classCallCheck(this, ConfiguracaoHttpService);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(ConfiguracaoHttpService).call(this, http, authService, "/configuracao"));
        _this14.authService = authService;
        _this14.store = store;
        _this14.table = 'configuracao';
        _this14.vm$ = _this14.store.select(_store_settings__WEBPACK_IMPORTED_MODULE_5__["selectSettingsState"]);
        return _this14;
      }

      _createClass(ConfiguracaoHttpService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadConfiguracao();

                  case 2:
                    this.configuracao = _context6.sent;

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loadConfiguracao",
        value: function loadConfiguracao() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", new Promise(function (resolve, reject) {
                      var searchParams = {
                        "filter": [],
                        "order-by": []
                      };
                      var configuracao = null;

                      _this15.list(searchParams).subscribe(function (response) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee7() {
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!(response.total_items > 0)) {
                                    _context7.next = 4;
                                    break;
                                  }

                                  configuracao = response._embedded.configuracao[0];
                                  _context7.next = 7;
                                  break;

                                case 4:
                                  _context7.next = 6;
                                  return this.salvaConfiguracao();

                                case 6:
                                  configuracao = _context7.sent;

                                case 7:
                                  resolve(configuracao);

                                case 8:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      }, function (error) {
                        console.log(error);
                        reject(null);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "salvaConfiguracao",
        value: function salvaConfiguracao() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      _this16.create({}).subscribe(function (configuracao) {
                        resolve(configuracao);
                      }, function (error) {
                        console.log(error);
                        reject();
                      });
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return _get(_getPrototypeOf(ConfiguracaoHttpService.prototype), "update", this).call(this, id, data);
        }
      }, {
        key: "autoSet",
        value: function autoSet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));

                    if (this.configuracao) {
                      _context10.next = 5;
                      break;
                    }

                    _context10.next = 4;
                    return this.loadConfiguracao();

                  case 4:
                    this.configuracao = _context10.sent;

                  case 5:
                    if (this.configuracao) {
                      _context10.next = 7;
                      break;
                    }

                    return _context10.abrupt("return");

                  case 7:
                    this.toggleFixedHeader(this.configuracao.cabecalho_fixo);
                    this.toggleFixedNavigation(this.configuracao.navegacao_fixa);
                    this.toggleMinifyNavigation(this.configuracao.navegacao_minificada);
                    this.toggleHideNavigation(this.configuracao.esconder_navegacao);
                    this.toggleTopNavigation(this.configuracao.navegacao_topo);
                    this.toggleBoxedLayout(this.configuracao.layout_caixa);
                    this.togglePushContent(this.configuracao.conteudo_envio);
                    this.toggleNoOverlay(this.configuracao.sem_sobreposicao);
                    this.toggleOffCanvas(this.configuracao.off_canvas);
                    this.toggleBiggerContentFont(this.configuracao.fonte_conteudo_maior);
                    this.toggleHighContrastText(this.configuracao.texto_contraste);
                    this.toggleDaltonism(this.configuracao.daltonimsmo);
                    this.togglePreloaderInsise(this.configuracao.pre_carregamento_dentro);
                    this.toggleCleanPageBackground(this.configuracao.limpar_fundo_pagina);
                    this.toggleHideNavigationIcons(this.configuracao.ocultar_icone_navegacao);
                    this.toggleDisableCSSAnimation(this.configuracao.desabilitar_animacao);
                    this.toggleHideInfoCard(this.configuracao.ocultar_cartao_informacao);
                    this.toggleLeanSubheader(this.configuracao.subtitulo_lean);
                    this.toggleHierarchicalNavigation(this.configuracao.navegacao_hierarquica);
                    this.setGlobalFontSize(this.configuracao.tamanho_fonte);

                  case 27:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "salvaStoreConfiguracao",
        value: function salvaStoreConfiguracao() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadConfiguracao();

                  case 2:
                    this.configuracao = _context11.sent;
                    this.vm$.subscribe(function (response) {
                      var configuracao = {
                        cabecalho_fixo: response.fixedHeader ? 1 : 0,
                        navegacao_fixa: response.fixedNavigation ? 1 : 0,
                        navegacao_minificada: response.minifyNavigation ? 1 : 0,
                        esconder_navegacao: response.hideNavigation ? 1 : 0,
                        navegacao_topo: response.topNavigation ? 1 : 0,
                        layout_caixa: response.boxedLayout ? 1 : 0,
                        conteudo_envio: response.pushContent ? 1 : 0,
                        sem_sobreposicao: response.noOverlay ? 1 : 0,
                        off_canvas: response.offCanvas ? 1 : 0,
                        fonte_conteudo_maior: response.biggerContentFont ? 1 : 0,
                        texto_contraste: response.highContrastText ? 1 : 0,
                        daltonimsmo: response.daltonism ? 1 : 0,
                        pre_carregamento_dentro: response.preloaderInside ? 1 : 0,
                        limpar_fundo_pagina: response.cleanPageBackground ? 1 : 0,
                        ocultar_icone_navegacao: response.hideNavigationIcons ? 1 : 0,
                        desabilitar_animacao: response.disableCSSAnimation ? 1 : 0,
                        ocultar_cartao_informacao: response.hideInfoCard ? 1 : 0,
                        subtitulo_lean: response.leanSubheader ? 1 : 0,
                        navegacao_hierarquica: response.hierarchicalNavigation ? 1 : 0,
                        tamanho_fonte: response.globalFontSize
                      };

                      _this17.update(_this17.configuracao.id, configuracao).subscribe(function (response) {
                        _this17.setConfiguracaoStorage(response);
                      });
                    });

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "setConfiguracaoStorage",
        value: function setConfiguracaoStorage(configuracao) {
          localStorage.setItem('configuracao', JSON.stringify(configuracao));
        }
      }, {
        key: "toggleFixedHeader",
        value: function toggleFixedHeader(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleFixedHeader"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleFixedNavigation",
        value: function toggleFixedNavigation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleFixedNavigation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleMinifyNavigation",
        value: function toggleMinifyNavigation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleMinifyNavigation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleHideNavigation",
        value: function toggleHideNavigation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleHideNavigation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleTopNavigation",
        value: function toggleTopNavigation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleTopNavigation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleBoxedLayout",
        value: function toggleBoxedLayout(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleBoxedLayout"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "togglePushContent",
        value: function togglePushContent(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["togglePushContent"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleNoOverlay",
        value: function toggleNoOverlay(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleNoOverlay"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleOffCanvas",
        value: function toggleOffCanvas(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleOffCanvas"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleBiggerContentFont",
        value: function toggleBiggerContentFont(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleBiggerContentFont"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleHighContrastText",
        value: function toggleHighContrastText(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleHighContrastText"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleDaltonism",
        value: function toggleDaltonism(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleDaltonism"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "togglePreloaderInsise",
        value: function togglePreloaderInsise(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["togglePreloaderInsise"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleCleanPageBackground",
        value: function toggleCleanPageBackground(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleCleanPageBackground"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleHideNavigationIcons",
        value: function toggleHideNavigationIcons(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleHideNavigationIcons"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleDisableCSSAnimation",
        value: function toggleDisableCSSAnimation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleDisableCSSAnimation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleHideInfoCard",
        value: function toggleHideInfoCard(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleHideInfoCard"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleLeanSubheader",
        value: function toggleLeanSubheader(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleLeanSubheader"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "toggleHierarchicalNavigation",
        value: function toggleHierarchicalNavigation(check) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["toggleHierarchicalNavigation"]({
            check: check
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "setGlobalFontSize",
        value: function setGlobalFontSize(size) {
          var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["setGlobalFontSize"]({
            size: size
          }));
          if (save) this.salvaStoreConfiguracao();
        }
      }, {
        key: "appReset",
        value: function appReset($event) {
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["appReset"]());
          this.salvaStoreConfiguracao();
        }
      }, {
        key: "factoryReset",
        value: function factoryReset($event) {
          this.store.dispatch(_store_settings__WEBPACK_IMPORTED_MODULE_5__["factoryReset"]());
          this.salvaStoreConfiguracao();
        }
      }, {
        key: "configuracao",
        get: function get() {
          return this._configuracao;
        },
        set: function set(value) {
          this._configuracao = value;
        }
      }]);

      return ConfiguracaoHttpService;
    }(_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"]);

    ConfiguracaoHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }];
    };

    ConfiguracaoHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])], ConfiguracaoHttpService);
    /***/
  },

  /***/
  "./src/app/services/notify-message.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/notify-message.service.ts ***!
    \****************************************************/

  /*! exports provided: NotifyMessageService */

  /***/
  function srcAppServicesNotifyMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyMessageService", function () {
      return NotifyMessageService;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);

    var NotifyMessageService =
    /*#__PURE__*/
    function () {
      function NotifyMessageService() {
        _classCallCheck(this, NotifyMessageService);
      }

      _createClass(NotifyMessageService, [{
        key: "success",
        value: function success(text) {
          var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", new Promise(function (resolve) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: text,
                        showConfirmButton: false,
                        timer: timer
                      }).then(function () {
                        resolve();
                      });
                    }));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }, {
        key: "error",
        value: function error(text) {
          var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    return _context13.abrupt("return", new Promise(function (resolve) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: text,
                        showConfirmButton: false,
                        timer: timer
                      }).then(function () {
                        resolve();
                      });
                    }));

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }]);

      return NotifyMessageService;
    }();

    NotifyMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotifyMessageService);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedDialogsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
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


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConfirmDialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmDialogComponent(bsModalRef) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.bsModalRef = bsModalRef;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ConfirmDialogComponent, [{
        key: "confirm",
        value: function confirm($event) {
          this.onClose.next(true);
          this.onClose.complete();
          this.bsModalRef.hide();
        }
      }, {
        key: "cancel",
        value: function cancel($event) {
          this.onClose.next(false);
          this.onClose.complete();
          this.bsModalRef.hide();
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }];
    };

    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-confirm-dialog',
      template: "\n    <div class=\"modal-header\">\n      <div class=\"modal-title\" [innerHTML]=\"title\">\n      </div>\n    </div>\n    <div class=\"modal-body\" [innerHTML]=\"message\"></div>\n    <div class=\"modal-footer\" *ngIf=\"buttons\">\n      <button (click)=\"confirm($event)\" type=\"button\" class=\"btn bootbox-accept {{buttons.confirm.className}}\">\n      {{buttons.confirm.label}}</button>\n      <button (click)=\"cancel($event)\" type=\"button\" class=\"btn bootbox-cancel {{buttons.cancel.className}}\">\n      {{buttons.cancel.label}}</button>\n    </div>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/dialogs.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/dialogs/dialogs.module.ts ***!
    \**************************************************/

  /*! exports provided: DialogsModule */

  /***/
  function srcAppSharedDialogsDialogsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogsModule", function () {
      return DialogsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _dialogs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dialogs.service */
    "./src/app/shared/dialogs/dialogs.service.ts");

    var DialogsModule = function DialogsModule() {
      _classCallCheck(this, DialogsModule);
    };

    DialogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
      entryComponents: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]],
      providers: [_dialogs_service__WEBPACK_IMPORTED_MODULE_5__["DialogsService"]]
    })], DialogsModule);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/dialogs.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/dialogs/dialogs.service.ts ***!
    \***************************************************/

  /*! exports provided: DialogsService */

  /***/
  function srcAppSharedDialogsDialogsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogsService", function () {
      return DialogsService;
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


    var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./confirm-dialog/confirm-dialog.component */
    "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");

    var DialogsService =
    /*#__PURE__*/
    function () {
      function DialogsService(rendererFactory, modalService) {
        _classCallCheck(this, DialogsService);

        this.modalService = modalService;
        this.renderer = rendererFactory.createRenderer(null, null);
      }

      _createClass(DialogsService, [{
        key: "confirm",
        value: function confirm(initialState) {
          this.playSound('messagebox');
          this.bsModalRef = this.modalService.show(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            initialState: initialState,
            backdrop: 'static',
            keyboard: false,
            class: 'modal-dialog-centered'
          });
          this.renderer.addClass(document.querySelector('.modal'), 'modal-alert');
          return this.bsModalRef.content.onClose;
        }
      }, {
        key: "playSound",
        value: function playSound(sound) {
          var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assets/media/sound';
          var audioElement = document.createElement('audio');

          if (navigator.userAgent.match('Firefox/')) {
            audioElement.setAttribute('src', path + '/' + sound + '.ogg');
          } else {
            audioElement.setAttribute('src', path + '/' + sound + '.mp3');
          }

          audioElement.addEventListener('load', function () {
            audioElement.play();
          }, true);
          audioElement.pause();
          audioElement.play();
        }
      }]);

      return DialogsService;
    }();

    DialogsService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
      }, {
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
      }];
    };

    DialogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])], DialogsService);
    /***/
  },

  /***/
  "./src/app/shared/layout/auth/auth.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/layout/auth/auth.component.ts ***!
    \******************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppSharedLayoutAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/auth/auth.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/layout/dropdown-apps/dropdown-apps.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutDropdownAppsDropdownAppsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-icon:not(.btn)[data-toggle=dropdown] + .dropdown-menu{\r\n    right: initial !important;\r\n    margin-left: -130px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9kcm9wZG93bi1hcHBzL2Ryb3Bkb3duLWFwcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Ryb3Bkb3duLWFwcHMvZHJvcGRvd24tYXBwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pY29uOm5vdCguYnRuKVtkYXRhLXRvZ2dsZT1kcm9wZG93bl0gKyAuZHJvcGRvd24tbWVudXtcclxuICAgIHJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEzMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts ***!
    \************************************************************************/

  /*! exports provided: DropdownAppsComponent */

  /***/
  function srcAppSharedLayoutDropdownAppsDropdownAppsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownAppsComponent", function () {
      return DropdownAppsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropdownAppsComponent =
    /*#__PURE__*/
    function () {
      function DropdownAppsComponent() {
        _classCallCheck(this, DropdownAppsComponent);
      }

      _createClass(DropdownAppsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownAppsComponent;
    }();

    DropdownAppsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-dropdown-apps',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown-apps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-apps/dropdown-apps.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown-apps.component.css */
      "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DropdownAppsComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/dropdown-user/dropdown-user.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/layout/dropdown-user/dropdown-user.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutDropdownUserDropdownUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-icon:not(.btn)[data-toggle=dropdown] + .dropdown-menu{\r\n    right: initial !important;\r\n    margin-left: -20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9kcm9wZG93bi11c2VyL2Ryb3Bkb3duLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Ryb3Bkb3duLXVzZXIvZHJvcGRvd24tdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pY29uOm5vdCguYnRuKVtkYXRhLXRvZ2dsZT1kcm9wZG93bl0gKyAuZHJvcGRvd24tbWVudXtcclxuICAgIHJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/layout/dropdown-user/dropdown-user.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/layout/dropdown-user/dropdown-user.component.ts ***!
    \************************************************************************/

  /*! exports provided: DropdownUserComponent */

  /***/
  function srcAppSharedLayoutDropdownUserDropdownUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownUserComponent", function () {
      return DropdownUserComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DropdownUserComponent =
    /*#__PURE__*/
    function () {
      function DropdownUserComponent(authService, router, changeRef) {
        var _this18 = this;

        _classCallCheck(this, DropdownUserComponent);

        this.authService = authService;
        this.router = router;
        this.changeRef = changeRef;
        this.setUsuario();
        this.router.events.subscribe(function (evt) {
          if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            // trick the Router into believing it's last link wasn't previously loaded
            _this18.router.navigated = false; // if you need to scroll back to top, here is the right place

            window.scrollTo(0, 0);

            _this18.setUsuario();
          }
        });
      }

      _createClass(DropdownUserComponent, [{
        key: "setUsuario",
        value: function setUsuario() {
          this.usuario = this.authService.getUsuarioSession();
          this.foto = this.authService.getFoto();
        }
      }, {
        key: "deslogar",
        value: function deslogar() {
          this.authService.logout();
          this.router.navigateByUrl('/auth');
        }
      }]);

      return DropdownUserComponent;
    }();

    DropdownUserComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    DropdownUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-dropdown-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/dropdown-user/dropdown-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown-user.component.css */
      "./src/app/shared/layout/dropdown-user/dropdown-user.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], DropdownUserComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FabShortcutComponent */

  /***/
  function srcAppSharedLayoutFabShortcutFabShortcutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabShortcutComponent", function () {
      return FabShortcutComponent;
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


    var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils.functions */
    "./src/app/shared/utils/utils.functions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/router */
    "./src/app/store/router/index.ts");

    var FabShortcutComponent =
    /*#__PURE__*/
    function () {
      function FabShortcutComponent(store) {
        _classCallCheck(this, FabShortcutComponent);

        this.store = store;
      }

      _createClass(FabShortcutComponent, [{
        key: "scrollTop",
        value: function scrollTop($event) {
          $event.preventDefault();
          Object(_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToTop"])(150);
        }
      }, {
        key: "logout",
        value: function logout($event) {
          $event.preventDefault();
          this.store.dispatch(new src_app_store_router__WEBPACK_IMPORTED_MODULE_4__["Go"]({
            path: ['/logout']
          }));
        }
      }, {
        key: "fullScreen",
        value: function fullScreen($event) {
          $event.preventDefault();
          Object(_utils_utils_functions__WEBPACK_IMPORTED_MODULE_2__["toggleFullscreen"])();
        }
      }, {
        key: "printPage",
        value: function printPage($event) {
          $event.preventDefault();
          window.print();
        }
      }]);

      return FabShortcutComponent;
    }();

    FabShortcutComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    FabShortcutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-fab-shortcut',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fab-shortcut.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/fab-shortcut/fab-shortcut.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], FabShortcutComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/layout.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/layout/layout.module.ts ***!
    \************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppSharedLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/shared/layout/main/main.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/shared/layout/auth/auth.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/layout/sidebar/sidebar.component.ts");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./logo/logo.component */
    "./src/app/shared/layout/logo/logo.component.ts");
    /* harmony import */


    var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./page-header/page-header.component */
    "./src/app/shared/layout/page-header/page-header.component.ts");
    /* harmony import */


    var _page_breadcrumb_page_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./page-breadcrumb/page-breadcrumb.component */
    "./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts");
    /* harmony import */


    var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./page-heading/page-heading.component */
    "./src/app/shared/layout/page-heading/page-heading.component.ts");
    /* harmony import */


    var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./page-footer/page-footer.component */
    "./src/app/shared/layout/page-footer/page-footer.component.ts");
    /* harmony import */


    var _dropdown_apps_dropdown_apps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dropdown-apps/dropdown-apps.component */
    "./src/app/shared/layout/dropdown-apps/dropdown-apps.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/shared/layout/settings/settings.component.ts");
    /* harmony import */


    var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./settings-modal/settings-modal.component */
    "./src/app/shared/layout/settings-modal/settings-modal.component.ts");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../ui/ui.module */
    "./src/app/shared/ui/ui.module.ts");
    /* harmony import */


    var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../navigation/navigation.module */
    "./src/app/shared/navigation/navigation.module.ts");
    /* harmony import */


    var _settings_shortcut_settings_shortcut_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./settings-shortcut/settings-shortcut.component */
    "./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts");
    /* harmony import */


    var _shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shortcut-modal/shortcut-modal.component */
    "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts");
    /* harmony import */


    var _fab_shortcut_fab_shortcut_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./fab-shortcut/fab-shortcut.component */
    "./src/app/shared/layout/fab-shortcut/fab-shortcut.component.ts");
    /* harmony import */


    var _dropdown_user_dropdown_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dropdown-user/dropdown-user.component */
    "./src/app/shared/layout/dropdown-user/dropdown-user.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_10__["LogoComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"], _page_breadcrumb_page_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["PageBreadcrumbComponent"], _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_13__["PageHeadingComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_14__["PageFooterComponent"], _dropdown_apps_dropdown_apps_component__WEBPACK_IMPORTED_MODULE_15__["DropdownAppsComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"], _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__["SettingsModalComponent"], _settings_shortcut_settings_shortcut_component__WEBPACK_IMPORTED_MODULE_20__["SettingsShortcutComponent"], _shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__["ShortcutModalComponent"], _fab_shortcut_fab_shortcut_component__WEBPACK_IMPORTED_MODULE_22__["FabShortcutComponent"], _dropdown_user_dropdown_user_component__WEBPACK_IMPORTED_MODULE_23__["DropdownUserComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_19__["NavigationModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_18__["UiModule"]],
      exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"]],
      entryComponents: [_shortcut_modal_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_21__["ShortcutModalComponent"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/shared/layout/logo/logo.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/layout/logo/logo.component.ts ***!
    \******************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppSharedLayoutLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
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


    var _shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shortcut-modal/shortcut-modal.service */
    "./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var LogoComponent =
    /*#__PURE__*/
    function () {
      function LogoComponent(shortcut) {
        _classCallCheck(this, LogoComponent);

        this.shortcut = shortcut;
        this.logo = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].logo;
        this.appName = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].appName;
      }

      _createClass(LogoComponent, [{
        key: "openShortcut",
        value: function openShortcut($event) {
          $event.preventDefault();
          this.shortcut.openModal();
        }
      }]);

      return LogoComponent;
    }();

    LogoComponent.ctorParameters = function () {
      return [{
        type: _shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutModalService"]
      }];
    };

    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/logo/logo.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shortcut_modal_shortcut_modal_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutModalService"]])], LogoComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/main/main.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/layout/main/main.component.ts ***!
    \******************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppSharedLayoutMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(store, authService, router, changeDetect) {
        var _this19 = this;

        _classCallCheck(this, MainComponent);

        this.store = store;
        this.authService = authService;
        this.router = router;
        this.changeDetect = changeDetect;
        this.app = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].app;
        this.previousUrl = '';
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
            if (_this19.previousUrl == '/auth') {
              _this19.initFunctions();
            }

            _this19.previousUrl = _this19.router.url;
          }
        });
      }

      _createClass(MainComponent, [{
        key: "closeMobileNav",
        value: function closeMobileNav($event) {
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["mobileNavigation"])({
            open: false
          }));
        }
      }, {
        key: "initFunctions",
        value: function initFunctions() {}
      }, {
        key: "canShowNavBar",
        value: function canShowNavBar() {
          //return this.authService.isAuth() && !this.inAuthRoute();
          return !this.inAuthRoute();
        }
      }, {
        key: "inAuthRoute",
        value: function inAuthRoute() {
          var authRoutes = ['/', '/auth', '/forgot', '/register'];

          for (var _i = 0, _authRoutes = authRoutes; _i < _authRoutes.length; _i++) {
            var route = _authRoutes[_i];

            if (route != '/') {
              var encontrou = this.router.url.indexOf(route);

              if (encontrou !== -1) {
                return true;
              }
            }
          } // @ts-ignore


          return authRoutes.includes(this.router.url);
        }
      }, {
        key: "filterItems",
        value: function filterItems(needle, heystack) {
          var query = needle.toLowerCase();
          return heystack.filter(function (item) {
            return item.toLowerCase().indexOf(query) >= 0;
          });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/main/main.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MainComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PageBreadcrumbComponent */

  /***/
  function srcAppSharedLayoutPageBreadcrumbPageBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageBreadcrumbComponent", function () {
      return PageBreadcrumbComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/router */
    "./src/app/store/router/index.ts");

    var PageBreadcrumbComponent = function PageBreadcrumbComponent(store) {
      _classCallCheck(this, PageBreadcrumbComponent);

      this.store = store;
      this.date = Date.now();
      this.vm$ = this.store.select(src_app_store_router__WEBPACK_IMPORTED_MODULE_3__["getRouterState"]);
    };

    PageBreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    PageBreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-page-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-breadcrumb/page-breadcrumb.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], PageBreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/page-footer/page-footer.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/layout/page-footer/page-footer.component.ts ***!
    \********************************************************************/

  /*! exports provided: PageFooterComponent */

  /***/
  function srcAppSharedLayoutPageFooterPageFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function () {
      return PageFooterComponent;
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


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var PageFooterComponent =
    /*#__PURE__*/
    function () {
      function PageFooterComponent() {
        _classCallCheck(this, PageFooterComponent);

        this.copyright = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].copyright;
      }

      _createClass(PageFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageFooterComponent;
    }();

    PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-page-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-footer/page-footer.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageFooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/page-header/page-header.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/layout/page-header/page-header.component.ts ***!
    \********************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppSharedLayoutPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var PageHeaderComponent =
    /*#__PURE__*/
    function () {
      function PageHeaderComponent(store) {
        _classCallCheck(this, PageHeaderComponent);

        this.store = store;
        this.avatar = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].avatar;
        this.email = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].email;
        this.user = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].user;
      }

      _createClass(PageHeaderComponent, [{
        key: "openMobileNav",
        value: function openMobileNav($event) {
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["mobileNavigation"])({
            open: true
          }));
        }
      }]);

      return PageHeaderComponent;
    }();

    PageHeaderComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-page-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-header/page-header.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], PageHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/page-heading/page-heading.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/layout/page-heading/page-heading.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PageHeadingComponent */

  /***/
  function srcAppSharedLayoutPageHeadingPageHeadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function () {
      return PageHeadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageHeadingComponent =
    /*#__PURE__*/
    function () {
      function PageHeadingComponent() {
        _classCallCheck(this, PageHeadingComponent);
      }

      _createClass(PageHeadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageHeadingComponent;
    }();

    PageHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-page-heading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-heading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/page-heading/page-heading.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageHeadingComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/settings-modal/settings-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/layout/settings-modal/settings-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SettingsModalComponent */

  /***/
  function srcAppSharedLayoutSettingsModalSettingsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModalComponent", function () {
      return SettingsModalComponent;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _settings_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings-modal.service */
    "./src/app/shared/layout/settings-modal/settings-modal.service.ts");
    /* harmony import */


    var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/http/acl/privilegio-http.service */
    "./src/app/services/http/acl/privilegio-http.service.ts");

    var SettingsModalComponent =
    /*#__PURE__*/
    function () {
      function SettingsModalComponent(sms, modalService, privilegioHttpService) {
        var _this20 = this;

        _classCallCheck(this, SettingsModalComponent);

        this.modalService = modalService;
        this.privilegioHttpService = privilegioHttpService;
        this.liberaConfiguracao = false;
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        this.sub.sink = sms.openSettings$.subscribe(function () {
          _this20.showModal();
        });
      }

      _createClass(SettingsModalComponent, [{
        key: "openModal",
        value: function openModal($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    $event.preventDefault();
                    this.showModal();

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "showModal",
        value: function showModal() {
          this.modalRef = this.modalService.show(this.template, {
            class: 'modal-dialog-right modal-md'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return SettingsModalComponent;
    }();

    SettingsModalComponent.ctorParameters = function () {
      return [{
        type: _settings_modal_service__WEBPACK_IMPORTED_MODULE_4__["SettingsModalService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegioHttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SettingsModalComponent.prototype, "template", void 0);
    SettingsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-settings-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-modal/settings-modal.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_modal_service__WEBPACK_IMPORTED_MODULE_4__["SettingsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegioHttpService"]])], SettingsModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/settings-modal/settings-modal.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/layout/settings-modal/settings-modal.service.ts ***!
    \************************************************************************/

  /*! exports provided: SettingsModalService */

  /***/
  function srcAppSharedLayoutSettingsModalSettingsModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModalService", function () {
      return SettingsModalService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SettingsModalService =
    /*#__PURE__*/
    function () {
      function SettingsModalService() {
        _classCallCheck(this, SettingsModalService);

        this.openSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SettingsModalService, [{
        key: "openModal",
        value: function openModal() {
          this.openSettings$.next(true);
        }
      }]);

      return SettingsModalService;
    }();

    SettingsModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SettingsModalService);
    /***/
  },

  /***/
  "./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/layout/settings-shortcut/settings-shortcut.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SettingsShortcutComponent */

  /***/
  function srcAppSharedLayoutSettingsShortcutSettingsShortcutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsShortcutComponent", function () {
      return SettingsShortcutComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/http/configuracao/configuracao-http.service */
    "./src/app/services/http/configuracao/configuracao-http.service.ts");

    var SettingsShortcutComponent =
    /*#__PURE__*/
    function () {
      function SettingsShortcutComponent(store, configuracaoHttpService) {
        _classCallCheck(this, SettingsShortcutComponent);

        this.store = store;
        this.configuracaoHttpService = configuracaoHttpService;
      }

      _createClass(SettingsShortcutComponent, [{
        key: "saveStorage",
        value: function saveStorage(field) {
          this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
          this.configuracao[field] = !this.configuracao[field];
          localStorage.setItem('configuracao', JSON.stringify(this.configuracao));
        }
      }, {
        key: "toggleHideNavigation",
        value: function toggleHideNavigation($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    $event.preventDefault();
                    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
                    this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleHideNavigation"]({
                      check: !this.configuracao.esconder_navegacao
                    }));
                    this.saveStorage('esconder_navegacao');

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "toggleMinifyNavigation",
        value: function toggleMinifyNavigation($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    $event.preventDefault();
                    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
                    this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleMinifyNavigation"]({
                      check: !this.configuracao.navegacao_minificada
                    }));
                    this.saveStorage('navegacao_minificada');

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "toggleFixedNavigation",
        value: function toggleFixedNavigation($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    $event.preventDefault();
                    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
                    this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleFixedNavigation"]({
                      check: !this.configuracao.navegacao_fixa
                    }));
                    this.saveStorage('navegacao_fixa');

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return SettingsShortcutComponent;
    }();

    SettingsShortcutComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__["ConfiguracaoHttpService"]
      }];
    };

    SettingsShortcutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-settings-shortcut',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings-shortcut.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings-shortcut/settings-shortcut.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__["ConfiguracaoHttpService"]])], SettingsShortcutComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/settings/settings.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/layout/settings/settings.component.ts ***!
    \**************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSharedLayoutSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/http/configuracao/configuracao-http.service */
    "./src/app/services/http/configuracao/configuracao-http.service.ts");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(store, configuracaoHttpService) {
        _classCallCheck(this, SettingsComponent);

        this.store = store;
        this.configuracaoHttpService = configuracaoHttpService;
        this.vm$ = this.store.select(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["selectSettingsState"]);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__["ConfiguracaoHttpService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/settings/settings.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_http_configuracao_configuracao_http_service__WEBPACK_IMPORTED_MODULE_4__["ConfiguracaoHttpService"]])], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ShortcutModalComponent */

  /***/
  function srcAppSharedLayoutShortcutModalShortcutModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortcutModalComponent", function () {
      return ShortcutModalComponent;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var ShortcutModalComponent =
    /*#__PURE__*/
    function () {
      function ShortcutModalComponent(bsModalRef) {
        _classCallCheck(this, ShortcutModalComponent);

        this.bsModalRef = bsModalRef;
      }

      _createClass(ShortcutModalComponent, [{
        key: "closeShortcut",
        value: function closeShortcut($event) {
          this.bsModalRef.hide();
        }
      }]);

      return ShortcutModalComponent;
    }();

    ShortcutModalComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }];
    };

    ShortcutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-shortcut-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shortcut-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/shortcut-modal/shortcut-modal.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])], ShortcutModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/layout/shortcut-modal/shortcut-modal.service.ts ***!
    \************************************************************************/

  /*! exports provided: ShortcutModalService */

  /***/
  function srcAppSharedLayoutShortcutModalShortcutModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortcutModalService", function () {
      return ShortcutModalService;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shortcut_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shortcut-modal.component */
    "./src/app/shared/layout/shortcut-modal/shortcut-modal.component.ts");

    var ShortcutModalService =
    /*#__PURE__*/
    function () {
      function ShortcutModalService(modalService) {
        _classCallCheck(this, ShortcutModalService);

        this.modalService = modalService;
      }

      _createClass(ShortcutModalService, [{
        key: "openModal",
        value: function openModal() {
          this.bsModalRef = this.modalService.show(_shortcut_modal_component__WEBPACK_IMPORTED_MODULE_3__["ShortcutModalComponent"], {
            class: 'modal-dialog-top modal-transparent'
          });
        }
      }]);

      return ShortcutModalService;
    }();

    ShortcutModalService.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    ShortcutModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])], ShortcutModalService);
    /***/
  },

  /***/
  "./src/app/shared/layout/sidebar/sidebar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/layout/sidebar/sidebar.component.ts ***!
    \************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedLayoutSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
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


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var SidebarComponent = function SidebarComponent(store) {
      _classCallCheck(this, SidebarComponent);

      this.store = store;
      this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__["selectFilter"]);
    };

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/sidebar/sidebar.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NavFilterMsgComponent */

  /***/
  function srcAppSharedNavigationNavFilterMsgNavFilterMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavFilterMsgComponent", function () {
      return NavFilterMsgComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");

    var NavFilterMsgComponent = function NavFilterMsgComponent(store) {
      _classCallCheck(this, NavFilterMsgComponent);

      this.store = store;
      this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectResult"]);
    };

    NavFilterMsgComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    NavFilterMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-nav-filter-msg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-filter-msg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], NavFilterMsgComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav-filter/nav-filter.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/navigation/nav-filter/nav-filter.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavFilterComponent */

  /***/
  function srcAppSharedNavigationNavFilterNavFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavFilterComponent", function () {
      return NavFilterComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var NavFilterComponent =
    /*#__PURE__*/
    function () {
      function NavFilterComponent(store) {
        var _this21 = this;

        _classCallCheck(this, NavFilterComponent);

        this.store = store;
        this.vm$ = this.store.select(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectFilter"]);
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.textThrhottle$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.sub.sink = this.textThrhottle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (text) {
          _this21.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationFilter"])({
            text: text
          }));
        })).subscribe();
      }

      _createClass(NavFilterComponent, [{
        key: "toggleFilter",
        value: function toggleFilter($event) {
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["toggleFilter"])());
        }
      }, {
        key: "handleKeyup",
        value: function handleKeyup($event, value) {
          this.textThrhottle$.next(value.trim());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return NavFilterComponent;
    }();

    NavFilterComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    NavFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-nav-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-filter/nav-filter.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], NavFilterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav-footer/nav-footer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/navigation/nav-footer/nav-footer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavFooterComponent */

  /***/
  function srcAppSharedNavigationNavFooterNavFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavFooterComponent", function () {
      return NavFooterComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/http/acl/privilegio-http.service */
    "./src/app/services/http/acl/privilegio-http.service.ts");

    var NavFooterComponent =
    /*#__PURE__*/
    function () {
      function NavFooterComponent(store, privilegioHttpService) {
        _classCallCheck(this, NavFooterComponent);

        this.store = store;
        this.privilegioHttpService = privilegioHttpService;
      }

      _createClass(NavFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
        }
      }, {
        key: "saveStorage",
        value: function saveStorage(field) {
          this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
          this.configuracao[field] = !this.configuracao[field];
          localStorage.setItem('configuracao', JSON.stringify(this.configuracao));
        }
      }, {
        key: "toggleMinifyNavigation",
        value: function toggleMinifyNavigation($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    $event.preventDefault();
                    this.configuracao = JSON.parse(localStorage.getItem('configuracao'));
                    this.store.dispatch(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["toggleMinifyNavigation"]({
                      check: !this.configuracao.navegacao_minificada
                    }));
                    this.saveStorage('navegacao_minificada');

                  case 4:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return NavFooterComponent;
    }();

    NavFooterComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"]
      }];
    };

    NavFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-nav-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-footer/nav-footer.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"]])], NavFooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NavInfoCardComponent */

  /***/
  function srcAppSharedNavigationNavInfoCardNavInfoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavInfoCardComponent", function () {
      return NavInfoCardComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavInfoCardComponent =
    /*#__PURE__*/
    function () {
      function NavInfoCardComponent(store, authService, router) {
        var _this22 = this;

        _classCallCheck(this, NavInfoCardComponent);

        this.store = store;
        this.authService = authService;
        this.router = router;
        this.user = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].user;
        this.avatar = src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"].avatar;
        this.usuario = this.authService.getUsuarioSession();
        this.router.events.subscribe(function (evt) {
          if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            // trick the Router into believing it's last link wasn't previously loaded
            _this22.router.navigated = false; // if you need to scroll back to top, here is the right place

            window.scrollTo(0, 0);
            _this22.usuario = _this22.authService.getUsuarioSession();
          }
        });
      }

      _createClass(NavInfoCardComponent, [{
        key: "toggleFilter",
        value: function toggleFilter($event) {
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["toggleFilter"])());
        }
      }]);

      return NavInfoCardComponent;
    }();

    NavInfoCardComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    NavInfoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-nav-info-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-info-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-info-card/nav-info-card.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], NavInfoCardComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav-item/nav-item.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/navigation/nav-item/nav-item.component.ts ***!
    \******************************************************************/

  /*! exports provided: NavItemComponent */

  /***/
  function srcAppSharedNavigationNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
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


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utils/animations */
    "./src/app/shared/utils/animations.ts");

    var NavItemComponent =
    /*#__PURE__*/
    function () {
      function NavItemComponent(store) {
        _classCallCheck(this, NavItemComponent);

        this.store = store;
      }

      _createClass(NavItemComponent, [{
        key: "toggleSection",
        value: function toggleSection($event) {
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_2__["toggleNavSection"])({
            item: this.item
          }));
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(idx, item) {
          return item.title + '_' + idx;
        }
      }, {
        key: "active",
        get: function get() {
          return this.item.active;
        }
      }, {
        key: "open",
        get: function get() {
          return this.item.open;
        }
      }, {
        key: "hidden",
        get: function get() {
          return this.item.matched !== null && !this.item.matched;
        }
      }, {
        key: "shown",
        get: function get() {
          return this.item.matched !== null && this.item.matched;
        }
      }, {
        key: "navTitle",
        get: function get() {
          return this.item.navTitle;
        }
      }]);

      return NavItemComponent;
    }();

    NavItemComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], NavItemComponent.prototype, "minified", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavItemComponent.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavItemComponent.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.js-filter-hide]'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavItemComponent.prototype, "hidden", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.js-filter-show]'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavItemComponent.prototype, "shown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.nav-title]'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavItemComponent.prototype, "navTitle", null);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: '[smart-nav-item]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav-item/nav-item.component.html")).default,
      animations: [Object(_utils_animations__WEBPACK_IMPORTED_MODULE_4__["makeSlideInOut"])()],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], NavItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/nav/nav.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/navigation/nav/nav.component.ts ***!
    \********************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppSharedNavigationNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var src_app_store_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/http/acl/privilegio-http.service */
    "./src/app/services/http/acl/privilegio-http.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(store, changeRef, privilegioHttpService, authService) {
        _classCallCheck(this, NavComponent);

        this.store = store;
        this.changeRef = changeRef;
        this.privilegioHttpService = privilegioHttpService;
        this.authService = authService;
        this.vm$ = this.store.select(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(src_app_store_navigation__WEBPACK_IMPORTED_MODULE_3__["selectNavigationItems"], src_app_store_settings__WEBPACK_IMPORTED_MODULE_4__["selectSettingsState"], function (items, settings) {
          return {
            items: items,
            minified: settings.minifyNavigation
          };
        }));
        this.usuario = this.authService.getUsuarioSession();
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (this.authService.isAdmin()) {
                      this.vm$.subscribe(function (response) {
                        return _this23.items = response.items;
                      });
                    } else {
                      this.vm$.subscribe(function (response) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee21() {
                          var _this24 = this;

                          return regeneratorRuntime.wrap(function _callee21$(_context21) {
                            while (1) {
                              switch (_context21.prev = _context21.next) {
                                case 0:
                                  if (!this.usuario) {
                                    _context21.next = 3;
                                    break;
                                  }

                                  _context21.next = 3;
                                  return this.privilegioHttpService.permiteMassa(response.items, 'Visualizar').subscribe(function (resposta) {
                                    var _loop = function _loop(i) {
                                      var item = response.items[i];

                                      if (item.items) {
                                        if (item.items.length > 0) {
                                          var _loop2 = function _loop2(j) {
                                            var subitem = item.items[j];

                                            if (resposta.find(function (x) {
                                              return x.recurso == subitem.title;
                                            }) && !resposta.find(function (x) {
                                              return x.recurso == subitem.title;
                                            }).permite) {
                                              delete item.items[j];
                                            }
                                          };

                                          for (var j in item.items) {
                                            _loop2(j);
                                          }

                                          item.items = _this24.cleanArray(item.items);
                                        }

                                        if (item.items.length == 0) {
                                          delete response.items[i];
                                        }
                                      } else {
                                        if (resposta.find(function (x) {
                                          return x.recurso == item.title;
                                        }) && !resposta.find(function (x) {
                                          return x.recurso == item.title;
                                        }).permite) {
                                          delete response.items[i];

                                          _this24.changeRef.detectChanges();
                                        }
                                      }
                                    };

                                    for (var i in response.items) {
                                      _loop(i);
                                    }

                                    response.items = _this24.cleanArray(response.items);
                                    _this24.items = response.items;

                                    _this24.changeRef.detectChanges();
                                  });

                                case 3:
                                case "end":
                                  return _context21.stop();
                              }
                            }
                          }, _callee21, this);
                        }));
                      });
                    }

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(idx, item) {
          return item.title + '_' + idx;
        }
      }, {
        key: "cleanArray",
        value: function cleanArray(actual) {
          var newArray = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = actual[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var item = _step5.value;
              if (!item) continue;
              newArray.push(item);
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

          return newArray;
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegioHttpService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/nav/nav.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegioHttpService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], NavComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/navigation.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/navigation/navigation.module.ts ***!
    \********************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcAppSharedNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-filter/nav-filter.component */
    "./src/app/shared/navigation/nav-filter/nav-filter.component.ts");
    /* harmony import */


    var _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-info-card/nav-info-card.component */
    "./src/app/shared/navigation/nav-info-card/nav-info-card.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/shared/navigation/nav/nav.component.ts");
    /* harmony import */


    var _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-filter-msg/nav-filter-msg.component */
    "./src/app/shared/navigation/nav-filter-msg/nav-filter-msg.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/shared/navigation/navigation/navigation.component.ts");
    /* harmony import */


    var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav-item/nav-item.component */
    "./src/app/shared/navigation/nav-item/nav-item.component.ts");
    /* harmony import */


    var _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./nav-footer/nav-footer.component */
    "./src/app/shared/navigation/nav-footer/nav-footer.component.ts");
    /* harmony import */


    var _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../utils/utils.module */
    "./src/app/shared/utils/utils.module.ts");

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__["NavFilterComponent"], _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__["NavInfoCardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__["NavFilterMsgComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_10__["NavItemComponent"], _nav_footer_nav_footer_component__WEBPACK_IMPORTED_MODULE_11__["NavFooterComponent"]],
      exports: [_nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_4__["NavFilterComponent"], _nav_info_card_nav_info_card_component__WEBPACK_IMPORTED_MODULE_5__["NavInfoCardComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _nav_filter_msg_nav_filter_msg_component__WEBPACK_IMPORTED_MODULE_7__["NavFilterMsgComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"]]
    })], NavigationModule);
    /***/
  },

  /***/
  "./src/app/shared/navigation/navigation/navigation.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/navigation/navigation/navigation.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedNavigationNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/settings */
    "./src/app/store/settings/index.ts");

    var NavigationComponent = function NavigationComponent(store) {
      _classCallCheck(this, NavigationComponent);

      this.store = store;
      this.vm$ = this.store.select(src_app_store_settings__WEBPACK_IMPORTED_MODULE_3__["selectSettingsState"]);
    };

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-navigation',
      template: "\n    <!-- BEGIN PRIMARY NAVIGATION -->\n    <nav *ngIf=\"vm$ | async as vm\" id=\"js-primary-nav\" class=\"primary-nav\" [class.h-100]=\"vm.fixedNavigation\" role=\"navigation\">\n      <smart-nav-filter></smart-nav-filter>\n      <smart-nav-info-card></smart-nav-info-card>\n      <smart-nav></smart-nav>\n      <smart-nav-filter-msg></smart-nav-filter-msg>\n    </nav>\n    <!-- END PRIMARY NAVIGATION -->\n    <smart-nav-footer></smart-nav-footer>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/shared/ui/on-off/on-off.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/ui/on-off/on-off.component.ts ***!
    \******************************************************/

  /*! exports provided: OnOffComponent */

  /***/
  function srcAppSharedUiOnOffOnOffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnOffComponent", function () {
      return OnOffComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OnOffComponent =
    /*#__PURE__*/
    function () {
      function OnOffComponent() {
        _classCallCheck(this, OnOffComponent);

        this.checked = false;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(OnOffComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.checked || changes.checked.currentValue === this.checked) {
            return;
          }
        }
      }, {
        key: "onCheck",
        value: function onCheck($event) {
          $event.preventDefault();
          this.checked = !this.checked;
          this.checkedChange.emit(this.checked);
        }
      }]);

      return OnOffComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], OnOffComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], OnOffComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], OnOffComponent.prototype, "checkedChange", void 0);
    OnOffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'smart-on-off',
      template: "\n  <a\n    href=\"#\"\n    (click)=\"onCheck($event)\"\n    class=\"btn btn-switch {{class}}\"\n    [class.active]=\"checked\"></a>\n  ",
      host: {
        class: 'd-inline-block'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], OnOffComponent);
    /***/
  },

  /***/
  "./src/app/shared/ui/ui.module.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/ui/ui.module.ts ***!
    \****************************************/

  /*! exports provided: UiModule */

  /***/
  function srcAppSharedUiUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiModule", function () {
      return UiModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./on-off/on-off.component */
    "./src/app/shared/ui/on-off/on-off.component.ts");

    var UiModule = function UiModule() {
      _classCallCheck(this, UiModule);
    };

    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__["OnOffComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__["OnOffComponent"]]
    })], UiModule);
    /***/
  },

  /***/
  "./src/app/shared/utils/animations.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/utils/animations.ts ***!
    \********************************************/

  /*! exports provided: makeSlideInOut */

  /***/
  function srcAppSharedUtilsAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "makeSlideInOut", function () {
      return makeSlideInOut;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function makeSlideInOut() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '*',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '*',
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: '0'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '0',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: '1'
      }))])])]);
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/directives/stub-click.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/utils/directives/stub-click.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: StubClickDirective */

  /***/
  function srcAppSharedUtilsDirectivesStubClickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StubClickDirective", function () {
      return StubClickDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StubClickDirective =
    /*#__PURE__*/
    function () {
      function StubClickDirective() {
        _classCallCheck(this, StubClickDirective);
      }

      _createClass(StubClickDirective, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          event.preventDefault();
        }
      }]);

      return StubClickDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], StubClickDirective.prototype, "onMouseDown", null);
    StubClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[smartStubClick]'
    })], StubClickDirective);
    /***/
  },

  /***/
  "./src/app/shared/utils/utils.functions.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/utils/utils.functions.ts ***!
    \*************************************************/

  /*! exports provided: scrollToTop, toggleFullscreen, handleClassCondition */

  /***/
  function srcAppSharedUtilsUtilsFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollToTop", function () {
      return scrollToTop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function () {
      return toggleFullscreen;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "handleClassCondition", function () {
      return handleClassCondition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function scrollToTop(scrollDuration) {
      var cosParameter = window.scrollY / 2;
      var scrollCount = 0;
      var oldTimestamp = performance.now();

      function step(newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0);
        }

        if (window.scrollY === 0) {
          return;
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    }
    /* tslint:disable */


    function toggleFullscreen() {
      if (!document.fullscreenElement
      /* Standard browsers */
      && !document['msFullscreenElement']
      /* Internet Explorer */
      && !document['mozFullScreenElement']
      /* Firefox */
      && !document['webkitFullscreenElement']
      /* Chrome */
      ) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement['msRequestFullscreen']) {
            document.documentElement['msRequestFullscreen']();
          } else if (document.documentElement['mozRequestFullScreen']) {
            document.documentElement['mozRequestFullScreen']();
          } else if (document.documentElement['webkitRequestFullscreen']) {
            document.documentElement['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
          }
        } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document['msExitFullscreen']) {
          document['msExitFullscreen']();
        } else if (document['mozCancelFullScreen']) {
          document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
          document['webkitExitFullscreen']();
        }
      }
    }
    /* tslint:enable */
    // conditionaly apply css class to target


    function handleClassCondition(condition, className, el) {
      if (!condition && el.classList.contains(className)) {
        el.classList.remove(className);
      }

      if (condition && !el.classList.contains(className)) {
        el.classList.add(className);
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/utils/utils.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/utils/utils.module.ts ***!
    \**********************************************/

  /*! exports provided: UtilsModule */

  /***/
  function srcAppSharedUtilsUtilsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsModule", function () {
      return UtilsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directives/stub-click.directive */
    "./src/app/shared/utils/directives/stub-click.directive.ts");

    var UtilsModule = function UtilsModule() {
      _classCallCheck(this, UtilsModule);
    };

    UtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__["StubClickDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_directives_stub_click_directive__WEBPACK_IMPORTED_MODULE_3__["StubClickDirective"]]
    })], UtilsModule);
    /***/
  },

  /***/
  "./src/app/store/index.ts":
  /*!********************************!*\
    !*** ./src/app/store/index.ts ***!
    \********************************/

  /*! exports provided: reducers, localStorageSyncReducer, metaReducers, effects */

  /***/
  function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function () {
      return localStorageSyncReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngrx-store-localstorage */
    "./node_modules/ngrx-store-localstorage/dist/index.js");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navigation */
    "./src/app/store/navigation/index.ts");
    /* harmony import */


    var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./router */
    "./src/app/store/router/index.ts");

    var reducers = {
      settings: _settings__WEBPACK_IMPORTED_MODULE_3__["reducer"],
      navigation: _navigation__WEBPACK_IMPORTED_MODULE_4__["reducer"],
      router: _router__WEBPACK_IMPORTED_MODULE_5__["reducer"]
    }; // this will save part of redux store into localstorage
    // and restore this part on app init

    function localStorageSyncReducer(reducer) {
      return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__["localStorageSync"])({
        keys: ['settings'],
        rehydrate: true
      })(reducer);
    }

    var metaReducers = [localStorageSyncReducer, _settings__WEBPACK_IMPORTED_MODULE_3__["settingsMetaReducer"]].concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : // production only meta reducers
    [] // dev only meta reducers
    );
    var effects = [_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationEffects"]];
    /***/
  },

  /***/
  "./src/app/store/navigation/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/navigation/index.ts ***!
    \*******************************************/

  /*! exports provided: toggleNavSection, activeUrl, toggleFilter, navigationFilter, mobileNavigation, NavigationEffects, initialState, reducer, selectNavigationState, selectNavigationItems, selectFilter, selectResult */

  /***/
  function srcAppStoreNavigationIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navigation_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.actions */
    "./src/app/store/navigation/navigation.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleNavSection", function () {
      return _navigation_actions__WEBPACK_IMPORTED_MODULE_1__["toggleNavSection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "activeUrl", function () {
      return _navigation_actions__WEBPACK_IMPORTED_MODULE_1__["activeUrl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleFilter", function () {
      return _navigation_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFilter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "navigationFilter", function () {
      return _navigation_actions__WEBPACK_IMPORTED_MODULE_1__["navigationFilter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mobileNavigation", function () {
      return _navigation_actions__WEBPACK_IMPORTED_MODULE_1__["mobileNavigation"];
    });
    /* harmony import */


    var _navigation_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation.effects */
    "./src/app/store/navigation/navigation.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationEffects", function () {
      return _navigation_effects__WEBPACK_IMPORTED_MODULE_2__["NavigationEffects"];
    });
    /* harmony import */


    var _navigation_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation.reducer */
    "./src/app/store/navigation/navigation.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return _navigation_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return _navigation_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"];
    });
    /* harmony import */


    var _navigation_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navigation.selectors */
    "./src/app/store/navigation/navigation.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectNavigationState", function () {
      return _navigation_selectors__WEBPACK_IMPORTED_MODULE_4__["selectNavigationState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectNavigationItems", function () {
      return _navigation_selectors__WEBPACK_IMPORTED_MODULE_4__["selectNavigationItems"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectFilter", function () {
      return _navigation_selectors__WEBPACK_IMPORTED_MODULE_4__["selectFilter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectResult", function () {
      return _navigation_selectors__WEBPACK_IMPORTED_MODULE_4__["selectResult"];
    });
    /***/

  },

  /***/
  "./src/app/store/navigation/navigation.actions.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/navigation/navigation.actions.ts ***!
    \********************************************************/

  /*! exports provided: toggleNavSection, activeUrl, toggleFilter, navigationFilter, mobileNavigation */

  /***/
  function srcAppStoreNavigationNavigationActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleNavSection", function () {
      return toggleNavSection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "activeUrl", function () {
      return activeUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleFilter", function () {
      return toggleFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navigationFilter", function () {
      return navigationFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobileNavigation", function () {
      return mobileNavigation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var toggleNavSection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navigation] Toggle Nav Section', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var activeUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navigation] Active Url', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navigation] Toggle Filter');
    var navigationFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navigation] Navigation Filter', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var mobileNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Navigation] Mobile Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/store/navigation/navigation.effects.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/navigation/navigation.effects.ts ***!
    \********************************************************/

  /*! exports provided: NavigationEffects */

  /***/
  function srcAppStoreNavigationNavigationEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationEffects", function () {
      return NavigationEffects;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _navigation_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navigation.actions */
    "./src/app/store/navigation/navigation.actions.ts");
    /* harmony import */


    var src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/utils.functions */
    "./src/app/shared/utils/utils.functions.ts");

    var NavigationEffects = function NavigationEffects(actions$, breakpointObserver) {
      var _this25 = this;

      _classCallCheck(this, NavigationEffects);

      this.actions$ = actions$;
      this.mapToActiveUrl$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this25.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["ROUTER_NAVIGATED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
          return Object(_navigation_actions__WEBPACK_IMPORTED_MODULE_6__["activeUrl"])({
            url: action.payload.event.url
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
          return Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(false, 'mobile-nav-on', document.querySelector('body'));
        }));
      });
      this.mobileNavigation$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this25.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_6__["mobileNavigation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
          return Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(action.open, 'mobile-nav-on', document.querySelector('body'));
        }));
      }, {
        dispatch: false
      });
      breakpointObserver.observe('(max-width: 600px)').subscribe(function (result) {
        Object(src_app_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_7__["handleClassCondition"])(result.matches, 'mobile-view-activated', document.querySelector('body'));
      });
    };

    NavigationEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }];
    };

    NavigationEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]])], NavigationEffects);
    /***/
  },

  /***/
  "./src/app/store/navigation/navigation.reducer.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/navigation/navigation.reducer.ts ***!
    \********************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppStoreNavigationNavigationReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _navigation_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation.actions */
    "./src/app/store/navigation/navigation.actions.ts");
    /* harmony import */


    var _app_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.navigation */
    "./src/app/app.navigation.ts");

    var initialState = {
      items: decorateItems(_app_navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItems"]),
      total: countTotal(_app_navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItems"]),
      filterActive: false,
      filterText: '',
      matched: 0
    };
    var navigationReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_2__["activeUrl"], function (state, action) {
      return Object.assign({}, state, {
        items: detectActiveItems(state.items, action.url)
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_2__["toggleNavSection"], function (state, action) {
      return Object.assign({}, state, {
        items: toggleItems(state.items, action.item)
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_2__["toggleFilter"], function (state) {
      if (state.filterActive) {
        return Object.assign({}, state, {
          filterActive: false,
          matched: 0,
          items: state.items.map(function (_) {
            return Object.assign({}, _, {
              matched: null
            });
          })
        });
      } else {
        var items = filterItems(state.items, state.filterText);
        return Object.assign({}, state, {
          filterActive: true,
          items: items,
          matched: countMatched(items)
        });
      }
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_navigation_actions__WEBPACK_IMPORTED_MODULE_2__["navigationFilter"], function (state, action) {
      var items = filterItems(state.items, action.text);
      return Object.assign({}, state, {
        filterText: action.text,
        items: items,
        matched: countMatched(items)
      });
    }));

    function reducer(state, action) {
      return navigationReducer(state, action);
    } // utils
    // recursevly add `open` and `active` fields to items


    function decorateItems(navItems) {
      return navItems.map(function (navItem) {
        var item = Object.assign({}, navItem, {
          active: false,
          matched: null
        });

        if (navItem.items) {
          item.open = false;
          item.items = decorateItems(navItem.items);
        }

        item.navTitle = !navItem.items && !navItem.routerLink && !!navItem.title;
        return item;
      });
    } // recursevly count total of all items


    function countTotal(navItems) {
      var total = navItems.length;
      navItems.filter(function (_) {
        return !!_.items;
      }).forEach(function (_) {
        total += countTotal(_.items);
      });
      return total;
    } // recursevly count total of filter matched items


    function countMatched(navItems) {
      var matched = navItems.filter(function (_) {
        return !!_.matched;
      }).length;
      navItems.filter(function (_) {
        return !!_.items;
      }).forEach(function (_) {
        matched += countMatched(_.items);
      });
      return matched;
    } // recursevly check if item is active by url when navigation ends
    // if active item has parent it's `open` field becomes true


    function detectActiveItems(navItems, activeUrl) {
      return navItems.map(function (navItem) {
        var isActive = itemIsActive(navItem, activeUrl);
        var item = Object.assign({}, navItem, {
          active: isActive
        });

        if (navItem.items) {
          item.open = isActive;
          item.items = detectActiveItems(navItem.items, activeUrl);
        }

        return item;
      });
    } // recursevly check if item is active by url
    // if any of item children is active item considered as active


    function itemIsActive(item, activeUrl) {
      if (item.routerLink === activeUrl) {
        return true;
      } else if (item.items) {
        return item.items.some(function (_) {
          return itemIsActive(_, activeUrl);
        });
      } else {
        return false;
      }
    }

    function toggleItems(navItems, toggledItem) {
      var isToggledItemLevel = navItems.some(function (_) {
        return _ === toggledItem;
      });
      return navItems.map(function (navItem) {
        var item = Object.assign({}, navItem);

        if (isToggledItemLevel && item.items && navItem !== toggledItem) {
          item.open = false;
        }

        if (navItem === toggledItem) {
          item.open = !navItem.open;
        }

        if (navItem.items) {
          item.items = toggleItems(navItem.items, toggledItem);
        }

        return item;
      });
    }

    function filterItems(navItems, text) {
      return navItems.map(function (navItem) {
        var item = Object.assign({}, navItem);

        if (navItem.items) {
          item.matched = navItemMatch(navItem, text) || navItem.items.some(function (_) {
            return navItemMatch(_, text);
          });
          item.items = filterItems(navItem.items, text);
        } else {
          item.matched = navItemMatch(navItem, text);
        }

        return item;
      });
    }

    function navItemMatch(item, text) {
      return !text.trim() || item.tags && !!item.tags.match(new RegExp(".*".concat(text.trim(), ".*"), 'gi'));
    }
    /***/

  },

  /***/
  "./src/app/store/navigation/navigation.selectors.ts":
  /*!**********************************************************!*\
    !*** ./src/app/store/navigation/navigation.selectors.ts ***!
    \**********************************************************/

  /*! exports provided: selectNavigationState, selectNavigationItems, selectFilter, selectResult */

  /***/
  function srcAppStoreNavigationNavigationSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNavigationState", function () {
      return selectNavigationState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNavigationItems", function () {
      return selectNavigationItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFilter", function () {
      return selectFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectResult", function () {
      return selectResult;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectNavigationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('navigation');
    var selectNavigationItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNavigationState, function (state) {
      return state.items;
    });
    var selectFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNavigationState, function (state) {
      return {
        active: state.filterActive,
        text: state.filterText
      };
    });
    var selectResult = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectNavigationState, function (state) {
      return {
        active: state.filterActive && !!state.filterText.trim(),
        total: state.total,
        matched: state.matched
      };
    });
    /***/
  },

  /***/
  "./src/app/store/router/index.ts":
  /*!***************************************!*\
    !*** ./src/app/store/router/index.ts ***!
    \***************************************/

  /*! exports provided: reducer, CustomSerializer, GO, UPDATE, BACK, FORWARD, Go, UpdateLocation, Back, Forward, getRouterState, RouterEffects */

  /***/
  function srcAppStoreRouterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _router_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./router.reducer */
    "./src/app/store/router/router.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return _router_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomSerializer", function () {
      return _router_reducer__WEBPACK_IMPORTED_MODULE_1__["CustomSerializer"];
    });
    /* harmony import */


    var _router_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./router.actions */
    "./src/app/store/router/router.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GO", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["GO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BACK", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["BACK"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FORWARD", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["FORWARD"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Go", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["Go"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateLocation", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateLocation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Back", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["Back"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Forward", function () {
      return _router_actions__WEBPACK_IMPORTED_MODULE_2__["Forward"];
    });
    /* harmony import */


    var _router_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./router.selectors */
    "./src/app/store/router/router.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRouterState", function () {
      return _router_selectors__WEBPACK_IMPORTED_MODULE_3__["getRouterState"];
    });
    /* harmony import */


    var _router_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./router.effects */
    "./src/app/store/router/router.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouterEffects", function () {
      return _router_effects__WEBPACK_IMPORTED_MODULE_4__["RouterEffects"];
    });
    /***/

  },

  /***/
  "./src/app/store/router/router.actions.ts":
  /*!************************************************!*\
    !*** ./src/app/store/router/router.actions.ts ***!
    \************************************************/

  /*! exports provided: GO, UPDATE, BACK, FORWARD, Go, UpdateLocation, Back, Forward */

  /***/
  function srcAppStoreRouterRouterActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GO", function () {
      return GO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE", function () {
      return UPDATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACK", function () {
      return BACK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORWARD", function () {
      return FORWARD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Go", function () {
      return Go;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateLocation", function () {
      return UpdateLocation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Back", function () {
      return Back;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Forward", function () {
      return Forward;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GO = '[Router] Go';
    var UPDATE = '[Router] Update url';
    var BACK = '[Router] Back';
    var FORWARD = '[Router] Forward';

    var Go = function Go(payload) {
      _classCallCheck(this, Go);

      this.payload = payload;
      this.type = GO;
    };

    var UpdateLocation = function UpdateLocation(payload) {
      _classCallCheck(this, UpdateLocation);

      this.payload = payload;
      this.type = UPDATE;
    };

    var Back = function Back() {
      _classCallCheck(this, Back);

      this.type = BACK;
    };

    var Forward = function Forward() {
      _classCallCheck(this, Forward);

      this.type = FORWARD;
    };
    /***/

  },

  /***/
  "./src/app/store/router/router.effects.ts":
  /*!************************************************!*\
    !*** ./src/app/store/router/router.effects.ts ***!
    \************************************************/

  /*! exports provided: RouterEffects */

  /***/
  function srcAppStoreRouterRouterEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterEffects", function () {
      return RouterEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./router.actions */
    "./src/app/store/router/router.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RouterEffects = function RouterEffects(actions$, router, location) {
      var _this26 = this;

      _classCallCheck(this, RouterEffects);

      this.actions$ = actions$;
      this.router = router;
      this.location = location;
      this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_ref) {
        var path = _ref.path,
            queryParams = _ref.query,
            extras = _ref.extras;

        _this26.router.navigate(path, Object.assign({
          queryParams: queryParams
        }, extras));
      }));
      this.location$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (path) {
        _this26.location.go(path);
      }));
      this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this26.location.back();
      }));
      this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this26.location.forward();
      }));
    };

    RouterEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RouterEffects.prototype, "navigate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RouterEffects.prototype, "location$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RouterEffects.prototype, "navigateBack$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])], RouterEffects);
    /***/
  },

  /***/
  "./src/app/store/router/router.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/router/router.reducer.ts ***!
    \************************************************/

  /*! exports provided: reducer, CustomSerializer */

  /***/
  function srcAppStoreRouterRouterReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSerializer", function () {
      return CustomSerializer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");

    var reducer = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"];

    var CustomSerializer =
    /*#__PURE__*/
    function () {
      function CustomSerializer() {
        _classCallCheck(this, CustomSerializer);
      }

      _createClass(CustomSerializer, [{
        key: "serialize",
        value: function serialize(routerState) {
          var url = routerState.url;
          var queryParams = routerState.root.queryParams;
          var state = routerState.root;

          while (state.firstChild) {
            state = state.firstChild;
          }

          var _state = state,
              params = _state.params,
              data = _state.data;
          return {
            url: url,
            queryParams: queryParams,
            params: params,
            data: data
          };
        }
      }]);

      return CustomSerializer;
    }();
    /***/

  },

  /***/
  "./src/app/store/router/router.selectors.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/router/router.selectors.ts ***!
    \**************************************************/

  /*! exports provided: getRouterState */

  /***/
  function srcAppStoreRouterRouterSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRouterState", function () {
      return getRouterState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');
    /***/
  },

  /***/
  "./src/app/store/settings/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/settings/index.ts ***!
    \*****************************************/

  /*! exports provided: toggleFixedHeader, toggleFixedNavigation, toggleMinifyNavigation, toggleHideNavigation, toggleTopNavigation, toggleBoxedLayout, togglePushContent, toggleNoOverlay, toggleOffCanvas, toggleBiggerContentFont, toggleHighContrastText, toggleDaltonism, toggleRtl, togglePreloaderInsise, toggleCleanPageBackground, toggleHideNavigationIcons, toggleDisableCSSAnimation, toggleHideInfoCard, toggleLeanSubheader, toggleHierarchicalNavigation, setGlobalFontSize, appReset, factoryReset, SettingsActionTypes, settingsMetaReducer, initialState, reducer, selectSettingsState */

  /***/
  function srcAppStoreSettingsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./settings.actions */
    "./src/app/store/settings/settings.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleFixedHeader", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFixedHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleFixedNavigation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleFixedNavigation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleMinifyNavigation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleMinifyNavigation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleHideNavigation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideNavigation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleTopNavigation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleTopNavigation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleBoxedLayout", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleBoxedLayout"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "togglePushContent", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["togglePushContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleNoOverlay", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleNoOverlay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleOffCanvas", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleOffCanvas"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleBiggerContentFont", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleBiggerContentFont"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleHighContrastText", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHighContrastText"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleDaltonism", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleDaltonism"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleRtl", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleRtl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "togglePreloaderInsise", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["togglePreloaderInsise"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleCleanPageBackground", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCleanPageBackground"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleHideNavigationIcons", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideNavigationIcons"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleDisableCSSAnimation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleDisableCSSAnimation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleHideInfoCard", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHideInfoCard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleLeanSubheader", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleLeanSubheader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toggleHierarchicalNavigation", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["toggleHierarchicalNavigation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setGlobalFontSize", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalFontSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "appReset", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["appReset"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "factoryReset", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["factoryReset"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function () {
      return _settings_actions__WEBPACK_IMPORTED_MODULE_1__["SettingsActionTypes"];
    });
    /* harmony import */


    var _settings_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./settings.meta */
    "./src/app/store/settings/settings.meta.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "settingsMetaReducer", function () {
      return _settings_meta__WEBPACK_IMPORTED_MODULE_2__["settingsMetaReducer"];
    });
    /* harmony import */


    var _settings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.reducer */
    "./src/app/store/settings/settings.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return _settings_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return _settings_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"];
    });
    /* harmony import */


    var _settings_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings.selectors */
    "./src/app/store/settings/settings.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectSettingsState", function () {
      return _settings_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSettingsState"];
    });
    /***/

  },

  /***/
  "./src/app/store/settings/settings.actions.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/settings/settings.actions.ts ***!
    \****************************************************/

  /*! exports provided: toggleFixedHeader, toggleFixedNavigation, toggleMinifyNavigation, toggleHideNavigation, toggleTopNavigation, toggleBoxedLayout, togglePushContent, toggleNoOverlay, toggleOffCanvas, toggleBiggerContentFont, toggleHighContrastText, toggleDaltonism, toggleRtl, togglePreloaderInsise, toggleCleanPageBackground, toggleHideNavigationIcons, toggleDisableCSSAnimation, toggleHideInfoCard, toggleLeanSubheader, toggleHierarchicalNavigation, setGlobalFontSize, appReset, factoryReset, SettingsActionTypes */

  /***/
  function srcAppStoreSettingsSettingsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleFixedHeader", function () {
      return toggleFixedHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleFixedNavigation", function () {
      return toggleFixedNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleMinifyNavigation", function () {
      return toggleMinifyNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleHideNavigation", function () {
      return toggleHideNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleTopNavigation", function () {
      return toggleTopNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleBoxedLayout", function () {
      return toggleBoxedLayout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "togglePushContent", function () {
      return togglePushContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleNoOverlay", function () {
      return toggleNoOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleOffCanvas", function () {
      return toggleOffCanvas;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleBiggerContentFont", function () {
      return toggleBiggerContentFont;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleHighContrastText", function () {
      return toggleHighContrastText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleDaltonism", function () {
      return toggleDaltonism;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleRtl", function () {
      return toggleRtl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "togglePreloaderInsise", function () {
      return togglePreloaderInsise;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleCleanPageBackground", function () {
      return toggleCleanPageBackground;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleHideNavigationIcons", function () {
      return toggleHideNavigationIcons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleDisableCSSAnimation", function () {
      return toggleDisableCSSAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleHideInfoCard", function () {
      return toggleHideInfoCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleLeanSubheader", function () {
      return toggleLeanSubheader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleHierarchicalNavigation", function () {
      return toggleHierarchicalNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setGlobalFontSize", function () {
      return setGlobalFontSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReset", function () {
      return appReset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "factoryReset", function () {
      return factoryReset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function () {
      return SettingsActionTypes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var toggleFixedHeader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Fixed Header', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleFixedNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Fixed Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleMinifyNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Minify Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleHideNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Hide Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleTopNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Top Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleBoxedLayout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Boxed Layout', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var togglePushContent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Push Content', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleNoOverlay = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle No Overlay', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleOffCanvas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Off Canvas', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleBiggerContentFont = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Bigger Content Font', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleHighContrastText = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle High Contrast Text', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleDaltonism = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Daltonism', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleRtl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle RTL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var togglePreloaderInsise = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Preloader Insise', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleCleanPageBackground = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Clean Page Background', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleHideNavigationIcons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Hide Navigation Icons', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleDisableCSSAnimation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Disable CSS Animation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleHideInfoCard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Hide Info Card', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleLeanSubheader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Lean Subheader', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var toggleHierarchicalNavigation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Toggle Hierarchical Navigation', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var setGlobalFontSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Set Global Font Size', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var appReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] App Reset');
    var factoryReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Settings] Factory Reset');
    var SettingsActionTypes = [toggleFixedHeader.type, toggleFixedNavigation.type, toggleMinifyNavigation.type, toggleHideNavigation.type, toggleTopNavigation.type, toggleBoxedLayout.type, togglePushContent.type, toggleNoOverlay.type, toggleOffCanvas.type, toggleBiggerContentFont.type, toggleHighContrastText.type, toggleDaltonism.type, toggleRtl.type, togglePreloaderInsise.type, toggleCleanPageBackground.type, toggleHideNavigationIcons.type, toggleDisableCSSAnimation.type, toggleHideInfoCard.type, toggleLeanSubheader.type, toggleHierarchicalNavigation.type, setGlobalFontSize.type, appReset.type, factoryReset.type];
    /***/
  },

  /***/
  "./src/app/store/settings/settings.meta.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/settings/settings.meta.ts ***!
    \*************************************************/

  /*! exports provided: settingsMetaReducer */

  /***/
  function srcAppStoreSettingsSettingsMetaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "settingsMetaReducer", function () {
      return settingsMetaReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./settings.actions */
    "./src/app/store/settings/settings.actions.ts");
    /* harmony import */


    var _shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/utils/utils.functions */
    "./src/app/shared/utils/utils.functions.ts");

    var html = document.querySelector('html');
    var body = document.querySelector('body'); // meta reducer that applies layout classes based on settings reducer

    function settingsMetaReducer(reducer) {
      return function (state, action) {
        // build new state
        var result = reducer(state, action); // use our middleware only for INIT action and for Settings actions

        if (action.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["INIT"] || _settings_actions__WEBPACK_IMPORTED_MODULE_2__["SettingsActionTypes"].includes(action.type)) {
          handleCssClasses(result.settings, action);
        } // pass state into next chain


        return result;
      };
    }

    function handleCssClasses(state, action) {
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.fixedHeader, 'header-function-fixed', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.fixedNavigation, 'nav-function-fixed', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.minifyNavigation, 'nav-function-minify', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.hideNavigation, 'nav-function-hidden', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.topNavigation, 'nav-function-top', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.boxedLayout, 'mod-main-boxed', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.pushContent, 'nav-mobile-push', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.noOverlay, 'nav-mobile-no-overlay', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.offCanvas, 'nav-mobile-slide-out', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.biggerContentFont, 'mod-bigger-font', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.highContrastText, 'mod-high-contrast', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.daltonism, 'mod-color-blind', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.preloaderInside, 'mod-pace-custom', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.cleanPageBackground, 'mod-clean-page-bg', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.hideNavigationIcons, 'mod-hide-nav-icons', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.disableCSSAnimation, 'mod-disable-animation', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.hideInfoCard, 'mod-hide-info-card', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.leanSubheader, 'mod-lean-subheader', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.hierarchicalNavigation, 'mod-nav-link', body);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.globalFontSize === 'sm', 'root-text-sm', html);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.globalFontSize === 'md', 'root-text', html);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.globalFontSize === 'lg', 'root-text-lg', html);
      Object(_shared_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(state.globalFontSize === 'xl', 'root-text-xl', html);
    }
    /***/

  },

  /***/
  "./src/app/store/settings/settings.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/settings/settings.reducer.ts ***!
    \****************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppStoreSettingsSettingsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./settings.actions */
    "./src/app/store/settings/settings.actions.ts"); // here you can configure initial state of your app
    // for all your users


    var initialState = {
      // app layout
      fixedHeader: false,
      fixedNavigation: false,
      minifyNavigation: false,
      hideNavigation: false,
      topNavigation: false,
      boxedLayout: false,
      // mobile menu
      pushContent: false,
      noOverlay: false,
      offCanvas: false,
      // accessibility
      biggerContentFont: false,
      highContrastText: false,
      daltonism: false,
      preloaderInside: false,
      rtl: false,
      // global modifications
      cleanPageBackground: false,
      hideNavigationIcons: false,
      disableCSSAnimation: false,
      hideInfoCard: false,
      leanSubheader: false,
      hierarchicalNavigation: false,
      // global font size
      globalFontSize: 'md'
    };
    var settingsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, // TENTAR EXECUTAR A FUNÇÃO PARA SALVAR A CONFIGURAÇÃO AQUI
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleFixedHeader"], function (state, action) {
      return Object.assign({}, state, {
        fixedHeader: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleFixedNavigation"], function (state, action) {
      return Object.assign({}, state, {
        fixedNavigation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleMinifyNavigation"], function (state, action) {
      return Object.assign({}, state, {
        minifyNavigation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleHideNavigation"], function (state, action) {
      return Object.assign({}, state, {
        hideNavigation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleTopNavigation"], function (state, action) {
      return Object.assign({}, state, {
        topNavigation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleBoxedLayout"], function (state, action) {
      return Object.assign({}, state, {
        boxedLayout: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["togglePushContent"], function (state, action) {
      return Object.assign({}, state, {
        pushContent: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleNoOverlay"], function (state, action) {
      return Object.assign({}, state, {
        noOverlay: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleOffCanvas"], function (state, action) {
      return Object.assign({}, state, {
        offCanvas: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleBiggerContentFont"], function (state, action) {
      return Object.assign({}, state, {
        biggerContentFont: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleHighContrastText"], function (state, action) {
      return Object.assign({}, state, {
        highContrastText: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleDaltonism"], function (state, action) {
      return Object.assign({}, state, {
        daltonism: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleRtl"], function (state, action) {
      return Object.assign({}, state, {
        rtl: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["togglePreloaderInsise"], function (state, action) {
      return Object.assign({}, state, {
        preloaderInside: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleCleanPageBackground"], function (state, action) {
      return Object.assign({}, state, {
        cleanPageBackground: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleHideNavigationIcons"], function (state, action) {
      return Object.assign({}, state, {
        hideNavigationIcons: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleDisableCSSAnimation"], function (state, action) {
      return Object.assign({}, state, {
        disableCSSAnimation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleHideInfoCard"], function (state, action) {
      return Object.assign({}, state, {
        hideInfoCard: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleLeanSubheader"], function (state, action) {
      return Object.assign({}, state, {
        leanSubheader: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["toggleHierarchicalNavigation"], function (state, action) {
      return Object.assign({}, state, {
        hierarchicalNavigation: action.check
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["setGlobalFontSize"], function (state, action) {
      return Object.assign({}, state, {
        globalFontSize: action.size
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_settings_actions__WEBPACK_IMPORTED_MODULE_2__["appReset"], function () {
      return Object.assign({}, initialState);
    }));

    function reducer(state, action) {
      return settingsReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/settings/settings.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/settings/settings.selectors.ts ***!
    \******************************************************/

  /*! exports provided: selectSettingsState */

  /***/
  function srcAppStoreSettingsSettingsSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSettingsState", function () {
      return selectSettingsState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectSettingsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('settings');
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api: {
        protocolo: 'http',
        host: 'truckpad.dev.br',

        get url() {
          return "".concat(this.protocolo, "://").concat(this.host, "/api");
        }

      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\wamp64\www\truckpad\_app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map