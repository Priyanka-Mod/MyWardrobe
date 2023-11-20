import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, User } from './datatype.model';
import { Observable } from 'rxjs';
import { environment } from '../src/environments/environment'
@Injectable({
    providedIn: 'root'
  })
  export class UserDataService{
    constructor(private readonly http:HttpClient) { }

    setUserDetail(userSignIn:User){
        return this.http.post('http://localhost:3000/sign-in',userSignIn)
    }

    getUserDetail(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:3000/sign-in')
    }

    productDetails(productDetails:Product){
        return this.http.post('http://localhost:3000/product-detail',productDetails)
    }

    getProductDetails(): Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:3000/product-detail')
    }
    
    editProduct(productId:number){
        return this.http.get<Product>( environment.apiUrl +'product-detail'+"/"+productId)
    }
    
    updateProduct(productId:number,product:Product){
        return this.http.put<Product>('http://localhost:3000/product-detail'+'/'+productId,product)
    }

    deleteSellerProduct(productId:number){
        return this.http.delete<Product>('http://localhost:3000/product-detail'+'/'+productId)
    }

    addSelectedProduct(productDetails:Product){
        return this.http.post('http://localhost:3000/selected-products',productDetails)
    }

    getSelectedProductList(){
        return this.http.get<Product[]>('http://localhost:3000/selected-products')
    }

    deleteSelectedProduct(productId:number){
        return this.http.delete<Product>('http://localhost:3000/selected-products'+'/'+productId)
    }

    updateSelectedQuantity(productId:number,product:Product){
        return this.http.put<Product>('http://localhost:3000/selected-products'+'/'+productId,product)
    }

  }