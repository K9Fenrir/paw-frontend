import {Component, OnInit} from '@angular/core';

import { GlobalApp } from "./helpers/global";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'paw-frontend';

    constructor(
        private router: Router,
        public app : GlobalApp
    ) { }

    ngOnInit(): void {

    }

    logout(): void {
      localStorage.removeItem("paw-currentUser");
      localStorage.removeItem("paw-token");
      localStorage.removeItem("paw-role");
      this.router.navigate(["/"]);
    }
}
