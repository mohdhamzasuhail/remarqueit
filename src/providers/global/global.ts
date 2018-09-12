import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  constructor() {}

  introView = {
    firstVisit: localStorage.getItem("firstVisit")
  };

  userInfo = {
    status     : localStorage.getItem("status"),
  	userId     : localStorage.getItem("userId"),
  	userName   : localStorage.getItem("userName"),
  	userNumber : localStorage.getItem("userNumber"),
    userEmail  : localStorage.getItem("userEmail"),
  	userGender : localStorage.getItem("userGender")
  };

  noteKey = {
  	key         : localStorage.getItem("key"),
  	noteTitle   : localStorage.getItem("noteTitle"),
    note        : localStorage.getItem("note"),
    dateCreated : localStorage.getItem("dateCreated")
  };

}
