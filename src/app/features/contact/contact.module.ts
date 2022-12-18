import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { ComponentsModule, FormModule } from "../../libs/components";
import { BannerService } from "../../core/services";

const ROUTES: Routes = [
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
      CommonModule,
      ComponentsModule,
      RouterModule.forChild(ROUTES),
      HttpClientModule,
      FormModule
  ],
  providers: [
    BannerService,
  ]
})
export class ContactModule { }
