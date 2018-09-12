webpackJsonp([7],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(83);
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
    AccountPage.prototype.login = function (number, password) {
    };
    AccountPage.prototype.register = function (name, number, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name && number && email && password)) return [3 /*break*/, 6];
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
                        this.globalService.userInfo.status = "loggedIn";
                        this.globalService.userInfo.userId = this.fire.auth.currentUser.uid;
                        this.globalService.userInfo.userName = name;
                        this.globalService.userInfo.userEmail = email;
                        this.globalService.userInfo.userNumber = number;
                        this.userRef.push({
                            userId: this.fire.auth.currentUser.uid,
                            userName: name,
                            userEmail: email,
                            userNumber: number
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
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	\n	<div *ngIf="this.fire.auth.currentUser">\n\n		<ion-card padding *ngIf="showRegisterBtn">\n			<ion-row>\n				<ion-col col-12>\n					{{userInfo.userName}} <br>\n					{{userInfo.userEmail}} <br>\n					{{userInfo.userNumber}} \n				</ion-col>\n			</ion-row>\n		</ion-card>	\n	</div>\n\n	<div *ngIf="!this.fire.auth.currentUser">\n		<ion-row padding>\n			<ion-col col-6 no-padding (tap)="showLogin()">\n				<button ion-button full color="dark">Login</button>\n			</ion-col>\n\n			<ion-col col-6 no-padding (tap)="showRegister()">\n				<button ion-button full color="light">Register</button>\n			</ion-col>\n		</ion-row>\n\n		<ion-card padding *ngIf="showRegisterBtn">\n			<ion-row>\n				<ion-col col-12>\n					\n					<h1 style="color:#F44336; text-align: center;"><b><i>Register</i></b></h1>\n					\n					<ion-item>\n						<input type="text" #userName placeholder="Name">\n					</ion-item>\n\n					<ion-item>\n						<input type="number" #userNumber placeholder="Mobile Number">\n					</ion-item>\n\n					<ion-item>\n						<input type="email" #userEmail placeholder="Email">\n					</ion-item>\n\n					<ion-item>\n						<input type="password" #userPassword placeholder="Password">\n					</ion-item>\n\n					<ion-item>\n						<button ion-button full round color="custom" (tap)="register(userName.value,userNumber.value,userEmail.value,userPassword.value)">GO!</button>\n					</ion-item>\n\n				</ion-col>\n			</ion-row>\n		</ion-card>\n\n		<ion-card padding *ngIf="showLoginBtn">\n			<ion-row>\n				<ion-col col-12>\n					\n					<h1 style="color:#F44336; text-align: center;"><b><i>Login</i></b></h1>\n\n					<ion-item>\n						<input type="number" #loginNumber placeholder="Mobile Number">\n					</ion-item>\n\n					<ion-item>\n						<input type="password" #loginPassword placeholder="Password">\n					</ion-item>\n\n					<ion-item>\n						<button ion-button full round color="custom" (tap)="login(loginNumber.value,loginPassword.value)" >GO!</button>\n					</ion-item>\n\n				</ion-col>\n			</ion-row>\n		</ion-card>\n		\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
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
    function AddNotesPage(navCtrl, navParams, db, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.notesRef = db.list('notes/');
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
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            var dateCreated = dd + '/' + mm + '/' + yyyy;
            this.notesRef.push({
                noteTitle: noteTitle,
                note: note,
                dateCreated: dateCreated
            });
            this.navCtrl.parent.select(0);
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
            selector: 'page-add-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/add-notes/add-notes.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>add notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-card padding>\n		<ion-item>\n			<input #noteTitle type="text" name="note" placeholder="Title">\n	  </ion-item>\n\n	  <hr>\n	  \n	  <ion-item>\n	  	<textarea #note placeholder="Note"></textarea>\n	  </ion-item>\n\n	  <hr>\n	  \n	  <ion-item>\n		  <button color="dark" ion-button full (click)="addNote(noteTitle.value,note.value)">Go!</button>	\n	  </ion-item>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/add-notes/add-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddNotesPage);
    return AddNotesPage;
}());

//# sourceMappingURL=add-notes.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
            selector: 'page-archive',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/archive/archive.html"*/'<!--\n  Generated template for the ArchivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>archive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/archive/archive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ArchivePage);
    return ArchivePage;
}());

//# sourceMappingURL=archive.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(83);
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
        this.key = this.globalService.noteKey.key;
        this.noteTitle = this.globalService.noteKey.noteTitle;
        this.note = this.globalService.noteKey.note;
        this.dateCreated = this.globalService.noteKey.dateCreated;
        this.notesRef = db.list('notes/', function (ref) { return ref.orderByKey().equalTo(_this.key); });
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
            note: note
        });
        var toast = this.toastCtrl.create({
            message: 'Note updated successfully.',
            duration: 1500,
            position: 'bottom'
        });
        // toast.onDidDismiss(() => {
        // });
        toast.present();
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
            selector: 'page-edit-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/edit-notes/edit-notes.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="goToHome()" ion-button icon-left clear small><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button (click)="presentActionSheet()" ion-button icon-right clear small><ion-icon name="md-more"></ion-icon></button>\n    </ion-buttons>\n    <ion-title *ngFor="let note of notes | async">\n    	{{note.noteTitle}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-card padding *ngFor="let note of notes | async">\n		<ion-item>\n			<ion-input #updatedNoteTitle [value]="note.noteTitle" ></ion-input>\n		</ion-item>\n		<hr>\n		<ion-item>\n			<ion-textarea #updatedNote [value]="note.note" ></ion-textarea>\n		</ion-item>		\n\n		<ion-item>\n			<button ion-button full (click)="updateNote(note.key,updatedNoteTitle.value,updatedNote.value)" >GO!</button>\n		</ion-item>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/edit-notes/edit-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditNotesPage);
    return EditNotesPage;
}());

//# sourceMappingURL=edit-notes.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/intro/intro.html"*/'<ion-content>\n  <ion-slides pager="true" parallax="true" padding>\n\n    <ion-slide>\n      <img src="assets/img1.svg">\n      <h1>Welcome to my app!</h1>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img2.svg">\n      <h1>All of the features</h1>\n      <p>Here\'s what you can do with the app...</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img3.svg">\n      <h1>Get started now!</h1>\n      <button ion-button outline small (click)="navHome()">\n        Start using the app\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_notes_edit_notes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(83);
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
    function NotesPage(navCtrl, navParams, db, globalService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.globalService = globalService;
        this.toastCtrl = toastCtrl;
        this.notesRef = db.list('notes');
        this.notes = this.notesRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage.prototype.goToAddNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_notes_add_notes__["a" /* AddNotesPage */]);
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
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/notes/notes.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    	note\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-fab bottom right>\n	  <button ion-fab color="light"><ion-icon name="md-add"></ion-icon></button>\n	  <!-- <ion-fab-list side="top" color="dark">\n	    <button ion-fab><ion-icon name="md-camera"></ion-icon></button>\n	  </ion-fab-list> -->\n	  <ion-fab-list side="left">\n	    <button ion-fab (click)="goToAddNotes()" ><ion-icon name="md-create"></ion-icon></button>\n	    <button ion-fab><ion-icon name="md-list"></ion-icon></button>\n	    <!-- <button ion-fab><ion-icon name="md-microphone"></ion-icon></button> -->\n	  </ion-fab-list>\n	</ion-fab>\n\n	<div *ngFor="let note of notes | async">\n		<ion-card *ngIf="note.note">\n\n			<ion-list>\n			  <ion-item-sliding #item>\n			    \n			    <ion-item (click)="editNotes(note.key,note.noteTitle,note.note,note.dateCreated)">\n			    	<h2>{{note.noteTitle}}</h2>\n						<hr>\n						<p>{{note.note}}</p>\n			    </ion-item>\n			    \n			    <ion-item-options side="left">\n			      <button ion-button color="danger" (click)="deleteNote(note.key,note.noteTitle,note.note,note.dateCreated)" style="width: 100px;"><ion-icon name="md-trash"></ion-icon> Delete</button>\n			    </ion-item-options>\n\n			    <ion-item-options side="right">\n			      <button ion-button (click)="addToArchive()" color="dark" style="width: 100px;"><ion-icon name="md-archive"></ion-icon> Archive</button>\n			      <button ion-button color="secondary" (click)="starNote()" style="width: 100px;"><ion-icon name="md-star"></ion-icon> Star</button>\n			      <button ion-button color="primary" (click)="shareNote()" style="width: 100px;"><ion-icon name="md-share"></ion-icon> Share</button>\n			    </ion-item-options>\n			  \n			  </ion-item-sliding>\n			</ion-list>\n\n		</ion-card>\n	</div>\n\n<!-- 	<ion-row no-margin>\n		<ion-col no-padding col-12 *ngFor="let note of notes | async">\n			<ion-card *ngIf="note.note" (click)="editNotes(note.key,note.noteTitle,note.note,note.dateCreated)">\n				<h2>{{note.noteTitle}}</h2>\n				<hr>\n				<p>{{note.note}}</p>\n			</ion-card>\n		</ion-col>\n	</ion-row> -->\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
            selector: 'page-star',template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/star/star.html"*/'<!--\n  Generated template for the StarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>star</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/star/star.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StarPage);
    return StarPage;
}());

//# sourceMappingURL=star.js.map

/***/ }),

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		483,
		6
	],
	"../pages/add-notes/add-notes.module": [
		484,
		5
	],
	"../pages/archive/archive.module": [
		485,
		4
	],
	"../pages/edit-notes/edit-notes.module": [
		486,
		3
	],
	"../pages/intro/intro.module": [
		487,
		2
	],
	"../pages/notes/notes.module": [
		488,
		1
	],
	"../pages/star/star.module": [
		489,
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_notes_add_notes__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_notes_edit_notes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_archive_archive__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_star_star__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_global_global__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_notes_edit_notes__["a" /* EditNotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_archive_archive__["a" /* ArchivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_star_star__["a" /* StarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_notes_edit_notes__["a" /* EditNotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_archive_archive__["a" /* ArchivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_star_star__["a" /* StarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(157);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/app/app.html"*/'<!-- <ion-menu type="overlay" [content]="content" id="menu-bar">\n    <ion-header id="menu-header">\n        <h2>\n            RemarqueIt\n        </h2>\n    </ion-header>\n    <ion-content padding style="background-color: #eee;">\n        <ion-list>\n            \n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-contact"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Account</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-create"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Notes</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-archive"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Archive</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-star"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Starred</h4>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <h4><ion-icon name="md-help-circle"></ion-icon></h4>\n                </ion-col>\n                <ion-col col-10>\n                    <h4>Help</h4>                    \n                </ion-col>\n            </ion-row>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav> -->\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archive_archive__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__star_star__ = __webpack_require__(159);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__archive_archive__["a" /* ArchivePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__star_star__["a" /* StarPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="3">\n  <ion-tab [root]="tab1Root" tabTitle="Notes" tabIcon="md-list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Archive" tabIcon="md-archive"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Star" tabIcon="md-star"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Account" tabIcon="md-contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/hamza/Local Disk/App Development/Ionic 3/ToDoList/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 83:
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
        this.userInfo = {
            status: localStorage.getItem("status"),
            userId: localStorage.getItem("userId"),
            userName: localStorage.getItem("userName"),
            userNumber: localStorage.getItem("userNumber"),
            userEmail: localStorage.getItem("userEmail"),
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

/***/ })

},[287]);
//# sourceMappingURL=main.js.map