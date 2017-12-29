import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { JwtService } from '../../app/services/jwt.service';
import { Router } from "@angular/router";
import { Config } from "../config/config";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    @Input() login: string;
    @Input() password: string;

    http: Http;
    route: Router;
    config: Config;

    constructor(http: Http, private router: Router) {
        this.http = http;
        this.route = router;
    }

    autenticar(event) {
      
        event.preventDefault();
        let body = { 'username':this.login, 'password' : this.password };
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });
        
        this.config = new Config();

        let resp = this.http.post(this.config.getContext()+"/login", body, options)
             .map(r=> r.json())
             .subscribe (
                 data => {
                    localStorage.setItem('id_token', data.token)
                    localStorage.setItem('login', this.login);
                    console.log("Logado");
                    console.log("bla");
                    this.route.navigate(['/cards'])
                },
                error => console.log(error)
             )
        headers.append('Authorization', localStorage.getItem('id_token'));
    }
}