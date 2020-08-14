import { Component, OnInit } from '@angular/core';
import { User } from './userdetils';
import { Router } from '@angular/router';
import {ServiceappService} from '../serviceapp.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {


   form = new FormGroup({

   fName : new FormControl('', Validators.required),
   lName : new FormControl('', Validators.required),
   emailId : new FormControl('', [Validators.required, Validators.email]),
   mobileNo : new FormControl('', [Validators.required, Validators.minLength(10)]),
   zipcode : new FormControl('', [Validators.required, Validators.minLength(6)]),
   password: new FormControl('', Validators.compose([Validators.required,
   Validators.minLength(8), Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),])),
  
   })

   
  

  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem; 

  constructor(private router:Router, public Serviceapp: ServiceappService) {}

  public user: User ={
    
    firstname: '',
    lastname: '',
    password: '',
    confrimpassword: '',
    email: '',
    mobile: '',
    zip: '',

  };




  

  ngOnInit(): void {

    // this.form = new FormGroup({
      
    //   "password": new FormControl(null,[Validators.required, this.passwordCheck]),
    //   "conconfrim": new FormControl(null,[Validators.required, this.passwordCheck])

    // })
    
  }
 
    Submit() {
    console.log("User Input Message >>>>>",this.user);
    this.Serviceapp.newmy_array.push(this.user);
    console.log("Login Array Components >>>>>",this.Serviceapp.newmy_array);
    this.user={
      firstname: "",
      lastname: "",
      password: "",
      confrimpassword:"",
      email:"",
      mobile:"",
      zip:""  
    }
}


    passwordCheck(control){
        if(control.value !=null){
          var conPass = control.value;
          var pass = control.root.get('password');
          if(pass){
            var password = pass.value
            if(conPass !== "" && password !== ""){
              if(conPass !== password){
                return{
                  passwordValidity:true
                }
              }
              else {
                return null 
              }
            }
          }
        }
    }

    btnClick= function () {
      this.router.navigateByUrl('view');
}



}
