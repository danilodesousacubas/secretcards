import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Card } from '../../app/domain/card';
import { Http } from '@angular/http';
import { Config } from '../../app/config/app.config'
import { JwtService } from '../../app/jwt/jwt.service'


@Component({
    templateUrl: 'select.html'
})
export class SelectPage {
   
    private card : Card;
    private cardDetached : Card;
    private jwt : JwtService = new JwtService();
    private config : Config = new Config();
    private _url_service_cards: String;

    constructor(public navParams: NavParams, public navCtrl: NavController, private http:Http) {
        this._url_service_cards = "rest/card";
        this.card = this.navParams.get('cardSelected');
        this.cardDetached = this.card;
    }

    save(){

        let options = this.jwt.createHeader();
        
        this.http.post(this.config.getContext() +"/" + this._url_service_cards, JSON.stringify(this.card), options)
            .subscribe( ()=> {
                console.log("ok");
            }, error => console.log(error));
    }

    cancel(){
        this.card = this.cardDetached;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
}
