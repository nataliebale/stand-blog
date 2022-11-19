import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from "./blogs.component";

const ROUTES: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./blog-details/blog-details.module').then((m) => m.BlogDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
