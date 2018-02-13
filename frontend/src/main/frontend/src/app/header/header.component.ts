import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId : module.id,
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent{

    route: Router;
    @Input() login: string;

    constructor(router:Router){
        console.log("LOADD.. HEADER ");
        this.route = router;
        this.login =  localStorage.getItem('login');
    }

    logout(event){
        console.log("LOGOUT.... ");
        event.preventDefault();
        localStorage.clear();

        this.route.navigate(['/login'])
    }
}