import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';

// import firebase from 'firebase';

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

    loginWithFacebook(){
      /* console.log("teste");
      return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            console.log("Firebase success: " + JSON.stringify(success)); 
          });
  
      }).catch((error) => { console.log(error) });
      */

      // let provider = new firebase.auth.FacebookAuthProvider();
      
      // firebase.auth().signInWithRedirect(provider).then( () => {
      //   firebase.auth().getRedirectResult().then(result => {
      //     alert(JSON.stringify(result));
      //   }).catch(function(error){
      //     alert(JSON.stringify(error));
      //   });
      // });
    }
  }


