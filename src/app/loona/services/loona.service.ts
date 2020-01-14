import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {GlobalApp} from "../../helpers/global";
import {Injectable} from "@angular/core";

@Injectable()
export class LoonaService {

    private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));
    private loonaUrl = "http://192.168.99.100:8081/v1/loona";

    constructor(
        private http: HttpClient,
        private app: GlobalApp
    ) { }

    loonaConnectionCheck(): Observable<HttpResponse<Object>> {
        return this.http.get(this.loonaUrl + "/discordCheck", {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    loonaConnect(): Observable<Response> {
        return this.http.get(this.loonaUrl + "/connect", {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    loonaDisconnect(): Observable<Response> {
        return this.http.get(this.loonaUrl + "/disconnect", {headers: this.headers, observe: 'response'})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}