import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
 
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

        var db = firebase.firestore();
        //this.collrefID = db.collection("dtr6").id;
        
        db.collection("users").doc("gillisda3@gmail.com").set({
          name: "Don Gillis",
          anotherfield: "mine3"
        }).catch(function (error) {
          console.error("Error adding document: ", error);
        }); 
        db.collection("users").doc("gillisda3@gmail.com").collection("tasks").doc("Task number 13").set({
          taskstatus: "unstarted",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(function (error) {
          console.error("Error adding document: ", error);
        }); 
        db.collection("users").doc("gillisda2@gmail.com").collection("tasks").add({
          taskname: "Task number 4",
          taskstatus: "unstarted",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(function (error) {
          console.error("Error adding document: ", error);
        });; 
          // .then(function (docRef) {
          //   console.log("Document written with ID: ", docRef.id);
          // })
          let prompt = this.alertCtrl.create({
            title: 'Approve',
            message: "Enter an optional comment to accompany your approval.",
            inputs: [
              {
                name: 'comment',
                placeholder: 'Comment'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Approve',
                handler: data => {
                  console.log(' clicked');
                }
              }
            ]
          });
          prompt.present();  
  }
  
  
}
