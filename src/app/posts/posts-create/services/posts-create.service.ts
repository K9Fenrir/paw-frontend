import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {GlobalApp} from "../../../helpers/global";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {PostCreate} from "../models/postCreate";
import {FormGroup} from "@angular/forms";

@Injectable()
export class PostCreateService {

  private headers = new HttpHeaders().append("Authorization", localStorage.getItem("paw-token"));

  constructor(
    private http: HttpClient,
    private app: GlobalApp
  ) { }

  createPost(postCreate: PostCreate): Observable<Response> {
    let formData = new FormData();
    formData.set("file", postCreate.file);
    formData.set("description", postCreate.description);
    formData.set("rating", postCreate.rating);
    formData.set("tagNames", postCreate.tagNames);
    formData.set("fileName", "file.jpg");

    console.log(formData);

    formData.forEach(data => {
      console.log(data);
    })

    return this.http.post(this.app.appUrl + "posts", formData, {headers: this.headers, observe: 'response'})
      .pipe(catchError(this.handleError))
  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ', error);
    return Promise.reject(error.message || error);
  }
}