import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import { GlobalApp } from "../../../helpers/global";
import { UserQueryParams } from "../models/userQueryParams";
import { UserMinimal } from "../models/userMinimal";

@Injectable()
export class UserListService {

    private headers = new HttpHeaders();

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    getOnInit(): Observable<HttpResponse<Array<UserMinimal>>> {
        this.headers = this.headers.append("Authorization", localStorage.getItem("paw-token"));
        return this.http.get(this.app.appUrl + "users", {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    getWithQuery(userQueryParams: UserQueryParams): Observable<HttpResponse<Array<UserMinimal>>> {

        let queryParams = "users?";

        if (userQueryParams.pattern){
            queryParams += "pattern=" + userQueryParams.pattern + "&";
        }
        if (userQueryParams.sortValue){
            queryParams += "sortValue=" + userQueryParams.sortValue + "&";
        }
        if (userQueryParams.sortOrder){
            queryParams += "sortOrder=" + userQueryParams.sortOrder + "&";
        }
        if (userQueryParams.page){
            queryParams += "page=" + userQueryParams.page + "&";
        }

        return this.http.get(this.app.appUrl + queryParams, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }

}