import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
        var db = firebase.firestore();
    
        db.collection("dtr2").add({
          username: "dg@dg.com" 
          
        })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
  }
}
