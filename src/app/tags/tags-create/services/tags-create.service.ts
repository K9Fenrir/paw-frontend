import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {UserMinimal} from "../../../users/users-list/models/userMinimal";
import {catchError} from "rxjs/operators";
import {GlobalApp} from "../../../helpers/global";
import {TagCreate} from "../models/tagCreate";

@Injectable()
export class TagsCreateService {

    private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    createTag(tagCreate: TagCreate): Observable<HttpResponse<UserMinimal>> {
        return this.http.post(this.app.appUrl + "tags", tagCreate, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    private handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}