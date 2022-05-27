import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule, } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    PagesModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HomeModule,
    HttpClientModule,
    SharedModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
