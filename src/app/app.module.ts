import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLogInComponent} from './customer-login/customer-login.component';
import { SellerComponent } from './seller/seller.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerSignInComponent } from './customer-sign-in/customer-sign-in.component';
import { SellerSignInComponent } from './seller-sign-in/seller-sign-in.component';
import { SellerLogInComponent } from './seller-log-in/seller-log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { UserDataService } from 'src/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SellerProductComponent } from './seller-product/seller-product.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerLogInComponent,
    SellerComponent,
    AddToCartComponent,
    CustomerSignInComponent,
    SellerSignInComponent,
    SellerLogInComponent,
    AboutUsComponent,
    ProductFormComponent,
    SellerProductComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    SweetAlert2Module
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
