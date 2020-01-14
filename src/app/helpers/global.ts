import JwtDecode from "jwt-decode"
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class GlobalApp {

    public appUrl = "http://192.168.99.100:8080/v1/";

    constructor(
        private router: Router
    ) { }

    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }

    public validateLogin(): boolean {
        let token: string = localStorage.getItem("paw-token");
        if (token != null) {
            let tokenExpTime = new Date(JwtDecode(token.substring("Bearer".length)).exp * 1000);
            console.log(tokenExpTime);
            return tokenExpTime.getTime() > Date.now();
        }
    }

    public getTokenTimeRemaining(): number {
        let token: string = localStorage.getItem("paw-token");
        if (token != null){
            let tokenExpTime = new Date(JwtDecode(token.substring("Bearer".length)).exp * 1000);
            return tokenExpTime.getTime() - Date.now();
        }
        return -1;
    }
}