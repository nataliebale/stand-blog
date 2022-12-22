import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITag } from "./entity/tag.interface";
import { ICategory } from "./entity/category.interface";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Input() tags: ITag[];
  @Input() categories: ICategory[];

  @Output() searchByName: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSearchByCategoryId: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSearchByTagId: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onSearchByName(value: string): void {
    console.log(111111111, value);
    this.searchByName.emit(value);
  }

  onCategorySelect(id: number) {
    this.onSearchByCategoryId.emit(id);
  }

  onTagSelect(id: number) {
    this.onSearchByTagId.emit(id);
  }
}
