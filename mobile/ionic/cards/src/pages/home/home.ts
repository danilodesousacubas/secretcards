import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Card } from '../../app/domain/card';
import { JwtService } from '../../app/jwt/jwt.service';
import { Http } from '@angular/http';
import { SelectPage } from '../../pages/select/select';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public cards: Card[];
  private _url_base: String;
  private _url_service_cards: String;

  constructor(private _navCtrl: NavController, private _http: Http, private _loadingCtrl: LoadingController) {

    this._url_base = "https://secretcards.herokuapp.com/";
    this._url_service_cards = "rest/card";

  }

  ngOnInit() {
    
    let loader = this._loadingCtrl.create({
      content: 'Loading Cards ...'
    });

    let requestOptions = new JwtService().createHeader();
    loader.present();

    this._http.get(this._url_base + "" + this._url_service_cards, requestOptions)
      .map(res => res.json())
      .subscribe(data => {
        this.cards = data;
        loader.dismiss();
      });
  }

  select(card) {
    this._navCtrl.push(SelectPage, { cardSelected: card });
  }

}
