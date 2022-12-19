import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from "ngx-owl-carousel-o";

import { SwiperComponent } from './swiper.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SwiperComponent
  ],
  exports: [
    SwiperComponent
  ],
    imports: [
        CommonModule,
        CarouselModule,
        RouterModule
    ]
})
export class SwiperModule { }
