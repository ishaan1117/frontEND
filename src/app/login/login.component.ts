import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/LoginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  

  

  ngOnInit(): void {
  }
 
 myLoginPicture:string="./assets/images/LoginPicture.jpg";
}
