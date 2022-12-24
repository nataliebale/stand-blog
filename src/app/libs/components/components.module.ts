import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsBlockComponent } from "./ads-block";
import { BannerComponent } from "./banner";
import { SocialsComponent } from "./socials";

const components = [
  AdsBlockComponent,
  BannerComponent,
  SocialsComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    AdsBlockComponent,
    BannerComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
