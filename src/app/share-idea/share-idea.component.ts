import { Component, OnInit } from '@angular/core';
import { Idea, IdeasService } from '../@shared/ideas.service';
import { Account, AccountsService } from '../@shared/accounts.service';

@Component({
  selector: 'app-share-idea',
  templateUrl: './share-idea.component.html',
  styleUrls: ['./share-idea.component.css']
})

export class ShareIdeaComponent implements OnInit {
  //connectedAccount:Account=null;

  constructor(
    private ideasService: IdeasService,
    //private accountsService: AccountsService
  ) {

   }

  ngOnInit() {
    //this.connectedAccount=this.accountsService.getConnectedAccount();
  }
  
  addIdea(ideaTitle:string, ideaDescription:string){
    this.ideasService.addIdea(ideaTitle, ideaDescription);
  }
}