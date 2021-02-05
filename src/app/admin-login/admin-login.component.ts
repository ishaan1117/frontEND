import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  Aform=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
  })
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
