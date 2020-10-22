import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import{AuthenticationService} from './services/authentication.service'
import{AuthGuardService} from './services/auth-guard.service'



import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SliderComponent } from './slider/slider.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { PostProductComponent } from './post-product/post-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SliderComponent,
    MessageComponent,
    ProfileComponent,
    SearchComponent,
    ProductComponent,
    SettingsComponent,
    AddressComponent,
    PostProductComponent,
    CategoriesComponent,
    CategoryComponent,
    MyProductsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    OwlModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, 
  ],
  providers: [RestApiService,AuthGuardService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
