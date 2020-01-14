import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {GlobalApp} from "../../../helpers/global";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {Tag} from "../models/tag";

@Injectable()
export class TagsViewService {

  private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));

  constructor(
    private http: HttpClient,
    private app: GlobalApp
  ) { }

  getTag(tagName: string): Observable<HttpResponse<Tag>>{
    return this.http.get(this.app.appUrl + "tags/" + tagName, {headers: this.headers, observe: 'response'})
      .pipe(catchError(this.handleError))
  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ', error);
    return Promise.reject(error.message || error);
  }
}