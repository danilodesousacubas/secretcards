import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'bar',
    templateUrl: './bar.component.html' 
})

export class BarComponent {
     private route: Router;
         
     constructor(private http: Http, private _route: Router) {
        this.route = _route;
    }
     
    list(event){
        event.preventDefault();
        this.route.navigate(['/cards']);
    }

    card(event){
        event.preventDefault();
        this.route.navigate(['/form/new']);
    }
     
    tag(event){
        event.preventDefault();
        this.route.navigate(['/tags']);
    }
}