import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, User } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent {
  productList:Product[]
  user:User | null
  userEmail:string
  products:Product[];
  userId:number;
  displayedColumns: string[] = ['Image', 'Name', 'Price', 'Quantity' , 'Action'];
  
  constructor(private userService:UserDataService, private router:Router){}

  navigationArray: Array<{ label: string, link?: string }> = [
    {
      label:'Home',
      link:'/home'
    },
    {
      label: 'Sell Products',
    }];

  ngOnInit(): void {

    this.userService.getProductDetails().subscribe((product: Product[]) => {
      this.products = product;
      this.productList = product;
      this.user = JSON.parse(localStorage.getItem('User') as string)
      this.userEmail = JSON.parse(localStorage.getItem('User')as string).email
    })
  }
  logOutUser(){
    this.router.navigate(['/home'])
    localStorage.clear();
    this.user = null
  }

  addProduct(){
    this.router.navigate(['/product-form']);
  }

  editProduct(productId:number){
    this.userService.editProduct(productId).subscribe((product)=>{
      if(product){
        this.router.navigate(['/product-form',productId])
      }
    })
  }
  removeProduct(productId:number){
    this.userService.deleteSellerProduct(productId).subscribe((productId)=>{
      this.userService.getProductDetails().subscribe((productUpdated)=>{
        this.products=(productUpdated)
      })
    })
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
      
      // console.log(filteredData);
    }
    else{
      this.products = this.productList
    }
    
  }

}
