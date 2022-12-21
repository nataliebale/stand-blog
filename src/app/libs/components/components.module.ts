import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsBlockComponent } from "./ads-block";
import { BannerComponent } from "./banner";
import { SocialsComponent } from "./socials";

const components = [
  AdsBlockComponent,
  BannerComponent
]

@NgModule({
  declarations: [
    ...components,
    SocialsComponent,
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
