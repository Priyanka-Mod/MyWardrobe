import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-seller-log-in',
  templateUrl: './seller-log-in.component.html',
  styleUrls: ['./seller-log-in.component.css']
})
export class SellerLogInComponent implements OnInit {
  hide:boolean = true;
  logSellerInForm!:FormGroup;
  validForm!:boolean;
  userDetail:User[]
  constructor(private router: Router,
              private formBuilder:FormBuilder,
              private userService:UserDataService,){}
  navigationArray: Array<{ label: string, link?: string }> = [
    {
      label:'Home',
      link:'/home'
    },
    {
      label: 'Seller',
      link: '/seller',
    },
    {
      label: 'LogIn'
    }];   

  ngOnInit(): void {
    this.validForm=true;
    this.logSellerInForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ['', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}$/)]]
    })
  }
  
  get userFormControl(){
    return this.logSellerInForm.controls;
  }

  onLogInUser(data:User):void{
    this.userService.getUserDetail().subscribe((userDetail)=>{
      this.userDetail = userDetail
      for(let user of this.userDetail){
        if(data.email === user.email && data.password === user.password){
          localStorage.setItem('User',JSON.stringify(user))
          if(user.catagory == 'buyer'){
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