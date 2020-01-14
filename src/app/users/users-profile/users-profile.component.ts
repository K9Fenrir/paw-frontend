import { Component, OnInit } from '@angular/core';
import { User } from "./models/user";
import {ActivatedRoute, Router} from "@angular/router";
import { UserProfileService } from "./services/user-profile.service";
import {GlobalApp} from "../../helpers/global";
import {UpdateUser} from "./models/updateUser";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserCommonService} from "../services/user-common.service";

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent implements OnInit {
  user: User;
  pageSize: number = 5;
  favPage: number = 1;
  postPage: number = 1;
  userUpdate: UpdateUser = new UpdateUser();

  constructor(
      private userProfileService: UserProfileService,
      private route: ActivatedRoute,
      private activeModal: NgbActiveModal,
      public app: GlobalApp,
      private modalService: NgbModal,
      private router: Router,
      private userCommonService: UserCommonService
  ) { }

  ngOnInit() {
      let username = this.route.snapshot.paramMap.get("username");
      this.userProfileService.getUser(username).subscribe(resp => {
         this.user = resp.body;
      });
  }

  changeEmail(): void {
      let username = this.route.snapshot.paramMap.get("username");
      this.userProfileService.changeEmail(this.userUpdate, username).subscribe(resp => {
          this.user = resp.body;
          console.log(resp.body);
      })
  }

    changeDiscordID(): void {
        let username = this.route.snapshot.paramMap.get("username");
        this.userProfileService.changeDiscrodID(this.userUpdate, username).subscribe(resp => {
            this.user = resp.body;
        }, error => {
            alert(error);
        })
    }

    deleteUser(username: string) : void {
        this.userCommonService.deleteByUsername(username).subscribe(resp => {
            this.router.navigate(["users"]);
        })
    }

    openEmailModal(content) {
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }

    openDiscordModal(content) {
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
}
