import { Component, Input, OnInit } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  constructor(){
    this.quotes=[]
    this.title=''
  }

  @Input()
  quotes:Quotation[];

  @Input()
  title:string;

}
