import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { CardComponent } from '../card.component';
import { JwtService } from '../../../app/services/jwt.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../service/card.service';
import { Config } from '../../config/config';
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'foto-form',
    templateUrl: './card.form.component.html' 
})

export class CardForm {

    card: CardComponent  = new CardComponent();
    tags: Object[] = [];
    http: Http;
    cardId: number;
    service = new CardService();
    
    cards: Object[] = [];
    jsonData: JSON;
    config = new Config();
    
    private router: Router;
        
    jwt = new JwtService();
    
    constructor(private _http: Http, private route: ActivatedRoute, private _router: Router) {
        this.http = _http;
        this.router = _router;
        
        let options = this.jwt.createHeader(this.http);

        this.http.get(this.config.getContext() + '/rest/tag', options)
            .subscribe(x =>  {
                this.tags = x.json(); 
            }, error =>  console.log(error));

             let subscriber = route.params.subscribe(p => {
                 this.cardId = p['cardId']
    
                 let options = this.jwt.createHeader(this.http);
                 
                this.http.get(this.config.getContext()+'/rest/card/edit/' + this.cardId, options)
                    .subscribe(x =>  {
                        this.card = x.json();
                    
                    }, error => console.log(error));

                this.tags; 
             });

    }

  cadastrar(event) {
 
    let options = this.jwt.createHeader(this.http);

    event.preventDefault();
    
    this.http.post(this.config.getContext()+ '/rest/card', JSON.stringify(this.card), options)
        .subscribe(() => {
            this.card = new CardComponent();
            this.router.navigate(['/cards']);
        
        }, error =>  console.log(error));
    }

    onChange(tag:string, event) {
        this.card.tags.push(tag);
        this.tags.splice(this.tags.indexOf(tag), 1);
    }

    remove(tag:string, event) {
        this.card.tags.splice(this.card.tags.indexOf(tag), 1);
        this.tags.push(tag);
    }
}