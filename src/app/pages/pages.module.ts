import { SharedModule } from './../shared/shared.module';
import { BreadCrumbComponent } from './../shared/components/bread-crumb/bread-crumb.component';
import { ButtonComponent } from './../shared/components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    SharedModule
  ]
})
export class PagesModule { }
