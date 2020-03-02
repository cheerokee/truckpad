(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/features/admin/base/crud-base/crud-base.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/admin/base/crud-base/crud-base.component.ts ***!
  \**********************************************************************/
/*! exports provided: CrudBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudBaseComponent", function() { return CrudBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


class CrudBaseComponent {
    constructor(router, serviceHttp, actRoute, changeRef) {
        this.router = router;
        this.serviceHttp = serviceHttp;
        this.actRoute = actRoute;
        this.changeRef = changeRef;
        this.current_url = this.router.url;
        this.navigationSubscription = this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
                this.load();
            }
        });
    }
    ngOnInit() {
        this.load();
    }
    ngOnDestroy() {
        // avoid memory leaks here by cleaning up after ourselves. If we
        // don't then we will continue to run our initialiseInvites()
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
    load() {
        this.actRoute.data.subscribe((data) => {
            this.list = data.list;
            this.changeRef.detectChanges();
        });
    }
    delete(id) {
        this.serviceHttp.destroy(id).subscribe(() => {
            this.router.navigateByUrl(this.router.url);
        });
    }
    paginate(page) {
        this.serviceHttp.list(this.serachparams, page).subscribe((response) => {
            this.list = response;
            this.changeRef.detectChanges();
        });
    }
    filtering(filter, reload = true) {
        for (let item of filter) {
            if (item.value == "") {
                let deletIndex = this.serachparams.filter.findIndex(x => x.field == item.name);
                if (deletIndex > -1) {
                    this.serachparams.filter.splice(deletIndex, 1);
                }
                continue;
            }
            let filterItem = this.filter.find(x => x.name == item.name);
            filterItem.value = item.value;
            let value = (filterItem.strategy == 'like') ? `%${filterItem.value}%` : filterItem.value;
            var seachItem = this.serachparams.filter.find(x => x.field == filterItem.name);
            if (seachItem !== undefined) {
                seachItem.value = value;
            }
            else {
                this.serachparams.filter.push({
                    type: filterItem.strategy,
                    field: filterItem.name,
                    value: value
                });
            }
        }
        if (reload) {
            this.load();
        }
    }
}


/***/ }),

/***/ "./src/app/features/admin/base/form-base/form-base.ts":
/*!************************************************************!*\
  !*** ./src/app/features/admin/base/form-base/form-base.ts ***!
  \************************************************************/
/*! exports provided: FormBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBase", function() { return FormBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class FormBase {
    constructor(service, http, httpGetter, authService) {
        this.service = service;
        this.http = http;
        this.httpGetter = httpGetter;
        this.authService = authService;
        this.httpService = service;
    }
    ngOnInit() {
    }
    setOptions(httpService, field, seachString = "") {
        let alias;
        let entity;
        if (typeof field === 'object') {
            alias = field.alias;
            entity = field.entity;
        }
        else {
            alias = field;
            entity = field;
        }
        if (httpService) {
            let element = this.elements.find(x => x.name == alias);
            if (element) {
                httpService.getByLike(seachString).subscribe((response) => {
                    console.log(response);
                    element.options = [];
                    for (let item of response._embedded[entity]) {
                        element.options.push({ text: (element.propriedade !== undefined) ? item[element.propriedade] : item.nome, id: item.id });
                    }
                });
            }
        }
    }
    search(e) {
        let element = this.elements.find(x => x.name === e.element);
        if (element !== undefined) {
            let srv = this.httpGetter.getService(element.name);
            this.setOptions(srv, element.name, e.value);
        }
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormBase.prototype, "view", void 0);


/***/ }),

/***/ "./src/app/resolvers/base/base-resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/resolvers/base/base-resolver.ts ***!
  \*************************************************/
/*! exports provided: BaseResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResolver", function() { return BaseResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaseResolver {
    constructor(httpService) {
        this.httpService = httpService;
    }
    resolve(route, state) {
        return (route.params.id !== undefined) ? this.httpService.get(route.params.id) : this.httpService.listResolver(route.data);
    }
}


/***/ }),

/***/ "./src/app/services/base-functions.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/base-functions.service.ts ***!
  \****************************************************/
/*! exports provided: BaseFunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFunctionsService", function() { return BaseFunctionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let BaseFunctionsService = class BaseFunctionsService {
    constructor(router) {
        this.router = router;
        this.typingTimer = null;
    }
    // Marcara de telefone para campos de formulários reativos, função executada ao pressionar a tecla
    KeyTel(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            if (valor.length == 16)
                valor = valor.substring(0, (valor.length - 1));
            valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
            valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
            form.get(field).setValue(valor);
        });
    }
    KeyMoeda(form, field) {
        setTimeout(() => {
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
    converteDateDateSql(valor) {
        if (valor === "") {
            valor = '';
        }
        else {
            let temp = valor.split('/');
            valor = new Date(temp[2] + '-' + temp[1] + '-' + temp[0]);
        }
        return valor;
    }
    converteMoedaFloat(valor) {
        if (valor === "") {
            valor = 0;
        }
        else {
            valor = valor + "";
            valor = valor.replace(".", "");
            valor = valor.replace(",", ".");
            valor = parseFloat(valor);
        }
        return valor;
    }
    KeyCpf(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            form.get(field).setValue(valor);
        });
    }
    KeyDate(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            if (valor.match(/^\d{2}$/) !== null) {
                form.get(field).setValue(valor + '/');
            }
            else if (valor.match(/^\d{2}\/\d{2}$/) !== null) {
                form.get(field).setValue(valor + '/');
            }
        });
    }
    KeyCnpj(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            form.get(field).setValue(valor);
        });
    }
    KeyCep(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2");
            form.get(field).setValue(valor);
        });
    }
    KeyNum(form, field) {
        setTimeout(() => {
            var valor = form.get(field).value;
            valor = valor.replace(/\D/g, "");
            form.get(field).setValue(valor);
        });
    }
    showErrors(errors) {
        return (!(typeof errors === "undefined")) ? Object.keys(errors).length != 0 : false;
    }
    reloadCurrentRoute() {
        window.location.href = window.location.href;
    }
    calculaIdade(date) {
        let nascimento = new Date(date.date);
        let hoje = new Date();
        return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
    }
    arrayCompare(a1, a2) {
        if (a1.length != a2.length)
            return false;
        var length = a2.length;
        for (var i = 0; i < length; i++) {
            if (a1[i] !== a2[i])
                return false;
        }
        return true;
    }
    /**
     *
     * @param array needle
     * @param any haystack
     */
    inArray(needle, haystack) {
        var length = haystack.length;
        for (var i = 0; i < length; i++) {
            if (typeof haystack[i] == 'object') {
                if (this.arrayCompare(haystack[i], needle))
                    return true;
            }
            else {
                if (haystack[i] == needle)
                    return true;
            }
        }
        return false;
    }
    // Função usada como parâmetro da função sort -> para ordenar Ex. arr.sort(compare())
    compare(a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    delayFunction(fn, timer) {
        if (this.typingTimer != null)
            clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(fn, timer);
    }
};
BaseFunctionsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BaseFunctionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BaseFunctionsService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map