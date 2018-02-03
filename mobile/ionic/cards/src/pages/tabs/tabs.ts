import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab0Root = LoginPage;
    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = ContactPage;
    mySelectedIndex: number;
  
    constructor(navParams: NavParams, nav:NavController) {
        this.mySelectedIndex = navParams.get('indexSelected');
    }
}