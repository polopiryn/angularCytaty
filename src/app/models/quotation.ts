export interface Quotation{
  id:number,
  author:string;
  sentence:string;
  votes:number;
}

export interface QuotationEvent{
  quotation:Quotation
  type:EventType
}

export enum EventType{
  Add,
  Update,
  Remove
}
