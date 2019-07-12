import { Component, OnInit, Input } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @Input() smoothie :string;
  nom = 'Rachel MARTIN';
  // date= new Date();
  // date= Date.now();
  // console.log(date);
  
  private _title;
  subTitle: string;

  ngOnInit() {
}
}