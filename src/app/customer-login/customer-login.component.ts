import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLogInComponent implements OnInit{
  hide:boolean = true;
  logInForm!:FormGroup;
  validForm!:boolean;
  userDetail:User[]
  constructor(private router: Router,
              private formBuilder:FormBuilder,
              private userService:UserDataService,){}
  navigationArray: Array<{ label: string, link?: string }> = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'LogIn'
    }];            
  ngOnInit(): void {
    this.validForm=true
    this.logInForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ['', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}$/)]]
    })
  }
  
  get userFormControl(){
    return this.logInForm.controls;
  }

  onLogInUser(data:User):void{
    this.userService.getUserDetail().subscribe((userDetail)=>{
      this.userDetail = userDetail
      for(let user of this.userDetail){
        if(data.email === user.email && data.password === user.password){
          localStorage.setItem('User',JSON.stringify(user))
          if(user.catagory === 'buyer'){
            this.router.navigate(['/home'])
          }
          else{
            this.router.navigate(['/seller-product'])
          }
        }
        this.validForm=false
      }
    })
  }
}


