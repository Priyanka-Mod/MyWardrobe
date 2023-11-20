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

    setUserDetail(userSignIn:User): Observable<User[]> {
        return this.http.post<User[]>(environment.apiUrl + 'sign-in',userSignIn)
    }

    getUserDetail(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiUrl + 'sign-in')
    }

    productDetails(productDetails:Product):Observable<Product>{
        return this.http.post<Product>(environment.apiUrl + 'product-detail',productDetails)
    }

    getProductDetails(): Observable<Product[]>{
        return this.http.get<Product[]>(environment.apiUrl + 'product-detail')
    }
    
    editProduct(productId:number){
        return this.http.get<Product>( environment.apiUrl +'product-detail/'+productId)
    }
    
    updateProduct(productId:number,product:Product):Observable<Product>{
        return this.http.put<Product>(environment.apiUrl + 'product-detail/'+productId,product)
    }

    deleteSellerProduct(productId:number):Observable<Product>{
        return this.http.delete<Product>(environment.apiUrl + 'product-detail/'+productId)
    }

    addSelectedProduct(productDetails:Product):Observable<Product>{
        return this.http.post<Product>(environment.apiUrl + 'selected-products',productDetails)
    }

    getSelectedProductList():Observable<Product[]>{
        return this.http.get<Product[]>(environment.apiUrl + 'selected-products')
    }

    deleteSelectedProduct(productId:number):Observable<Product>{
        return this.http.delete<Product>(environment.apiUrl + 'selected-products/' +productId)
    }

    updateSelectedQuantity(productId:number,product:Product):Observable<Product>{
        return this.http.put<Product>(environment.apiUrl + 'selected-products/'+productId,product)
    }

  }