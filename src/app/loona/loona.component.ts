import {ApplicationRef, Component, OnInit} from '@angular/core';
import {LoonaService} from "./services/loona.service";
import {GlobalApp} from "../helpers/global";

@Component({
    selector: 'app-loona',
    templateUrl: './loona.component.html',
    styleUrls: ['./loona.component.scss']
})
export class LoonaComponent implements OnInit {

    private loonaOnline: boolean = false;

    constructor(
        private loonaService: LoonaService,
        public app: GlobalApp,
    ) { }

    ngOnInit() {
        this.loonaService.loonaConnectionCheck().subscribe(resp => {
           if (resp.status == 200){
               this.loonaOnline = true;
           }
           else{
               this.loonaOnline = false;
           }
        });
    }

    connectLoona(): void {
        this.loonaService.loonaConnect().subscribe(resp => {
            this.loonaOnline = true;
        });
    }

    disconnectLoona(): void {
        this.loonaService.loonaDisconnect().subscribe(resp => {
            this.loonaOnline = false;
        });
    }

}
