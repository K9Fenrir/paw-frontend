import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import { GlobalApp } from "../../../helpers/global";
import {TagMinimal} from "../../../helpers/tagMinimal";
import {TagQueryParams} from "../models/tagQueryParams";

@Injectable()
export class TagsListService {

    private headers = new HttpHeaders();

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    getOnInit(): Observable<HttpResponse<Array<TagMinimal>>> {
        return this.http.get(this.app.appUrl + "tags", {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    getWithQuery(userQueryParams: TagQueryParams): Observable<HttpResponse<Array<TagMinimal>>> {

        let queryParams = "tags?";

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