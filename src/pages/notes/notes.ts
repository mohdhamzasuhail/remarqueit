import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';

import { AddNotesPage } from '../add-notes/add-notes';
import { EditNotesPage } from '../edit-notes/edit-notes';
import { AccountPage } from '../account/account';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalProvider } from '../../providers/global/global';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  userInfo : any = {};
	notesRef : AngularFireList<any>;
  notes    : Observable<any[]>;
  message  : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
    public globalService: GlobalProvider, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController) {

    this.userInfo = this.globalService.userInfo;
    
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  ionViewDidEnter() {
    this.userInfo = this.globalService.userInfo;
    this.notesRef = this.db.list('notes/' + this.globalService.userInfo.userId );
    this.notes    = this.notesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 
  }

  swipeLeft(): any {
    console.log('Swipe Left');
  }

  swipeRight(): any {
    console.log('Swipe Right');
  }  

  goToAddNotes() {
    if(this.globalService.userInfo.status == 'true') {
      this.navCtrl.push(AddNotesPage);
    }    
    else {
      let toast = this.toastCtrl.create({
        message: 'Please login to add notes.',
        duration: 1000,
        position: 'bottom',
      });
      toast.onDidDismiss(() => {
        this.navCtrl.push(AccountPage);
      });
      toast.present();      
       
    }
  }

  goToAccount() {
    this.navCtrl.push(AccountPage);
  }

  editNotes(key: string, noteTitle: string, note: string, dateCreated: string) {

    this.globalService.noteKey.key = key;
    localStorage.setItem("key", key);

    this.globalService.noteKey.noteTitle = noteTitle;
    localStorage.setItem("noteTitle", noteTitle);
    
    this.globalService.noteKey.note = note;
    localStorage.setItem("note", note);

    this.globalService.noteKey.dateCreated = dateCreated;
    localStorage.setItem("dateCreated", dateCreated);
    
    this.navCtrl.push(EditNotesPage);

  }

  deleteNote(key: string, noteTitle: string, note: string, dateCreated: string) {
    this.notesRef.set(key, {
      noteTitle : "",
      note      : ""
    });

    let toast = this.toastCtrl.create({
      message: 'Note removed successfully.',
      duration: 4000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Undo',
    });

    toast.onDidDismiss((data, role) => {
      if (role == "close") {
        this.notesRef.set(key, {
          noteTitle : noteTitle,
          note      : note
        }); 
      }

      else {
        this.notesRef.remove(key);
      }

    });
    toast.present();
  }

  noteOptions(key: string) {
    let actionSheet = this.actionSheetCtrl.create({
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {

          // this.notesRef.set(this.key, {
          //   noteTitle : "",
          //   note      : ""
          // });
          // this.navCtrl.pop();
      
          let toast = this.toastCtrl.create({
            message: 'Note removed successfully.',
            duration: 4000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Undo',
          });

          toast.onDidDismiss((data, role) => {
            // if (role == "close") {
            //   this.notesRef.set(this.key, {
            //     noteTitle : this.noteTitle,
            //     note      : this.note
            //   }); 
            // }

            // else {
            //   this.notesRef.remove(this.key);
            // }

          });
          toast.present();
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Share',
         handler: () => {
           console.log('Share clicked');
         }
       },
       {
         text: 'Add Another User',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
  }

}
