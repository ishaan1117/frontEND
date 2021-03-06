import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanDetails } from '../model/LoanDetails';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  ld=new LoanDetails()
  loanForm:FormGroup;

  uname = "[a-zA-Z]+";
  number = "[0-9]+";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  pass="^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])"



  error_messages = {

    'fname': [
      { type: 'required', message: 'First Name is required.' },
      { type: 'pattern', message: 'First Name should not contain numbers and Special characters' },
      { type: 'maxlength', message: 'Maximum 15 letters can be Taken' },
      { type: 'minlength', message: 'Minimum 3 letters are Required' }
    ],
    'lname': [
      { type: 'required', message: 'Last Name is required.' },
    ],
    'mo': [
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'maxlength', message: 'Mobile Number Should be of 10 digit' },
      { type: 'minlength', message: 'Mobile Number Should be of 10 digit' },
      { type: 'pattern', message: 'Moible Number Should only contain numbers' }
    ],
    'pincode': [
      { type: 'required', message: 'Pincode is required.' },
      { type: 'minlength', message: 'Min Length is 6 digit long ' },
      { type: 'maxlength', message: 'Max Length is 6 digit long ' },
      { type: 'pattern', message: 'Pincode Should only contain numbers' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      {type:  'pattern',  message: 'Invalid Email'}
    ],
    'pass':[
      {type:'required',message:'Password is Required'},
      {type:'pattern', message:'Password must contain special character and  numbers'},
      {type:'minlength',message:'Min Length is 8 characters long'},
      {type:'maxlength',message:'Max length is 15 characters long'}
    ]
  }

  constructor(public formBuilder: FormBuilder) { 

    this.loanForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([

        Validators.required, Validators.pattern(this.uname), Validators.minLength(3), Validators.maxLength(15)
      ])),

      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),

      mo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(this.number)
      ])),

      email: new FormControl('', Validators.compose([
        Validators.required,Validators.pattern(this.emailPattern)
      ])),

      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,15}')
      
      ])),
      pincode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(this.number)
      ])),



    })

  }

  ngOnInit(): void {
  }
  check:boolean=true;
  onClick()
  {
    this.check=false;
  }
}
