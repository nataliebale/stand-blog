import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITag } from "./entity/tag.interface";
import { ICategory } from "./entity/category.interface";
import { IFilterSearch } from "./entity/filter-search.interface";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Input() tags: ITag[];
  @Input() categories: ICategory[];
  @Output() searchEmit: EventEmitter<IFilterSearch> = new EventEmitter<IFilterSearch>();

  searchResultItem: IFilterSearch = {
    search: '',
    categoryIds: [],
    tagIds: []
  }

  constructor() { }

  onKeyUp(value: string): void {
    this.searchResultItem.search = value;
    this.searchEmit.emit(this.searchResultItem);
  }

  onCategorySelect(id: number) {
    let ind = this.searchResultItem.categoryIds?.indexOf(id);
    ind === -1
      ? this.searchResultItem.categoryIds?.push(id)
      : this.searchResultItem.categoryIds?.splice(ind, 1);
    this.searchEmit.emit(this.searchResultItem);
  }

  onTagSelect(id: number) {
    let ind = this.searchResultItem.tagIds?.indexOf(id);
    ind === -1
      ? this.searchResultItem.tagIds?.push(id)
      : this.searchResultItem.tagIds?.splice(ind, 1);
    this.searchEmit.emit(this.searchResultItem);
  }

  isActive(categoryOrTag: string, id: number) {
    if()
  }
}
