import { Headers, RequestOptions } from '@angular/http';
export class JwtService {

    createHeader(): RequestOptions {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMiLCJleHAiOjE1MTY2NzI5OTl9.6rXQ54uzksHoGVGHCvDGirP9xdyLGEimI2Th7WZTWuUKKnemAFVhfjwl-WaqNC6Sv1s9jU-hriLEfnAkiTjzlQ");
        let options = new RequestOptions({ headers: headers });
    
        return options;
    }
}