import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-seller-sign-in',
  templateUrl: './seller-sign-in.component.html',
  styleUrls: ['./seller-sign-in.component.css']
})
export class SellerSignInComponent implements OnInit{
  signUserForm!:FormGroup;
  hide:boolean = true;
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
      label: 'SignUp'
    }]; 

  ngOnInit(): void {
    this.signUserForm = this.formbuilder.group({
      name:['',Validators.required],
      email : ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gstin:['',Validators.required],
      password : ['', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8}$/) ]]
    })
  }
  constructor(private router: Router,private formbuilder:FormBuilder,private userService:UserDataService){}
  get userFormControl(){
    return this.signUserForm.controls;
  }
  onSignInUser(sellerData:User):void{
    sellerData.catagory="seller"
    this.userService.setUserDetail(sellerData).subscribe((signData)=>{
      if(signData){
        this.router.navigate(['/seller-login'])
      }
    })
  }
}