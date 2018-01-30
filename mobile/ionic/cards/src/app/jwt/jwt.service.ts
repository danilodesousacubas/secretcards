import { Headers, RequestOptions } from '@angular/http';
export class JwtService {

    createHeader(): RequestOptions {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvc3NvIiwiZXhwIjoxNTE4MjA4OTc0fQ.AmcudCCCCMUH9CA9f7t712Y83DYWjxFvs-R6AuB8XHhAA1Zw4lNS3HzoEn4XBPAOLhW8Qk0Pe8zQwR-tH-Efjw");
        let options = new RequestOptions({ headers: headers });
    
        return options;
    }
}