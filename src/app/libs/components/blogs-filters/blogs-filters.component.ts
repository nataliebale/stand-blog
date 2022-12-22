import { Component } from '@angular/core';
import { map, Observable } from "rxjs";
import { ICategory, ITag } from "../filters";
import { CategoriesService, TagsService } from "../../../core/services";

@Component({
  selector: 'app-blogs-filters',
  templateUrl: './blogs-filters.component.html',
  styleUrls: ['./blogs-filters.component.scss']
})
export class BlogsFiltersComponent {
  categories$: Observable<ICategory[]> = this.categoriesService.getCategories$();
  tags$: Observable<ITag[]> = this.tagsService.getTags$();

  constructor(private tagsService: TagsService,
              private categoriesService: CategoriesService) { }

  onSearchByName(value: string) {
    this.categories$.pipe(
      map(data =>
        data.filter(item =>
          item.name.toLowerCase().indexOf(value) !== -1
        )
      ),
    )
  }

  onSearchByCategoryId(id: number) {

  }

  onSearchByTagId(id: number) {

  }
}
