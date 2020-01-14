import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Login } from './models/login'
import { LoginService } from "./services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(
      private loginService: LoginService,
      private router: Router
  ) { }

  ngOnInit() {
  }

    submitForm(): void {
        this.loginService.login(this.login)
            .subscribe(resp => {
                localStorage.setItem("paw-currentUser", this.login.username);
                localStorage.setItem("paw-token", resp.headers.get("Authentication"));
                localStorage.setItem("paw-role", resp.headers.get("X-Role"));
                this.router.navigate(['/']);
            });
    }
}
