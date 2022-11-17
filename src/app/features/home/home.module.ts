import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from "../../libs/components/swiper/swiper.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SwiperModule
  ]
})
export class HomeModule { }
