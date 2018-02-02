import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
 })

  export class LoginPage {
       
    isLoggedIn:boolean = false;
    users: any;

    constructor(public _navCtrl: NavController, private fb: Facebook, private alert:AlertController) {
      console.log("called constructor");
      fb.getLoginStatus()
        .then(res => {
          console.log(res.status);
          if(res.status === "connect") {
            this.isLoggedIn = true;
            console.log("status logged");
          } else {
            this.isLoggedIn = false;
            console.log("status not logged");
          }
        })
        .catch(e => console.log(e));
      }
   
    loginWithFacebook() {
      this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if(res.status === "connected") {
            this.isLoggedIn = true;
            this.getUserDetail(res.authResponse.userID);
            this._navCtrl.push(TabsPage);
          } else {
            //this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
    }

    getUserDetail(userid) {
      this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
        .then(res => {
          console.log(res);
          this.users = res;
        })
        .catch(e => {
          console.log(e);
        });
    }

    logout() {
      this.fb.logout()
        .then( res => this.isLoggedIn = false)
        .catch(e => console.log('Error logout from Facebook', e));

        this.isLoggedIn = false;
        this._navCtrl.push(LoginPage);
        
        let alert = this.alert.create({
            title: 'Logout' + '2' + this.isLoggedIn,
            subTitle: 'sub logout',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          }
        );
        
        alert.present();

    }
    
    goToHome(){
      this._navCtrl.push(TabsPage);
    }

    isFacebookLogged(){
      return this.isLoggedIn;
    }
  }