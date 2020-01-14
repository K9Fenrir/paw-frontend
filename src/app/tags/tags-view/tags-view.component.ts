import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tag} from "./models/tag";
import {TagsViewService} from "./services/tags-view.service";
import {GlobalApp} from "../../helpers/global";

@Component({
  selector: 'app-tags-view',
  templateUrl: './tags-view.component.html',
  styleUrls: ['./tags-view.component.scss']
})
export class TagsViewComponent implements OnInit {
  public tag: Tag = null;

  constructor(
    private route: ActivatedRoute,
    private tagsViewService: TagsViewService,
    public app: GlobalApp
  ) { }

  ngOnInit() {
    let tagName = this.route.snapshot.paramMap.get("tag");
    this.tagsViewService.getTag(tagName).subscribe(resp => {
      this.tag = resp.body;
    });
  }

}
