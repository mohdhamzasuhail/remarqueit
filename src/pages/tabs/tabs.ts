import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { NotesPage } from '../notes/notes';
import { ArchivePage } from '../archive/archive';

import { GlobalProvider } from '../../providers/global/global';
import { AddNotesPage } from '../add-notes/add-notes';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotesPage;
  tab2Root = ArchivePage;

  constructor( public navCtrl: NavController, public navParams: NavParams, public globalService: GlobalProvider, 
  	public toastCtrl: ToastController) {}

}
