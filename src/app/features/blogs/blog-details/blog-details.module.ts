import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from "./blog-details.component";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "../../../libs/components/components.module";
import { CardModule } from "../../../libs/components/card/card.module";
import { BannerService } from "../../../core/services/banner/banner.service";

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
