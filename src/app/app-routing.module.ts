import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLogInComponent } from './customer-login/customer-login.component';
import { SellerComponent } from './seller/seller.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CustomerSignInComponent } from './customer-sign-in/customer-sign-in.component';
import { SellerLogInComponent } from './seller-log-in/seller-log-in.component';
import { SellerSignInComponent } from './seller-sign-in/seller-sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SellerProductComponent } from './seller-product/seller-product.component';

const routes: Routes = [
  {path:'',redirectTo:"/home" , pathMatch:'full'},
  {path:"home",component:HomePageComponent},
  {path:"customer-login",component:CustomerLogInComponent},
  {path:"customer-signup",component:CustomerSignInComponent},
  {path:'seller-login',component:SellerLogInComponent},
  {path:'seller-signup',component:SellerSignInComponent},
  {path:"seller",component:SellerComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"product-form",component:ProductFormComponent},
  {path:"product-form/:id",component:ProductFormComponent},
  {path:"cart",component:AddToCartComponent},
  {path:"seller-product",component:SellerProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
