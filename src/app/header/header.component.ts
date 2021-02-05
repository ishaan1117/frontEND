import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isImage:boolean=true;

  ngOnInit(): void {
  }
  myImage:string="./assets/images/860287-homeloan-istock-081919.jpg";
  myLogo:string="./assets/images/Logo.jpeg";
  onClick()
  {
    if(this.isImage)
    {
      this.isImage=false;
    }
  }
  onClickHome()
  {
    this.isImage=true
  }
}
