import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsBlockComponent } from "./ads-block";
import { BannerComponent } from "./banner";

const components = [
  AdsBlockComponent,
  BannerComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    AdsBlockComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
