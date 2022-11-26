import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SwiperModule } from "../../libs/components/swiper/swiper.module";
import {ComponentsModule} from "../../libs/components/components.module";
import {CardModule} from "../../libs/components/card/card.module";
import { FiltersModule } from "../../libs/components/filters/filters.module";

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
        CardModule
    ]
})
export class HomeModule { }
