import {Observable} from "rxjs";

export interface HttpResource<T> { //Generics
    list(searchParams: any): Promise<any>;

    get(id: number): Observable<T>;

    create(data: T): Observable<T>;

    update(id: number, data: T): Observable<T>;

    destroy(id: number): Observable<any>;
}

