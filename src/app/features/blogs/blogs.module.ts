import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { CardModule, ComponentsModule } from "../../libs/components";
import { BannerService, BlogsService } from "../../core/services";


@NgModule({
  declarations: [
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CardModule,
    BlogsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BlogsService,
    BannerService
  ]
})
export class BlogsModule { }
