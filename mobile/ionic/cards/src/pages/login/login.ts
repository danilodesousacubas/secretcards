import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
 })

  export class LoginPage {
    constructor(public _navCtrl: NavController) {
  }  

  goToHome(){
      this._navCtrl.push(TabsPage);
    }
}


