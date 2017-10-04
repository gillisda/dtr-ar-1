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
      splashScreen.hide();
    });
 
    firebase.initializeApp({
      apiKey: "AIzaSyBV44BvvSO5qRU2Ytw1PtIJB2Yml2z9X4c",
      authDomain: "augmented-voice-167112.firebaseapp.com",
      databaseURL: "https://augmented-voice-167112.firebaseio.com",
      projectId: "augmented-voice-167112",
      storageBucket: "augmented-voice-167112.appspot.com",
      messagingSenderId: "855884425303"
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}
