import { Component, OnInit } from '@angular/core';
import { Idea, IdeasService } from '../@shared/ideas.service';

@Component({
  selector: 'app-show-ideas',
  templateUrl: './show-ideas.component.html',
  styleUrls: ['./show-ideas.component.css']
})
export class ShowIdeasComponent implements OnInit {

  ideas:Array<Idea>;

  constructor(
    private ideasService: IdeasService) {
   }

  ngOnInit() {
    this.ideasService.loadIdeas();
    this.ideas = this.ideasService.getIdeas();
  }

  upvote(aTitle:string){
    this.ideasService.upvote(aTitle);
  }

  downvote(aTitle:string){
    this.ideasService.downvote(aTitle);
  }

  clearIdeas(){
    this.ideasService.clearIdeas();
    this.ideas=this.ideasService.getIdeas();
  }
}