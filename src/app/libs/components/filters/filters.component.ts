import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() onEmitFilters: EventEmitter<IFilterSearch> = new EventEmitter<IFilterSearch>();

  filters: IFilterSearch = {
    search: '',
    categoryIds: [],
    tagIds: []
  }

  onSearchByName(value: string): void {
    this.filters.search = value;
    this.emitFilters();
  }

  onCategorySelect(id: number) {
    // @ts-ignore
    const index = this.filters.categoryIds.indexOf(id);
    index === -1 ? this.filters.categoryIds?.push(id) : this.filters.categoryIds?.splice(index, 1);
    this.emitFilters();
  }

  onTagSelect(id: number) {
    // @ts-ignore
    const index = this.filters.tagIds.indexOf(id);
    index === -1 ? this.filters.tagIds?.push(id) : this.filters.tagIds?.splice(index, 1);
    this.emitFilters();
  }

  emitFilters(): void{
    this.onEmitFilters.emit(this.filters);
  }

}
