import { Component, OnInit } from '@angular/core';
import {TagCreate} from "./models/tagCreate";
import {GlobalApp} from "../../helpers/global";
import {TagsCreateService} from "./services/tags-create.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.scss']
})
export class TagsCreateComponent implements OnInit {
  public tagCreate: TagCreate = new TagCreate();

  constructor(
      public app: GlobalApp,
      private tagsCreateService: TagsCreateService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(): void {
    this.tagsCreateService.createTag(this.tagCreate).subscribe(resp => {
      this.router.navigate(["tags"]);
    })
  }

}
