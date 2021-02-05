import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incomedetails2',
  templateUrl: './incomedetails2.component.html',
  styleUrls: ['./incomedetails2.component.css']
})
export class Incomedetails2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  check:boolean=true;
  onClick()
  {
    this.check=false;
  }
}
