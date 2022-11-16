import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';

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
  ]
})
export class HomeModule { }
