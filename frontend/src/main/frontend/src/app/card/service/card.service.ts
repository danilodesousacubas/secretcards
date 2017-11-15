import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { JwtService } from '../../services/jwt.service';

export class CardService {

    http:Http;
    jwt = new JwtService();
    card : Object;

    // constructor(http:Http){
    //     this.http =http;
    // }

    getCard(http:Http, cardId:number) : Object {
        
        let options = this.jwt.createHeader(this.http);
        
                this.http.get('http://localhost:8080/rest/card/'+cardId, options)
                    .subscribe(x =>  {
                        this.card = x.json();      
                    }, erro =>  console.log(erro));
        
     return this.card;   
    }
}