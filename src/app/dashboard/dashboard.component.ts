import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @Input() smoothie :string;
  nom = 'Rachel';

  constructor() { 
  };
  private _title;
  subTitle: string;


  ngOnInit() {
    this.setSubTitle();
    this.title ='Bienvenue sur Smoothie en FOLIE';
    // this.smoothie ='avocat carotte';
  };

  set title(mTitle:string){
    this._title = mTitle;
  }
  get title():string{
    return this._title;
  }

  setSubTitle():void{
    this.subTitle = 'la référence pour vos smoothies';
  }
}