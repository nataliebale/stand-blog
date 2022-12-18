import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BlogsEffects, blogsReducer } from "../../../core/store/blogs";



@NgModule({
  declarations: [
      CardComponent
  ],
  exports: [
      CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('blogs', blogsReducer),
    EffectsModule.forFeature([ BlogsEffects ])
  ]
})
export class CardModule { }
