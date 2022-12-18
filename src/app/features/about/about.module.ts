import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AboutComponent } from "./about.component";
import { ComponentsModule } from "../../libs/components";
import { AboutService, BannerService } from "../../core/services";



const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  providers: [
    AboutService,
    BannerService
  ]
})
export class AboutModule { }
