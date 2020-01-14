import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { UserCreate } from "../models/userCreate";
import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import { GlobalApp } from "../../../helpers/global";

@Injectable()
export class UserCreateService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    create(userCreate: UserCreate): Observable<Response> {
        return this.http.post<UserCreate>(this.app.appUrl + "users", JSON.stringify(userCreate), {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}