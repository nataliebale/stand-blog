import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ComponentsModule } from "../../libs/components/components.module";
import { CardModule } from "../../libs/components/card/card.module";


@NgModule({
  declarations: [
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CardModule,
    BlogsRoutingModule,
  ]
})
export class BlogsModule { }
