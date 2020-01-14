import { Component, OnInit } from '@angular/core';

import {UserQueryParams} from "./models/userQueryParams";
import {UserListService} from "./services/user-list.service";
import {UserMinimal} from "./models/userMinimal";
import {GlobalApp} from "../../helpers/global";
import {UserCommonService} from "../services/user-common.service";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    userQueryParams: UserQueryParams = new UserQueryParams();
    userList: UserMinimal[] = [];
    totalSize: number = 0;

    page: number = 1;
    pageSize: number = 2;

    constructor(
        private userListService: UserListService,
        private userCommonService: UserCommonService,
        public app: GlobalApp
    ) { }

    ngOnInit() {
        this.page = 1;
        this.userListService.getOnInit().subscribe(resp => {
            this.userList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    submitForm(): void {
        this.page = 1;
        this.userQueryParams.page = 1;
        this.userListService.getWithQuery(this.userQueryParams).subscribe(resp => {
            this.userList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    adminDelete(username: string) : void {
        this.userCommonService.deleteByUsername(username).subscribe(resp => {
            this.onPageChange();
        })
    }

    onPageChange(): void {
        this.userQueryParams.page = this.page;
        this.userListService.getWithQuery(this.userQueryParams).subscribe(resp => {
            this.userList = resp.body;
            this.totalSize = parseInt(resp.headers.get("X-Total-Count"));
        });
    }

    adminPromote(username: string): void {
        this.userCommonService.promoteByUsername(username).subscribe(resp => {
             let index = this.userList.findIndex(user => user.username == username);
             this.userList[index].admin = resp.body.admin;
        });
    }

    adminDemote(username: string): void {
        this.userCommonService.demoteByUsername(username).subscribe(resp => {
            let index = this.userList.findIndex(user => user.username == username);
            this.userList[index].admin = resp.body.admin;
        });
    }
}