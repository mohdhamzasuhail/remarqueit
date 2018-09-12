import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-edit-notes',
  templateUrl: 'edit-notes.html',
})
export class EditNotesPage {
  
  key         : string = '';  
  noteTitle   : string = '';  
  note        : string = '';  
  dateCreated : string = '';
  notesRef    : AngularFireList<any>;
  notes       : Observable<any[]>;
  userInfo    : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalService : GlobalProvider,
    public db: AngularFireDatabase, public actionSheetCtrl: ActionSheetController, public toastCtrl : ToastController) {
  	
    this.userInfo = this.globalService.userInfo;

    this.key         = this.globalService.noteKey.key;
    this.noteTitle   = this.globalService.noteKey.noteTitle;
    this.note        = this.globalService.noteKey.note;
  	this.dateCreated = this.globalService.noteKey.dateCreated;

    this.notesRef = db.list('notes/' + this.userInfo.userId, ref => ref.orderByKey().equalTo(this.key))
    this.notes    = this.notesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNotesPage');
  }

  goToHome() {
    this.navCtrl.pop();
  }

  updateNote(key: string, noteTitle: string, note: string) {
    this.notesRef.set(key, { 
      noteTitle   : noteTitle,
      note        : note,
      dateCreated : this.dateCreated
    });

    let toast = this.toastCtrl.create({
        message: 'Note updated successfully.',
        duration: 1500,
        position: 'bottom'
      });

      // toast.onDidDismiss(() => {
      // });
      toast.present();
      this.navCtrl.pop();
  }


  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {

          this.notesRef.set(this.key, {
            dateCreated : "",
            noteTitle   : "",
            note        : ""
          });
          this.navCtrl.pop();
      
          let toast = this.toastCtrl.create({
            message: 'Note removed successfully.',
            duration: 4000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Undo',
          });

          toast.onDidDismiss((data, role) => {
            if (role == "close") {
              this.notesRef.set(this.key, {
                dateCreated : this.dateCreated,
                noteTitle   : this.noteTitle,
                note        : this.note
              }); 
            }

            else {
              this.notesRef.remove(this.key);
            }

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
