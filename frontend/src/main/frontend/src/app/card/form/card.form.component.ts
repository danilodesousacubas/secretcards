import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, Input} from '@angular/core';
import { Router } from "@angular/router";

import { ActivatedRoute } from '@angular/router';

import { CardComponent } from '../card.component';
import { JwtService } from '../../../app/services/jwt.service';

import { CardService } from '../service/card.service';
import { Config } from '../../config/config';

import { TagListComponent } from '../../tag/tag.list.component';
import { TagComponent } from '../../tag/tag.component';

@Component({
    moduleId: module.id,
    selector: 'foto-form',
    templateUrl: './card.form.component.html' 
})

export class CardForm {
 
    configService = new Config();
    jwtService = new JwtService();
    cardService = new CardService();

    card: CardComponent = new CardComponent();
    tagsComponent: TagComponent[] = [];

    tagsComponentOri: TagComponent[] = [];
    cardId: number;
        
    cards: Object[] = [];
    jsonData: JSON;
        
    constructor(private _http: Http, private route: ActivatedRoute, private _router: Router) {
        
        let options = this.jwtService.createHeader(this._http);

        this.findTag(options);

        let subscriber = route.params.subscribe(param => { 
            this.cardId = param['cardId'];
            this.actionEdit(options);                
        });

    }

    save(event) {
        let options = this.jwtService.createHeader(this._http);

        event.preventDefault();
    
        if(this.card.id !== null){
            this._http.put(this.configService.getContext()+ '/rest/card', JSON.stringify(this.card), options)
            .subscribe(() => {
                this.card = new CardComponent();
                this._router.navigate(['/cards']);
            }, error =>  console.log(error));
            return;    
        }

        this._http.post(this.configService.getContext()+ '/rest/card', JSON.stringify(this.card), options)
            .subscribe(() => {
                this.card = new CardComponent();
                this._router.navigate(['/cards']);
            }, error =>  console.log(error));
    }

    onChange(tagStr:string, event) {
        this.card.tags.push(tagStr);
        this.tagsComponent = this.tagsComponent.filter(tagComponent => tagComponent.name !== tagStr);
    }

    remove(tagStr:string, event) {
        this.card.tags = this.card.tags.filter(tag => tag !== tagStr);
        let tagComponent = this.tagsComponentOri.filter(tagComponent => tagComponent.name === tagStr)[0];
        this.tagsComponent.push(tagComponent);
    };

    findTag(options) {
        this._http.get(this.configService.getContext() + '/rest/tag', options)
            .subscribe(tag => {
                this.tagsComponent = tag.json();
                this.tagsComponentOri = tag.json();
            }, error => console.log(error));
    };

    actionEdit(options){
        this._http.get(this.configService.getContext()+'/rest/card/edit/' + this.cardId, options)
            .subscribe(x =>  {
                this.card = x.json();
            
                this.tagsComponent = [];

                this.card.tags.forEach(tag => {
                    let tags = this.tagsComponentOri.filter(tagComponent => TagComponent.name === tag);
            
                    tags.forEach(t => {
                        this.tagsComponent.splice(this.tagsComponent.indexOf(t, 1));
                    });
                });
            
            }, 
        error => console.log(error));
    };
}