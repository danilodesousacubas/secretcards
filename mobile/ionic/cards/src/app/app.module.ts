import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectPage } from '../pages/select/select';
import { IndexPage } from '../pages/index/index';

import { HttpModule, JsonpModule } from '@angular/http';

import { Facebook } from '@ionic-native/facebook';

import  firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyB-dyRvOhyiDWXbff18zEwGkQPlwVSJNdU",
  authDomain: "dev-secretcards.firebaseapp.com",
  databaseURL: "https://dev-secretcards.firebaseio.com",
  projectId: "dev-secretcards",
  storageBucket: "",
  messagingSenderId: "326638685691"
});

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SelectPage,
    LoginPage,
    IndexPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SelectPage,
    LoginPage,
    IndexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    JsonpModule
    
    
  ]
})
export class AppModule {}
