import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCisCF4kN7bS_k6w_R-41RSArZGVgqc1pI",
      authDomain: "dtr-app-1.firebaseapp.com",
      databaseURL: "https://dtr-app-1.firebaseio.com",
      projectId: "dtr-app-1",
      storageBucket: "dtr-app-1.appspot.com",
      messagingSenderId: "490982861769"
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}
