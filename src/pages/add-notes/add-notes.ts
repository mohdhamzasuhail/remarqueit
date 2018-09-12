import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-add-notes',
  templateUrl: 'add-notes.html',
})
export class AddNotesPage {

  @ViewChild('myTabs') tabRef: Tabs;

  notesRef : AngularFireList<any>;
  notes    : Observable<any[]>;

  userInfo : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    private toastCtrl: ToastController, public globalService: GlobalProvider) {
      
    this.userInfo = this.globalService.userInfo;   

    this.notesRef = db.list('notes/' + this.userInfo.userId);
    this.notes    = this.notesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
  }

  addNote(noteTitle: string, note: string) {
  
    if (noteTitle.length == 0 && note.length == 0) {
      let toast = this.toastCtrl.create({
        message: 'Please enter all details',
        duration: 1500,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });  
      toast.present();  
    }
    else {

      const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

      var today = new Date();
      var dd    = today.getDate();
      var mm    = monthNames[today.getMonth()];
      var yyyy  = today.getFullYear();
      var dateCreated = mm + ' ' + dd + ', '+yyyy;

      this.notesRef.push({
        noteTitle   : noteTitle,
        note        : note,
        dateCreated : dateCreated
      });

      this.navCtrl.pop();

      let toast = this.toastCtrl.create({
          message: 'Note added successfully!',
          duration: 1000,
          position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
    }

  }

  goToHome() {
    this.navCtrl.pop();
  }

}
