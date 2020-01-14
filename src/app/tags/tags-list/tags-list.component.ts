import { Component, OnInit } from '@angular/core';
import {TagsListService} from "./service/tags-list.service";
import {TagMinimal} from "../../helpers/tagMinimal";
import {TagQueryParams} from "./models/tagQueryParams";
import {GlobalApp} from "../../helpers/global";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
    tagQueryParams: TagQueryParams  = new TagQueryParams();
    tagList: TagMinimal[] = [];
    totalSize: number = 0;

    page: number = 1;
    pageSize: number = 4;


    constructor(
        private tagsListService: TagsListService,
        public app: GlobalApp,
        private router: Router
    ) { }

    ngOnInit() {
        this.page = 1;
        this.tagsListService.getOnInit().subscribe(resp => {
            this.tagList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    submitForm(): void {
        this.page = 1;
        this.tagQueryParams.page = 1;
        this.tagsListService.getWithQuery(this.tagQueryParams).subscribe(resp => {
            this.tagList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    onPageChange(): void{
        this.tagQueryParams.page = this.page;
        console.log(this.tagQueryParams);
        this.tagsListService.getWithQuery(this.tagQueryParams).subscribe(resp => {
            this.tagList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    createTag(): void{
        this.router.navigate(["tags/create"]);
    }

}
