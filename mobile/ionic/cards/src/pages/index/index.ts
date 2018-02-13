import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'index.html'
})
export class IndexPage {

  constructor( private _navCtrl: NavController){}
  slides = [
    {
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  goToLogin(){
    this._navCtrl.push(LoginPage);
  }
  
}