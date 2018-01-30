import { Component, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JwtService } from '../../services/jwt.service';
import { Config } from '../../config/config';

@Component({
    moduleId: module.id,
    selector: 'cardList',
    templateUrl: './card.list.component.html' 
})

export class CardListComponent { 
    
    private cards: Object[] = [];
    private url: string;
  
    constructor(private http: Http, private route: ActivatedRoute) {
        
        let requestOptions = new JwtService().createHeader(http);
        let context = new Config().getContext();

        let subscriber = route.params.subscribe(p => {
        
        if(!Number.isNaN(p['cardId']) && p['cardId']!== undefined) {
            
            this.url = context + "/rest/card/" + p['cardId'];;
            
            } else if(!Number.isNaN(p['tagId']) && p['tagId'] != undefined){    
                this.url = context + "/rest/search?tagId="+p['tagId'];
            } else {
                this.url = context + "/rest/card";
            }
        
            var stream = http.get(this.url, requestOptions);
            stream.subscribe(r => {this.cards =  r.json(), error => console.log(error) });
        
        });
    }  
}