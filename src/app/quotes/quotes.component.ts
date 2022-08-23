import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotation, QuotationEvent,EventType } from '../models/quotation';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent{
  constructor(){
    this.quotes=[]
  }

  @Input() quotes:Quotation[]
  @Output() quotationEvent = new EventEmitter<QuotationEvent>();

  editQuotation:Quotation = {id:0,author:'',sentence:'',votes:0}

  addVote(quotation:Quotation, value:number){
    quotation.votes=value
    this.quotationEvent.emit({quotation,type:EventType.Update})
  }

  remove(quotation:Quotation){
    this.quotationEvent.emit({quotation,type:EventType.Remove})
  }

  edit(quotation:Quotation){
    this.onSwitchForm()
    this.editQuotation=quotation
  }

  update(quotation:Quotation){
    this.onSwitchForm()
    this.quotationEvent.emit({quotation,type:EventType.Update})
  }

  showFlag=true;
  onSwitchForm():void{
    this.showFlag = !this.showFlag;
  }


}
