import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { CardComponent } from '../card.component';
import { JwtService } from '../../../app/services/jwt.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../service/card.service';
import { Config } from '../../config/config';


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
    card1: Object;
    cards: Object[] = [];
    jsonData: JSON;
    config = new Config();
    
    
    jwt = new JwtService();
    
    constructor(http: Http,  private route: ActivatedRoute) {
        this.http = http;
        
        let options = this.jwt.createHeader(http);

        this.http.get(this.config.getContext() + '/rest/tag', options)
            .subscribe(x =>  {
                this.tags = x.json(); 
            }, erro =>  console.log(erro));

             let subscriber = route.params.subscribe(p => {
                 this.cardId = p['cardId']
                 console.log("cardId ", this.cardId);
                 //this.card1 = this.service.getCard(http, this.cardId);

                 let options = this.jwt.createHeader(this.http);
                 
                         this.http.get(this.config.getContext()+'/rest/card/edit/'+this.cardId, options)
                             .subscribe(x =>  {
                                 this.card = x.json();
                             
                             }, erro =>  console.log(erro));
         
                            this.tags; 
             });

    }

  cadastrar(event) {
 
    let options = this.jwt.createHeader(this.http);

    event.preventDefault();
    
    this.http.post(this.config.getContext()+ '/rest/card', JSON.stringify(this.card), options)
        .subscribe(() => {
            this.card = new CardComponent();
            console.log('Card save Sucess');
        }, erro =>  console.log(erro));
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