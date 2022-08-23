import { Component } from '@angular/core';
import { DataService } from './data.service';
import { EventType, Quotation, QuotationEvent } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  quotes: Quotation[]=[]

  constructor(private data:DataService){

  }
  ngOnInit(){
    this.quotes = this.data.getQuotes();
  }

  bestQuotes(){
    return this.quotes.filter(x=>x.votes>0)
  }

  worstQuotes(){
    return this.quotes.filter(x=>x.votes<0);
  }

  handleQuotationEvent(quotationEvent:QuotationEvent){
    switch(quotationEvent.type){

      case EventType.Add:{
        this.data.addQuote(quotationEvent.quotation)
        break;
      }

      case EventType.Remove:{
        this.data.removeQuote(quotationEvent.quotation)
        break;
      }

      case EventType.Update:{
        this.data.updateQuote(quotationEvent.quotation)
        break;
      }
    }

    //refresh data
    this.quotes = this.data.getQuotes();
  }

}
