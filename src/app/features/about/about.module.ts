import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { AboutComponent } from './about.component';
import {ComponentsModule} from "../../libs/components/components.module";

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
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutModule { }
