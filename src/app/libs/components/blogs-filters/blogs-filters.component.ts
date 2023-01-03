import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from "rxjs";
import { ICategory, IFilterSearch, ITag } from "../filters";
import { CategoriesService, TagsService } from "../../../core/services";

@Component({
  selector: 'app-blogs-filters',
  templateUrl: './blogs-filters.component.html',
  styleUrls: ['./blogs-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsFiltersComponent {
  @Output() onFiltersChange: EventEmitter<IFilterSearch> = new EventEmitter<IFilterSearch>();

  categories$: Observable<ICategory[]> = this.categoriesService.getCategories$();
  tags$: Observable<ITag[]> = this.tagsService.getTags$();

  constructor(private tagsService: TagsService,
              private categoriesService: CategoriesService) { }

}
