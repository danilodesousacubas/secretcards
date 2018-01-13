import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Card } from '../../domain/card';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { JwtService  } from '../../jwt/jwt.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  public cards: Card[];

  

   constructor(
      public navCtrl: NavController,
      private _http: Http,
      private _loadingCtrl: LoadingController,
      private _alertCtrl: AlertController
    ) {}

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: 'Carregando Cards ......'
    });
  
    let requestOptions = new JwtService().createHeader(this._http);

    loader.present();

    this._http
      .get('http://localhost:8080/rest/card', requestOptions)
      .map(res => res.json())
      .toPromise()
      .then(cards => {
        this.cards = cards;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: 'Connection fail',
            buttons: [{ text: 'Ok!'}],
            subTitle: 'Não é possivel obter a lista de cards'
          }).present();
      });
}

select(card){
  
}

}
