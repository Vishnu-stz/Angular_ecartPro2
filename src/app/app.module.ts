import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site-lay-out/header/header.component';
import { FooterComponent } from './site-lay-out/footer/footer.component';
import { SiteLayOutModule } from './site-lay-out/site-lay-out.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ] ,
  imports: [
    BrowserModule ,
    AppRoutingModule ,
    SiteLayOutModule ,
    HttpClientModule ,
    ReactiveFormsModule , 
    FormsModule
  ] ,
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
