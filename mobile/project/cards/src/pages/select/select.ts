import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Card} from '../../domain/card' ;
@Component({
    templateUrl: 'select.html'
})
export class SelectPage {
   
    public card: Card;

    constructor(public navParams: NavParams, public navCtrl: NavController) {
        console.log("Here!!");

        this.card = this.navParams.get('cardSelected');

        console.log(this.card);
    }
}
