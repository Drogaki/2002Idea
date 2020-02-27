import { Component, OnInit } from '@angular/core';
import { Account, AccountsService } from '../@shared/accounts.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private accountsService: AccountsService) {

     }

  ngOnInit() {
   
  }

  logIn(usernameLogIn:string, passwordLogIn:string){
    this.accountsService.logIn(usernameLogIn, passwordLogIn);
  }

}