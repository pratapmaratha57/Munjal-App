import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 
registerform:any=FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerform= new FormGroup(
      {
        uname: new FormControl(),
         pwd: new FormControl(),
        fname: new FormControl(),
        lname: new FormControl(),
        types: new FormControl(),
        roles: new FormControl(),
        email: new FormControl(),

      })
  }
  registerUser(){
    let body={
       username: this.registerform.value.uname,
         password: this.registerform.value.pwd,
        fristname: this.registerform.value.fname,
        lastname: this.registerform.value.lname,
        type: this.registerform.value.types,
        role: this.registerform.value.roles,
        email: this.registerform.value.email,
    }
    console.log(body);
   
  }
}

