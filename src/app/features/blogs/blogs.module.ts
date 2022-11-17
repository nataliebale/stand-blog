import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import {ComponentsModule} from "../../libs/components/components.module";


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
