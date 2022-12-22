import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ICategory, IFilterSearch, ITag } from "../filters";
import { CategoriesService, TagsService } from "../../../core/services";

@Component({
  selector: 'app-blogs-filters',
  templateUrl: './blogs-filters.component.html',
  styleUrls: ['./blogs-filters.component.scss']
})
export class BlogsFiltersComponent implements OnInit {
  categories$: Observable<ICategory[]> = this.categoriesService.getCategories$();
  tags$: Observable<ITag[]> = this.tagsService.getTags$();

  constructor(private tagsService: TagsService,
              private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onSearch(value: IFilterSearch): void {
    console.log(value); // TODO
  }


}
