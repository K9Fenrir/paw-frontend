import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";

import { GlobalApp } from "../../../helpers/global";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../models/user";
import {UpdateUser} from "../models/updateUser";

@Injectable()
export class UserProfileService {

    private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));

    constructor(
        private http: HttpClient,
        private app: GlobalApp,
    ) { }

    getUser(username: string): Observable<HttpResponse<User>> {
        return this.http.get(this.app.appUrl + "users/" + username, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    changeEmail(data: UpdateUser, username: string) : Observable<HttpResponse<User>> {
        return this.http.put(this.app.appUrl + "users/" + username + "/email", data, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    changeDiscrodID(data: UpdateUser, username: string) : Observable<HttpResponse<User>> {
        return this.http.put(this.app.appUrl + "users/" + username + "/discord", data, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }
}