import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vote-buttons-component',
  templateUrl: './vote-buttons-component.component.html',
  styleUrls: ['./vote-buttons-component.component.css']
})
export class VoteButtonsComponentComponent {

  constructor(){
    this.votes=0
  }

  @Input() votes:number
  @Output() exportVote = new EventEmitter<number>();

  vote(value:number){
    this.exportVote.emit(this.votes+=value)
    this.votes=0;
  }

}
