import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-customer-sign-in',
  templateUrl: './customer-sign-in.component.html',
  styleUrls: ['./customer-sign-in.component.css']
})
export class CustomerSignInComponent implements OnInit{
  signUserForm!:FormGroup;
  hide:boolean = true;
  
  navigationArray: Array<{ label: string, link?: string }> = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'SignUp'
    }];        
  ngOnInit(): void {
    this.signUserForm = this.formbuilder.group({
      name:['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ['', [Validators.required , Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/)]]
    })
  }
  constructor(private router: Router,private formbuilder:FormBuilder,
              private userService:UserDataService){}
  get userFormControl(){
    return this.signUserForm.controls;
  }
  onSignInUser(data:User):void{
    data.catagory="buyer"
    this.userService.setUserDetail(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['/customer-login'])
      }
    })
    
  }
}
