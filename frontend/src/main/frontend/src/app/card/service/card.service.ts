import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { JwtService } from '../../services/jwt.service';
import { Config } from "../../config/config";


export class CardService {

    http:Http;
    jwt = new JwtService();
    card : Object;
    config: Config;

    getCard(http:Http, cardId:number) : Object {
        
        let options = this.jwt.createHeader(this.http);
        this.config = new Config();

        this.http.get(this.config.getContext()+'/rest/card/'+ cardId, options)
            .subscribe(x =>  {
                this.card = x.json();      
            }, erro =>  console.log(erro));
        
     return this.card;   
    }
}