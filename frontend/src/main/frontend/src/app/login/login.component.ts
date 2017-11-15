import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { JwtService } from '../../app/services/jwt.service';
import { Router } from "@angular/router";

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
        
        let resp = this.http.post("http://localhost:8080/login", body, options)
             .map(r=> r.json())
             .subscribe (
                 data => {
                    localStorage.setItem('id_token', data.token)
                    localStorage.setItem('login', this.login);
                    console.log("Logado");
                    this.route.navigate(['/cards'])
                },
                error => console.log(error)
             )
        headers.append('Authorization', localStorage.getItem('id_token'));
    }
}