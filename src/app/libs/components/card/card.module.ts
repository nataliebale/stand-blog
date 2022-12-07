import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { blogsReducer } from "../../../core/store/blogs/reducers/blogs.reducer";



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
    StoreModule.forFeature('blogs', blogsReducer)
  ]
})
export class CardModule { }
