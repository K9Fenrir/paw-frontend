import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {UserMinimal} from "../users-list/models/userMinimal";
import {GlobalApp} from "../../helpers/global";
import {Injectable} from "@angular/core";

@Injectable()
export class UserCommonService {

    private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    deleteByUsername(username: string): Observable<Response>{
        return this.http.delete(this.app.appUrl + "users/" + username, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    promoteByUsername(username: string): Observable<HttpResponse<UserMinimal>> {
        return this.http.put(this.app.appUrl + "users/" + username + "/promote", null, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    demoteByUsername(username: string): Observable<HttpResponse<UserMinimal>> {
        return this.http.put(this.app.appUrl + "users/" + username + "/demote", null, {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError))
    }

    private handleError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }

}