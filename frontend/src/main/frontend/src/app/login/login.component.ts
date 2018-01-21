import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { JwtService } from '../../app/services/jwt.service';
import { Router } from "@angular/router";
import { Config } from "../config/config";

import { FacebookService, InitParams } from 'ngx-facebook';

import { LoginResponse } from 'ngx-facebook';



@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {

    @Input() login: string;
    @Input() password: string;

    http: Http;
    route: Router;
    config: Config;
    private fb: FacebookService;

    constructor(http: Http, private router: Router, private _fb: FacebookService) {
        this.http = http;
        this.route = router;
        this.fb = _fb;

        let initParams: InitParams = {
            appId: '285971068595319',
            xfbml: true,
            version: 'v2.11'
          };
      
          this.fb.init(initParams);
      
    }

    autenticar(event) {
      
        event.preventDefault();
        let body = { 'username':this.login, 'password' : this.password };
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });
        
        this.config = new Config();

        let url = this.config.getContext()+"/login";
        console.log("url :: " + url);

        let resp = this.http.post(url, body, options)
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

    loginWithFacebook(): void {

        this._fb.login()
          .then((response: LoginResponse) => console.log(response))
          .catch((error: any) => console.error(error));
    
      }
}