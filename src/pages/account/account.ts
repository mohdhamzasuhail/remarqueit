import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

	userRef  : AngularFireList<any>;
  user     : Observable<any[]>;
  userInfo : any = {};
	showLoginBtn    : boolean = true;
	showRegisterBtn : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,
  	public globalService: GlobalProvider, public toastCtrl: ToastController, public fire: AngularFireAuth,
    public loadingCtrl: LoadingController) {
    
    this.userInfo = this.globalService.userInfo;

  	this.userRef = db.list('users');
    this.user    = this.userRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goToHome() {
    this.navCtrl.pop();
  }

  showToast(message: string) {
  	let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    // toast.onDidDismiss({
    // });
    toast.present();
  }

  showLogin() {
  	this.showLoginBtn    = true;
  	this.showRegisterBtn = false;
  }
	
  showRegister() {
  	this.showLoginBtn    = false;
  	this.showRegisterBtn = true;
  }

  gender(value: number) {
    if(value == 1) {
      this.globalService.userInfo.userGender = 'Female';
      localStorage.setItem("userGender","Female");
    }

    else {
      this.globalService.userInfo.userGender = 'Male';
      localStorage.setItem("userGender","Male");
    }
  }

  login(email: string, password: string) {
    if (email && password) {

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();

      this.fire.auth.signInWithEmailAndPassword(email, password)
        .then(data => {
          var user = this.fire.auth.currentUser;
          if (user) {
            
            this.globalService.userInfo.userId    = user.uid;
            this.globalService.userInfo.userEmail = user.email;
            this.globalService.userInfo.status    = 'true';

            localStorage.setItem("userId", user.uid);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("status", "true");

            this.userRef = this.db.list('users/' + user.uid);
            this.user    = this.userRef.valueChanges();
            this.user.subscribe(action => {

              this.globalService.userInfo.userName   = action[4];
              this.globalService.userInfo.userNumber = action[5];
              this.globalService.userInfo.userGender = action[2];
              localStorage.setItem("userName", action[4]);
              localStorage.setItem("userNumber", action[5]);
              localStorage.setItem("userGender", action[2]);
            });

            loading.dismiss();

            this.showToast('Welcome back to RemarqueIT!');
          }

        })
        .catch(error => {
          loading.dismiss();
          this.showToast(error.message);
        })
    }

    else {
      this.showToast('Please enter all details!');
    }
  }

  async register(name: string, number: string, email: string, password: string) {
  	if(name && number && email && password && this.globalService.userInfo.userGender) {
  		if(number.length != 10) this.showToast('Please enter a 10 digit mobile number!');
  		else {
        let loading = this.loadingCtrl.create({
          content: 'Loading...'
        });
        loading.present();

        try {
          await this.fire.auth.createUserWithEmailAndPassword(email, password);

          this.globalService.userInfo.status     = 'true';
          this.globalService.userInfo.userId     = this.fire.auth.currentUser.uid;
          this.globalService.userInfo.userName   = name;
          this.globalService.userInfo.userEmail  = email;
          this.globalService.userInfo.userNumber = number;

          this.fire.authState.subscribe(auth => {
            this.db.object(`users/${auth.uid}`).set(this.globalService.userInfo);
          })
          
          this.showToast('Welcome to RemarqueIT!');
          loading.dismiss(); 
        }
        catch(e) {
          this.showToast(e);
          loading.dismiss();
        }
  		}
  	}
  	else this.showToast('Please enter all details!');

  }

  logout() {
    this.fire.auth.signOut();
    this.showToast('Logged out! Come back soon! ');
    this.globalService.userInfo.status     = "false";
    this.globalService.userInfo.userId     = "";
    this.globalService.userInfo.userName   = "";
    this.globalService.userInfo.userEmail  = "";
    this.globalService.userInfo.userNumber = "";
    this.globalService.userInfo.userGender = "";

    this.globalService.noteKey.dateCreated = "";
    this.globalService.noteKey.key = "";
    this.globalService.noteKey.note = "";
    this.globalService.noteKey.noteTitle = "";

    localStorage.setItem("status","false");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userNumber");
    localStorage.removeItem("userGender");

    localStorage.removeItem("key");
    localStorage.removeItem("dateCreated");
    localStorage.removeItem("note");
    localStorage.removeItem("noteTitle");


    this.showLoginBtn    = true;
    this.showRegisterBtn = false
   }

}
