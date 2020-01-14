import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserCreate } from "./models/userCreate";
import { UserCreateService } from "./services/user-create.service";

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  userCreate: UserCreate = new UserCreate();

  constructor(
      private userCreateService: UserCreateService,
      private router: Router
  ) { }

  ngOnInit() {
  }

    submitForm(): void {
        this.userCreateService.create(this.userCreate)
            .subscribe(() => {
                this.router.navigate(['/login']);
            });
    }
}
