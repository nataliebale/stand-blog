import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { BlogDetailsComponent } from "./blog-details.component";
import { CardModule, ComponentsModule } from "../../../libs/components";
import { BannerService } from "../../../core/services";

const ROUTES: Routes = [
  {
    path: '',
    component: BlogDetailsComponent
  }
]

@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(ROUTES),
    CardModule
  ],
  providers: [
    BannerService
  ]
})
export class BlogDetailsModule { }
