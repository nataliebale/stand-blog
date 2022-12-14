import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { AboutComponent } from './about.component';
import {ComponentsModule} from "../../libs/components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { AboutService } from "../../core/services/about/about.service";
import { BannerService } from "../../core/services/banner/banner.service";

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
