import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "../../libs/components/components.module";
import { FormModule } from "../../libs/components/form/form.module";
import { BannerService } from "../../core/services/banner/banner.service";
import { HttpClientModule } from "@angular/common/http";

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
