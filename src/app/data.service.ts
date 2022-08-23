import { Injectable } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private quotes: Quotation[]

  constructor() {
    this.quotes= QUOTES
  }

  getQuotes():Quotation[]{
    return this.quotes;
  }

  updateQuote(quotation:Quotation){
    let oldQuotation = this.quotes.find(x=>x.id==quotation.id) as Quotation
    let index = this.quotes.indexOf(oldQuotation)
    this.quotes[index] = quotation;
  }

  removeQuote(quotation:Quotation){
    this.quotes=this.quotes.filter(x=>x.id!==quotation.id)
  }

  addQuote(quotation:Quotation){
    let lastId = Math.max.apply(null,this.quotes.map(x=>x.id))
    quotation.id=lastId+=1
    this.quotes.unshift(quotation)
  }
}
