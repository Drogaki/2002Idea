import { Injectable } from '@angular/core';
import { Account, AccountsService } from './accounts.service';

@Injectable()
export class IdeasService {
  ideas:Array<Idea>;
  totalIdeas:number;

  constructor(
  private accountsService: AccountsService) {
    this.ideas = [];
    this.totalIdeas=0;
    this.loadIdeas;
   }

  addIdea(ideaTitle:string, ideaDescription:string, ideaAuthor:string){
    if (ideaTitle&&ideaDescription){
      const id = this.calcNewIndex()+1;
      let anAuthor:string=this.accountsService.getConnectedAccount().username;
      let anIdea:Idea= {id: id, title: ideaTitle, description: ideaDescription, karma: 1, author: anAuthor};
      this.ideas.push(anIdea);
      this.storeIdeas(this.ideas);
    }
  }

  storeIdeas(data:Array<Idea>){
    let jsonIdeas=JSON.stringify(this.ideas);
    localStorage.setItem("Ideas", jsonIdeas);
    console.log("Ideas saved");
  }

  loadIdeas() {
    let theJsonIdeas=localStorage.getItem("Ideas");
    //!!Différent de nul| !Est nul
    if(!!theJsonIdeas ) {
      this.ideas = (JSON.parse(theJsonIdeas));
      this.totalIdeas = this.ideas.length;
    }
  }

  clearIdeas(){
    this.ideas=[];
    localStorage.removeItem('Ideas');
  }

  getIdeas(){
    return this.ideas;
  }

  getIdea(theID:number){
    return this.ideas.find(idea => idea.id===theID);
  }

  upvote(theID:number){
    this.getIdea(theID).karma+=1;
    this.storeIdeas(this.ideas);
  } 

  downvote(theID:number){
    this.getIdea(theID).karma-=1;
    this.storeIdeas(this.ideas);
  } 

  private calcNewIndex() { 
    const index = this.ideas.map(i => i.id);
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

export class Idea {
    id:number;
    title:string;
    description:string;
    karma:number;
    author:string;
}