import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';


export class BaseResolver implements Resolve<any> {
    constructor(public httpService: any) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return (route.params.id !== undefined)? this.httpService.get(route.params.id) : this.httpService.listResolver(route.data);
    }
}
