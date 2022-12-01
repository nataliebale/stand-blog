import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITag } from "./entity/tag.interface";
import { ICategory } from "./entity/category.interface";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() tags: ITag[];
  @Input() categories: ICategory[];
  @Output() searchEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(value: string): void {
    this.searchEmit.emit(value);
  }

}
