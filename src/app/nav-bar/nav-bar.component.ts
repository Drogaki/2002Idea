import { Component, OnInit } from '@angular/core';
import { Account, AccountsService } from '../@shared/accounts.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  connected:boolean;
  connectedAccount:Account;

  constructor(
    private accountsService: AccountsService) {
      this.connected=false;
      this.connectedAccount=null;
     }

  ngOnInit() {
    console.log(this.accountsService.connected);
    this.connected=this.accountsService.connected;
    if(this.connected===true){
      this.connectedAccount=this.accountsService.connectedAccount;
    }
  }

  disconnect(){
    this.accountsService.disconnect();
    this.connected=this.accountsService.connected;
    this.connectedAccount=this.accountsService.connectedAccount;
  }
}