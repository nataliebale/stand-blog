import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home.component";
import { BlogsFiltersModule, CardModule, ComponentsModule, FiltersModule, SwiperModule } from "../../libs/components";
import { BannerService, BlogsService } from "../../core/services";
import { AppModule } from "../../app.module";

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FiltersModule,
    SwiperModule,
    ComponentsModule,
    CardModule,
    HttpClientModule,
    BlogsFiltersModule
  ],
  providers: [
    BlogsService,
    BannerService
  ]
})
export class HomeModule { }
