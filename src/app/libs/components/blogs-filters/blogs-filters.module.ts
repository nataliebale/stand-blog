import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService, TagsService } from "../../../core/services";
import { FiltersModule } from "../filters";
import { BlogsFiltersComponent } from "./blogs-filters.component";

@NgModule({
  declarations: [
    BlogsFiltersComponent
  ],
  imports: [
    CommonModule,
    FiltersModule
  ],
  exports: [
    BlogsFiltersComponent
  ],
  providers: [
    CategoriesService,
    TagsService
  ]
})
export class BlogsFiltersModule { }
