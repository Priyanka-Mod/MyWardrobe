import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User, Product } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  productDetail:Product
  user:User | null
  catagory: string
  userEmail:string
  inShock : number
  productList:Product[]
  products:Product[];
  isShock:boolean
  constructor(private userService:UserDataService, private router:Router,
              private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.userService.getProductDetails().subscribe((product: Product[]) => {
      this.products = product;
      this.productList = product
      for(let quantity of this.products){
        this.inShock = quantity.product_quantity
        
        if(this.inShock === 0){
          // console.log(this.inShock , quantity)
        }
      }
      this.user = JSON.parse(localStorage.getItem('User') as string)
      this.catagory = JSON.parse(localStorage.getItem('User') as string).catagory
      this.userEmail = JSON.parse(localStorage.getItem('User')as string).email
      
    })
  }

  addToCart(productDetail:Product){
    this._snackBar.open('Successfully added to cart!!!','Ok',
    {
      horizontalPosition:'left',
      verticalPosition:'bottom',
      duration:1500
    });
    this.productDetail = productDetail;
    this.productDetail.product_quantity = 1;
    
    this.userService.addSelectedProduct(this.productDetail).subscribe((product)=>{
    })
    this.userService.getProductDetails().subscribe((product: Product[]) => {
      this.products = product;
      for(let quantity of this.products){
        this.inShock = quantity.product_quantity
        
      }
    })
  }
  logOutUser(){
    localStorage.clear();
    this.user = null
    this.catagory = '';
    this.userEmail = '';
  }
  search(data:string){
    // this.userService.getFilterSelectedProduct(data).subscribe((filterData)=>{
    //   console.log(filterData);
    // })

    if(data){
      // for(let p of this.productList) {
      //   if(p.product_name.toLowerCase().includes(data.toLocaleLowerCase())) {
      //     a.push(p);
      //   }
      // }

      // this.productList = a;

      this.products = this.productList.filter((product:Product) => {
         return product.product_name.toLowerCase().includes(data.toLowerCase());
      })

     
    }
    else{
      this.products = this.productList 
    }
    
    
    
  }
}
