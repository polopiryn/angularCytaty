import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType, Quotation, QuotationEvent } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  showForm=false;
  onSwitchForm():void{
    this.showForm = !this.showForm;
  }

  quotation:Quotation = {id:0, author:'', sentence:'', votes:0 }

  @Output() newQuotation = new EventEmitter<QuotationEvent>();

  addQuotation(){
    this.newQuotation.emit({quotation:this.quotation,type:EventType.Add})
    this.quotation = {id:0, author:'', sentence:'', votes:0 }
  }
}
