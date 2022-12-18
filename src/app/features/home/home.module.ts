import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SwiperModule } from "../../libs/components/swiper/swiper.module";
import { ComponentsModule} from "../../libs/components/components.module";
import { CardModule } from "../../libs/components/card/card.module";
import { FiltersModule } from "../../libs/components/filters/filters.module";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { HttpClientModule } from "@angular/common/http";
import { BannerService } from "../../core/services/banner/banner.service";

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
      HttpClientModule
  ],
  providers: [
    BlogsService,
    BannerService
  ]
})
export class HomeModule { }
