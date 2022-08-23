import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title:string=''
  author:string=''


  constructor() { }

  ngOnInit(): void {
    this.title="Aplikacja z cytatami w angularze"
    this.author="Bartłomiej Wojtasiński"
  }

  showFlag=false;
  onSwitchForm():void{
    this.showFlag = !this.showFlag;
  }

}
