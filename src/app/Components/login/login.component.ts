import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginform:any=FormGroup;
 istoken:any;
 temp:any;
 isvendorid:any;
 headers = new Headers();
 obj:any;
  constructor(public router:Router,public srv:ServiceService) { }
  ngOnInit(): void {
    // sessionStorage.setItem("VendorID",this.isvendorid);
  this.loginform=new FormGroup({
   uid:new FormControl('',[Validators.required]),
   pwd:new FormControl('',[Validators.required]),
   Suppradio:new FormControl('',[Validators.required]),
   Adminradio:new FormControl('',[Validators.required])
  })
  }
 
  loginUser(){
    let body={
      username:this.loginform.value.uid,
      password:this.loginform.value.pwd,
      sradio:this.loginform.value.Suppradio,
      aradio:this.loginform.value.Adminradio
    }
    console.log(body);
    this.srv.login(body).subscribe((data):any=>{
      // debugger;
      // console.log(data);
      this.temp=data;
      console.log(this.temp);
      this.obj=JSON.parse(this.temp);
      console.log(typeof(this.obj));
      this.isvendorid=this.obj.UserId;
      sessionStorage.setItem("VendorID",this.isvendorid);
      console.log("VendorID: "+sessionStorage.getItem("VendorID"));
      
      if(this.isvendorid!=undefined){
        localStorage.setItem("token",this.obj.Token);
        console.log("Response OF LoginAPI :<br/>"+this.obj.Token);
        // this.headers.append('token', this.temp);
        if(localStorage.getItem("token")){
          this.router.navigate(['/home']);
        }
      }
      else{
        alert("Please enter Valid User !!!");
      }
     })
      
  // if(!this.loginform.invalid){
  //   localStorage.setItem("token",body.uid);
  //   this.istoken=localStorage.getItem("token");
  //   if(this.istoken){
  //   this.router.navigate(['/home']);
  //   alert("token Created");
  //   console.log(this.istoken);
  // }
  // }
  // else {
  //   alert("Please enter Valid Credentials !!!");
  // }
    
    //this.router.navigate(['/home']);
}
}

