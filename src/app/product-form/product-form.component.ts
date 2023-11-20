import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/datatype.model';
import { UserDataService } from 'src/user-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  productDetailForm!:FormGroup;
  hide:boolean = true;
  productDetails:Product 
  newImage:boolean
  constructor(private formbuilder:FormBuilder,
              private userService:UserDataService,
              private router:Router,
              private route: ActivatedRoute){}
  ngOnInit(): void {
    this.productDetailForm = this.formbuilder.group({
      product_name:['',Validators.required],
      product_image:['',[Validators.required,Validators.pattern(/.+\.(jpg|jpeg|png|gif)$/)]],
      product_price:['',[Validators.required,Validators.min(1)]],
      product_quantity:['',[Validators.required,,Validators.min(1)]],
    });
    
    const productId = this.route.snapshot.params['id'];
    if(productId){
      this.newImage=false
      this.userService.editProduct(productId).subscribe((upadateProduct)=>{
        this.productDetails = upadateProduct
        this.productDetailForm.patchValue(upadateProduct)
      })
    }
  }

  get productFormControl(){
    return this.productDetailForm.controls;
  }

  productSubmit(productDetail:Product){
    if(this.productDetailForm.valid){
      if (this.route.snapshot.params['id']) {
        const productId = this.route.snapshot.params['id'];
        this.userService.updateProduct(productId,this.productDetailForm.value).subscribe((updatedProduct)=>{
          if(updatedProduct){
            this.router.navigate(['/seller-product'])
          }
        })
        return
      }
    }
    this.userService.productDetails(productDetail).subscribe((product)=>{
      this.router.navigate(['/seller-product']);
    })
    
  }
}
