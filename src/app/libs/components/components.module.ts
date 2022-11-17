import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsBlockComponent } from './ads-block/ads-block.component';

const components = [
  AdsBlockComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    AdsBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
