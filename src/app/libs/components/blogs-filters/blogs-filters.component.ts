import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { ICategory, ITag } from "../filters";
import { CategoriesService, TagsService } from "../../../core/services";

@Component({
  selector: 'app-blogs-filters',
  templateUrl: './blogs-filters.component.html',
  styleUrls: ['./blogs-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsFiltersComponent {
  @Output() onFiltersChange: EventEmitter<any> = new EventEmitter<any>();

  categories$: Observable<ICategory[]> = this.categoriesService.getCategories$();
  tags$: Observable<ITag[]> = this.tagsService.getTags$();
  filters:

  constructor(private tagsService: TagsService,
              private categoriesService: CategoriesService) { }

  onSearchByName(value: string) {

  }

  onSearchByCategoryId(id: number) {

  }

  onSearchByTagId(id: number) {

  }
}
