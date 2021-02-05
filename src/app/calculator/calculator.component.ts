import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  monthlyincome:any;
  eligibility:any;
  flag: boolean=false;
  cal()
  {
  this.eligibility=60*(0.6*this.monthlyincome);
  this.eligibility=Math.round(this.eligibility);
  this.flag=true;
  
}
}
