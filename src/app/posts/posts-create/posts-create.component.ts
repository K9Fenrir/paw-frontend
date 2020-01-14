import { Component, OnInit } from '@angular/core';
import {PostCreate} from "./models/postCreate";
import {GlobalApp} from "../../helpers/global";
import {PostCreateService} from "./services/posts-create.service";

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  public postCreate: PostCreate = new PostCreate();

  constructor(
    public app: GlobalApp,
    private postCreateService: PostCreateService,
  ) { }

  ngOnInit() {
  }

  submitForm(): void{
    this.postCreateService.createPost(this.postCreate).subscribe(resp => {
      console.log(resp.status);
    })
  }

}
