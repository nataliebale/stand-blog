import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from "./blog-details.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: BlogDetailsComponent
  }
]

@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class BlogDetailsModule { }