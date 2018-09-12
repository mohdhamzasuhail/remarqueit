import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { NotesPage } from '../pages/notes/notes';
import { AddNotesPage } from '../pages/add-notes/add-notes';
// import { TabsPage } from '../pages/tabs/tabs';
import { EditNotesPage } from '../pages/edit-notes/edit-notes'; 
import { ArchivePage } from '../pages/archive/archive';
import { StarPage } from '../pages/star/star';
import { IntroPage } from '../pages/intro/intro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GlobalProvider } from '../providers/global/global';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

const firebaseAuth = {
  apiKey            : "AIzaSyArzXdjt5dRT9NTGSo_cET8MHy-Dg95mjU",
  authDomain        : "todolist-ionic-app.firebaseapp.com",
  databaseURL       : "https://todolist-ionic-app.firebaseio.com",
  projectId         : "todolist-ionic-app",
  storageBucket     : "todolist-ionic-app.appspot.com",
  messagingSenderId : "673911461940"
};

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    NotesPage,
    AddNotesPage,
    // TabsPage,
    EditNotesPage,
    ArchivePage,
    StarPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicSwipeAllModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      iconMode: 'md',
      tabsPlacement: 'bottom',
      menuType: 'overlay',
      tabsLayout: 'title-hide',
      tabsHighlight: true,
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    NotesPage,
    AddNotesPage,
    // TabsPage,
    EditNotesPage,
    ArchivePage,
    StarPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
