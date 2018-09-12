webpackJsonp([7],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, db, globalService, toastCtrl, fire, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.loadingCtrl = loadingCtrl;
        this.userInfo = {};
        this.showLoginBtn = true;
        this.showRegisterBtn = false;
        this.userInfo = this.globalService.userInfo;
        this.userRef = db.list('users');
        this.user = this.userRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    AccountPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'bottom'
        });
        // toast.onDidDismiss({
        // });
        toast.present();
    };
    AccountPage.prototype.showLogin = function () {
        this.showLoginBtn = true;
        this.showRegisterBtn = false;
    };
    AccountPage.prototype.showRegister = function () {
        this.showLoginBtn = false;
        this.showRegisterBtn = true;
    };
    AccountPage.prototype.gender = function (value) {
        if (value == 1) {
            this.globalService.userInfo.userGender = 'Female';
            localStorage.setItem("userGender", "Female");
        }
        else {
            this.globalService.userInfo.userGender = 'Male';
            localStorage.setItem("userGender", "Male");
        }
    };
    AccountPage.prototype.login = function (email, password) {
        var _this = this;
        if (email && password) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.fire.auth.signInWithEmailAndPassword(email, password)
                .then(function (data) {
                var user = _this.fire.auth.currentUser;
                if (user) {
                    _this.globalService.userInfo.userId = user.uid;
                    _this.globalService.userInfo.userEmail = user.email;
                    _this.globalService.userInfo.status = 'true';
                    localStorage.setItem("userId", user.uid);
                    localStorage.setItem("userEmail", user.email);
                    localStorage.setItem("status", "true");
                    _this.userRef = _this.db.list('users/' + user.uid);
                    _this.user = _this.userRef.valueChanges();
                    _this.user.subscribe(function (action) {
                        _this.globalService.userInfo.userName = action[4];
                        _this.globalService.userInfo.userNumber = action[5];
                        _this.globalService.userInfo.userGender = action[2];
                        localStorage.setItem("userName", action[4]);
                        localStorage.setItem("userNumber", action[5]);
                        localStorage.setItem("userGender", action[2]);
                    });
                    loading_1.dismiss();
                    _this.showToast('Welcome back to RemarqueIT!');
                }
            })
                .catch(function (error) {
                loading_1.dismiss();
                _this.showToast(error.message);
            });
        }
        else {
            this.showToast('Please enter all details!');
        }
    };
    AccountPage.prototype.register = function (name, number, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name && number && email && password && this.globalService.userInfo.userGender)) return [3 /*break*/, 6];
                        if (!(number.length != 10)) return [3 /*break*/, 1];
                        this.showToast('Please enter a 10 digit mobile number!');
                        return [3 /*break*/, 5];
                    case 1:
                        loading = this.loadingCtrl.create({
                            content: 'Loading...'
                        });
                        loading.present();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fire.auth.createUserWithEmailAndPassword(email, password)];
                    case 3:
                        _a.sent();
                        this.globalService.userInfo.status = 'true';
                        this.globalService.userInfo.userId = this.fire.auth.currentUser.uid;
                        this.globalService.userInfo.userName = name;
                        this.globalService.userInfo.userEmail = email;
                        this.globalService.userInfo.userNumber = number;
                        this.fire.authState.subscribe(function (auth) {
                            _this.db.object("users/" + auth.uid).set(_this.globalService.userInfo);
                        });
                        this.showToast('Welcome to RemarqueIT!');
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        this.showToast(e_1);
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.showToast('Please enter all details!');
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.logout = function () {
        this.fire.auth.signOut();
        this.showToast('Logged out! Come back soon! ');
        this.globalService.userInfo.status = "false";
        this.globalService.userInfo.userId = "";
        this.globalService.userInfo.userName = "";
        this.globalService.userInfo.userEmail = "";
        this.globalService.userInfo.userNumber = "";
        this.globalService.userInfo.userGender = "";
        this.globalService.noteKey.dateCreated = "";
        this.globalService.noteKey.key = "";
        this.globalService.noteKey.note = "";
        this.globalService.noteKey.noteTitle = "";
        localStorage.setItem("status", "false");
        localStorage.removeItem("userId");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        localStorage.removeItem("userNumber");
        localStorage.removeItem("userGender");
        localStorage.removeItem("key");
        localStorage.removeItem("dateCreated");
        localStorage.removeItem("note");
        localStorage.removeItem("noteTitle");
        this.showLoginBtn = true;
        this.showRegisterBtn = false;
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/account/account.html"*/'<ion-header no-border>\n\n  <ion-toolbar> \n\n  	<ion-buttons left>\n      <button ion-button icon-only (click)="goToHome()"><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n\n    <ion-title *ngIf="!this.fire.auth.currentUser">\n    	<div *ngIf="showLoginBtn">Login</div>\n    	<div *ngIf="showRegisterBtn">Register</div>\n    </ion-title>\n    \n    <ion-buttons end *ngIf="this.fire.auth.currentUser">\n      <button ion-button icon-only (click)="logout()"><ion-icon name="md-log-out"></ion-icon></button>\n    </ion-buttons>\n  \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n	\n	<div *ngIf="this.fire.auth.currentUser">\n		<br>\n		<ion-row>\n			<ion-col col-12>\n				<span *ngIf="userInfo.userGender == \'Male\'">\n					<img src="../../assets/imgs/avatar-male.png" style="margin-left:30%; border-radius: 50%;width: 40%; box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);border: 4px solid #fff;"><br>\n				</span>\n\n				<span *ngIf="userInfo.userGender == \'Female\'">\n					<img src="../../assets/imgs/avatar-female.png" style="margin-left:30%; border-radius: 50%;width: 40%; box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);border: 4px solid #fff;"><br>\n				</span>\n\n				<h1 style="text-align: center;color: #FFF;text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);">{{userInfo.userName}}</h1> \n			</ion-col>\n		</ion-row>\n		\n		<ion-card padding>\n			<ion-row>\n				<ion-col col-12>\n					<ion-row>\n						<ion-col col-3>\n							<h2><ion-icon name="md-mail"></ion-icon></h2>\n						</ion-col>\n						<ion-col col-9>\n							<h2>{{userInfo.userEmail}}</h2>\n						</ion-col>\n					</ion-row>\n					\n					<ion-row>\n						<ion-col col-3>\n							<h2><ion-icon name="md-call"></ion-icon></h2>\n						</ion-col>\n						<ion-col col-9>\n							<h2>{{userInfo.userNumber}}</h2>\n						</ion-col>\n					</ion-row>\n\n				</ion-col>\n			</ion-row>\n		</ion-card>	\n\n	</div>\n\n	<div *ngIf="!this.fire.auth.currentUser">\n		\n		<ion-row padding>\n			<ion-col col-6 no-padding (tap)="showLogin()">\n				<button ion-button full color="dark" style="box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);">Login</button>\n			</ion-col>\n\n			<ion-col col-6 no-padding (tap)="showRegister()">\n				<button ion-button full color="light" style="box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);">Register</button>\n			</ion-col>\n		</ion-row>\n\n		<ion-card padding *ngIf="showLoginBtn">\n			<ion-row>\n				<ion-col col-12>\n					\n					<h1 style="color:#F44336; text-align: center;"><b><i>Login</i></b></h1>\n\n					<ion-item>\n						<input type="email" #loginEmail placeholder="Email">\n					</ion-item>\n\n					<ion-item>\n						<input type="password" #loginPassword placeholder="Password">\n					</ion-item>\n\n					<ion-item>\n						<button ion-button full round color="custom" (tap)="login(loginEmail.value,loginPassword.value)" >GO!</button>\n					</ion-item>\n\n				</ion-col>\n			</ion-row>\n		</ion-card>\n\n		<ion-card padding *ngIf="showRegisterBtn">\n			<ion-row>\n				<ion-col col-12>\n					\n					<h1 style="color:#F44336; text-align: center;"><b><i>Register</i></b></h1>\n					\n					<ion-item>\n						<input type="text" #userName placeholder="Name">\n					</ion-item>\n\n					<ion-item>\n						<input type="number" #userNumber placeholder="Mobile Number">\n					</ion-item>\n\n					<ion-item>\n						<input type="email" #userEmail placeholder="Email">\n					</ion-item>\n\n					<ion-item>\n						<input type="password" #userPassword placeholder="Password">\n					</ion-item>\n\n					<ion-list radio-group>\n						<ion-item>\n							<ion-label>Female</ion-label>\n							<ion-radio (ionSelect)="gender(1)"></ion-radio>\n						</ion-item>\n						<ion-item>\n							<ion-label>Male</ion-label>\n							<ion-radio (ionSelect)="gender(2)"></ion-radio>\n						</ion-item>\n					</ion-list>\n\n					<ion-item>\n						<button ion-button full round color="custom" (tap)="register(userName.value,userNumber.value,userEmail.value,userPassword.value)">GO!</button>\n					</ion-item>\n\n				</ion-col>\n			</ion-row>\n		</ion-card>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNotesPage = /** @class */ (function () {
    function AddNotesPage(navCtrl, navParams, db, toastCtrl, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.userInfo = {};
        this.userInfo = this.globalService.userInfo;
        this.notesRef = db.list('notes/' + this.userInfo.userId);
        this.notes = this.notesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    AddNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNotesPage');
    };
    AddNotesPage.prototype.addNote = function (noteTitle, note) {
        if (noteTitle.length == 0 && note.length == 0) {
            var toast = this.toastCtrl.create({
                message: 'Please enter all details',
                duration: 1500,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });  
            toast.present();
        }
        else {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var today = new Date();
            var dd = today.getDate();
            var mm = monthNames[today.getMonth()];
            var yyyy = today.getFullYear();
            var dateCreated = mm + ' ' + dd + ', ' + yyyy;
            this.notesRef.push({
                noteTitle: noteTitle,
                note: note,
                dateCreated: dateCreated
            });
            this.navCtrl.pop();
            var toast = this.toastCtrl.create({
                message: 'Note added successfully!',
                duration: 1000,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        }
    };
    AddNotesPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Tabs */])
    ], AddNotesPage.prototype, "tabRef", void 0);
    AddNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/add-notes/add-notes.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Add Notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-card padding>\n		<ion-item>\n			<input #noteTitle type="text" name="note" placeholder="Title">\n	  </ion-item>\n\n	  <hr>\n	  \n	  <ion-item>\n	  	<textarea #note placeholder="Note"></textarea>\n	  </ion-item>\n\n	  <hr>\n	  \n	  <ion-item>\n		  <button color="dark" ion-button full (click)="addNote(noteTitle.value,note.value)">Go!</button>	\n	  </ion-item>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/add-notes/add-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], AddNotesPage);
    return AddNotesPage;
}());

//# sourceMappingURL=add-notes.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArchivePage = /** @class */ (function () {
    function ArchivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArchivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArchivePage');
    };
    ArchivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archive',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/archive/archive.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>Archive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/archive/archive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ArchivePage);
    return ArchivePage;
}());

//# sourceMappingURL=archive.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditNotesPage = /** @class */ (function () {
    function EditNotesPage(navCtrl, navParams, globalService, db, actionSheetCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.key = '';
        this.noteTitle = '';
        this.note = '';
        this.dateCreated = '';
        this.userInfo = {};
        this.userInfo = this.globalService.userInfo;
        this.key = this.globalService.noteKey.key;
        this.noteTitle = this.globalService.noteKey.noteTitle;
        this.note = this.globalService.noteKey.note;
        this.dateCreated = this.globalService.noteKey.dateCreated;
        this.notesRef = db.list('notes/' + this.userInfo.userId, function (ref) { return ref.orderByKey().equalTo(_this.key); });
        this.notes = this.notesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    EditNotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditNotesPage');
    };
    EditNotesPage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    EditNotesPage.prototype.updateNote = function (key, noteTitle, note) {
        this.notesRef.set(key, {
            noteTitle: noteTitle,
            note: note,
            dateCreated: this.dateCreated
        });
        var toast = this.toastCtrl.create({
            message: 'Note updated successfully.',
            duration: 1500,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
        this.navCtrl.pop();
    };
    EditNotesPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        _this.notesRef.set(_this.key, {
                            dateCreated: "",
                            noteTitle: "",
                            note: ""
                        });
                        _this.navCtrl.pop();
                        var toast = _this.toastCtrl.create({
                            message: 'Note removed successfully.',
                            duration: 4000,
                            position: 'bottom',
                            showCloseButton: true,
                            closeButtonText: 'Undo',
                        });
                        toast.onDidDismiss(function (data, role) {
                            if (role == "close") {
                                _this.notesRef.set(_this.key, {
                                    dateCreated: _this.dateCreated,
                                    noteTitle: _this.noteTitle,
                                    note: _this.note
                                });
                            }
                            else {
                                _this.notesRef.remove(_this.key);
                            }
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Share',
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Add Another User',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/edit-notes/edit-notes.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button (click)="presentActionSheet()" ion-button icon-right clear small><ion-icon name="md-more"></ion-icon></button>\n    </ion-buttons>\n    <ion-title *ngFor="let note of notes | async">\n    	{{note.noteTitle}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-card padding *ngFor="let note of notes | async">\n		<ion-item>\n			<ion-input #updatedNoteTitle [value]="note.noteTitle" ></ion-input>\n		</ion-item>\n		<hr>\n		<ion-item>\n			<ion-textarea #updatedNote [value]="note.note" ></ion-textarea>\n		</ion-item>		\n\n		<ion-item>\n			<button ion-button full (click)="updateNote(note.key,updatedNoteTitle.value,updatedNote.value)" color="dark">GO!</button>\n		</ion-item>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/edit-notes/edit-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditNotesPage);
    return EditNotesPage;
}());

//# sourceMappingURL=edit-notes.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		487,
		6
	],
	"../pages/add-notes/add-notes.module": [
		488,
		5
	],
	"../pages/archive/archive.module": [
		489,
		4
	],
	"../pages/edit-notes/edit-notes.module": [
		490,
		3
	],
	"../pages/intro/intro.module": [
		491,
		2
	],
	"../pages/notes/notes.module": [
		492,
		1
	],
	"../pages/star/star.module": [
		493,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/intro/intro.html"*/'<ion-content>\n\n  <ion-slides pager="true" parallax="true" padding style="background: linear-gradient(135deg, #FF4B2B, #FF416C);">\n\n    <ion-slide>\n      <h1>Welcome to</h1>\n      <h1 id="title">\n        <b>\n          <i>RemarqueIT !</i>\n        </b>\n      </h1>\n    </ion-slide>\n\n    <ion-slide>\n      <h1>Get started now!</h1>\n      <button ion-button color="dark" small (tab)="goToHome()">\n        Start using the app\n      </button>\n\n      <p style="position: fixed;bottom: 25px;text-align: center;">\n        <i>Handcrafted</i> with <ion-icon name="md-heart"></ion-icon> by <b><i>Mohd Hamza Suhail</i></b>\n      </p>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarPage = /** @class */ (function () {
    function StarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StarPage');
    };
    StarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-star',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/star/star.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>Star</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/star/star.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StarPage);
    return StarPage;
}());

//# sourceMappingURL=star.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_notes_add_notes__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_edit_notes_edit_notes__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_archive_archive__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_star_star__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_global_global__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_swipe_all__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { TabsPage } from '../pages/tabs/tabs';











var firebaseAuth = {
    apiKey: "AIzaSyArzXdjt5dRT9NTGSo_cET8MHy-Dg95mjU",
    authDomain: "todolist-ionic-app.firebaseapp.com",
    databaseURL: "https://todolist-ionic-app.firebaseio.com",
    projectId: "todolist-ionic-app",
    storageBucket: "todolist-ionic-app.appspot.com",
    messagingSenderId: "673911461940"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_notes_add_notes__["a" /* AddNotesPage */],
                // TabsPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_edit_notes_edit_notes__["a" /* EditNotesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_archive_archive__["a" /* ArchivePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_star_star__["a" /* StarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_swipe_all__["a" /* IonicSwipeAllModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    iconMode: 'md',
                    tabsPlacement: 'bottom',
                    menuType: 'overlay',
                    tabsLayout: 'title-hide',
                    tabsHighlight: true,
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-notes/add-notes.module#AddNotesPageModule', name: 'AddNotesPage', segment: 'add-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/archive/archive.module#ArchivePageModule', name: 'ArchivePage', segment: 'archive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-notes/edit-notes.module#EditNotesPageModule', name: 'EditNotesPage', segment: 'edit-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/star/star.module#StarPageModule', name: 'StarPage', segment: 'star', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_notes_add_notes__["a" /* AddNotesPage */],
                // TabsPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_edit_notes_edit_notes__["a" /* EditNotesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_archive_archive__["a" /* ArchivePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_star_star__["a" /* StarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.introView = {
            firstVisit: localStorage.getItem("firstVisit")
        };
        this.userInfo = {
            status: localStorage.getItem("status"),
            userId: localStorage.getItem("userId"),
            userName: localStorage.getItem("userName"),
            userNumber: localStorage.getItem("userNumber"),
            userEmail: localStorage.getItem("userEmail"),
            userGender: localStorage.getItem("userGender")
        };
        this.noteKey = {
            key: localStorage.getItem("key"),
            noteTitle: localStorage.getItem("noteTitle"),
            note: localStorage.getItem("note"),
            dateCreated: localStorage.getItem("dateCreated")
        };
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archive_archive__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__archive_archive__["a" /* ArchivePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Notes" tabIcon="md-list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Chat" tabIcon="md-chatboxes"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notes_notes__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_notes_notes__["a" /* NotesPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/app/app.html"*/'<ion-menu type="overlay" [content]="content" id="menu-bar">\n    <ion-header id="menu-header">\n        <h2>\n            <i>RemarqueIt</i>\n        </h2>\n    </ion-header>\n    <ion-content padding style="background-color: #eee;">\n        <ion-list>\n            \n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-create"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Notes</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-list-box"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>List</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-archive"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Archive</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-star"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Starred</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-help-circle"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Help</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-paper"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Feedback</h4>                    \n                </ion-col>\n            </ion-row>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_notes_edit_notes__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams, db, globalService, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userInfo = {};
        this.message = '';
        this.userInfo = this.globalService.userInfo;
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage.prototype.ionViewDidEnter = function () {
        this.userInfo = this.globalService.userInfo;
        this.notesRef = this.db.list('notes/' + this.globalService.userInfo.userId);
        this.notes = this.notesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    NotesPage.prototype.swipeLeft = function () {
        console.log('Swipe Left');
    };
    NotesPage.prototype.swipeRight = function () {
        console.log('Swipe Right');
    };
    NotesPage.prototype.goToAddNotes = function () {
        var _this = this;
        if (this.globalService.userInfo.status == 'true') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__["a" /* AddNotesPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Please login to add notes.',
                duration: 1000,
                position: 'bottom',
            });
            toast.onDidDismiss(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
            });
            toast.present();
        }
    };
    NotesPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
    };
    NotesPage.prototype.editNotes = function (key, noteTitle, note, dateCreated) {
        this.globalService.noteKey.key = key;
        localStorage.setItem("key", key);
        this.globalService.noteKey.noteTitle = noteTitle;
        localStorage.setItem("noteTitle", noteTitle);
        this.globalService.noteKey.note = note;
        localStorage.setItem("note", note);
        this.globalService.noteKey.dateCreated = dateCreated;
        localStorage.setItem("dateCreated", dateCreated);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_notes_edit_notes__["a" /* EditNotesPage */]);
    };
    NotesPage.prototype.deleteNote = function (key, noteTitle, note, dateCreated) {
        var _this = this;
        this.notesRef.set(key, {
            noteTitle: "",
            note: ""
        });
        var toast = this.toastCtrl.create({
            message: 'Note removed successfully.',
            duration: 4000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Undo',
        });
        toast.onDidDismiss(function (data, role) {
            if (role == "close") {
                _this.notesRef.set(key, {
                    noteTitle: noteTitle,
                    note: note
                });
            }
            else {
                _this.notesRef.remove(key);
            }
        });
        toast.present();
    };
    NotesPage.prototype.noteOptions = function (key) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        // this.notesRef.set(this.key, {
                        //   noteTitle : "",
                        //   note      : ""
                        // });
                        // this.navCtrl.pop();
                        var toast = _this.toastCtrl.create({
                            message: 'Note removed successfully.',
                            duration: 4000,
                            position: 'bottom',
                            showCloseButton: true,
                            closeButtonText: 'Undo',
                        });
                        toast.onDidDismiss(function (data, role) {
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
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Share',
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Add Another User',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/notes/notes.html"*/'<ion-header no-border>\n\n  <ion-toolbar>\n  	<button class="home-menu" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Note</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (tap)="goToAccount()"><ion-icon name="md-contact"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-fab bottom right>\n	  	<button ion-fab color="dark"><ion-icon name="md-add"></ion-icon></button>\n	  	<ion-fab-list side="top">\n	    	<button ion-fab (click)="goToAddNotes()" ><ion-icon name="md-create"></ion-icon></button>\n	    	<button ion-fab><ion-icon name="md-list"></ion-icon></button>\n	 	    <button ion-fab><ion-icon name="md-list-box"></ion-icon></button>\n	  	</ion-fab-list>\n	</ion-fab>\n\n	<div *ngIf="userInfo.status == \'true\'">\n		\n		<div *ngFor="let note of notes | async">\n			\n			<ion-card *ngIf="note.note != \'\'" swipeAll (swipeleft)="swipeLeft()" (swiperight)="swipeRight()">\n				<ion-list>\n				    <ion-item style="background-color: transparent;" (click)="editNotes(note.key,note.noteTitle,note.note,note.dateCreated)" (press)="noteOptions(note.key)">\n				    	<p>{{note.dateCreated}}</p><hr>\n				    	<h2>{{note.noteTitle}}</h2>\n						<p>{{note.note}}</p>\n				    </ion-item>\n				</ion-list>\n			</ion-card>\n\n		</div>\n\n	</div>\n\n	<div *ngIf="userInfo.status == \'false\'">\n		<ion-card>\n			<ion-row>\n				<ion-col col-12 style="text-align: center;">\n					<h1><ion-icon color="custom" name="md-alert"></ion-icon></h1>\n					<h2>Please <b style="color: #F44336;" (tap)="goToAccount()">login</b> to see your notes.</h2>\n				</ion-col>\n			</ion-row>\n		</ion-card>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map