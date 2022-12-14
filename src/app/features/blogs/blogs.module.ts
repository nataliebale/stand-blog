import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ComponentsModule } from "../../libs/components/components.module";
import { CardModule } from "../../libs/components/card/card.module";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { blogsReducer } from "../../core/store/blogs/reducers/blogs.reducer";
import { BannerService } from "../../core/services/banner/banner.service";


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
