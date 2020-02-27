import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
  accounts:Array<Account>;
  totalAccounts:number;
  connected:boolean;
  connectedAccount:Account;

  constructor() {
    this.accounts = [];
    this.totalAccounts=0;
    this.connected=false;
    this.connectedAccount=null;
    this.loadAccounts();
  }

  logIn(usernameLogIn:string, passwordLogIn:string){
    if (usernameLogIn&&passwordLogIn){
      if (this.accounts.find(anAccount => anAccount.username===usernameLogIn)){
        if (this.accounts.find(anAccount => anAccount.password===passwordLogIn)){
            this.connected=true;
            this.connectedAccount=this.accounts.find(anAccount => anAccount.username===usernameLogIn);
            console.log("Connected on "+this.connectedAccount.username);
        }
        else{
          console.log("Wrong password");
        }
      }
      else{
        console.log("Cannot find username")
      }
    }
  }

  signUp(usernameSignUp:string, passwordSignUp:string){
  if (usernameSignUp&&passwordSignUp){
    const id = this.calcNewIndex()+1;
    let anAccount:Account={ id: id, username: usernameSignUp, password: passwordSignUp, karma: 1 };
    this.accounts.push(anAccount);
    this.storeAccounts(this.accounts);
    this.logIn(usernameSignUp, passwordSignUp);
    }
  }

  storeAccounts(data:Array<Account>){
    let jsonAccounts=JSON.stringify(this.accounts);
    localStorage.setItem("Accounts", jsonAccounts);
    console.log("Accounts saved");
  }

  disconnect(){
    this.connected=false;
    this.connectedAccount=null;
    console.log("Disconnected");
  }

  loadAccounts() {
    let theJsonAccounts=localStorage.getItem("Accounts");
    //!!Différent de nul| !Est nul
    if(!!theJsonAccounts ) {
      this.accounts = (JSON.parse(theJsonAccounts));
      this.totalAccounts = this.accounts.length;
      console.log("Les comptes"+this.accounts);
    }
  }

  clearAccounts(){
    this.accounts=[];
    localStorage.removeItem('Accounts');
  }

  getConnectedAccount(){
    return this.connectedAccount;
  }

  getConnected(){
    return this.connected;
  }

  private calcNewIndex() {
    const index = this.accounts.map(i => i.id);
    let maxID;
    if (index.length>0){
      maxID = Math.max(...index);
    }
    else{
      maxID=0;
    }
    return maxID;
  }
}

export class Account {
    id:number;
    username:string;
    password:string;
    karma:number;
}