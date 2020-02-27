import { Component, OnInit } from '@angular/core';
import { Account, AccountsService } from '../@shared/accounts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private accountsService: AccountsService) {

     }

  ngOnInit() {
  }

  signUp(usernameSignUp:string, passwordSignUp:string){
    this.accountsService.signUp(usernameSignUp, passwordSignUp);
  }
}