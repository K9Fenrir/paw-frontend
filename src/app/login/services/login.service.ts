import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Login } from "../models/login";
import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import {GlobalApp} from "../../helpers/global";

@Injectable()
export class LoginService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    login(login: Login): Observable<Response> {
        return this.http.post<Login>(this.app.appUrl + "login", JSON.stringify(login), {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}