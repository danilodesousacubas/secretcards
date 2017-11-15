import { Http, Headers, RequestOptions, Response } from '@angular/http';

export class JwtService {

    createHeader(http:Http): RequestOptions {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });
        console.log("teste");

        return options;
    }
}