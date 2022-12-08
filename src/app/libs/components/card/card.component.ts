import { Component, Input, OnInit } from '@angular/core';
import { ICard } from "./entity/card.interface";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../core/store/blogs/entity/blogs.interface";
import { getShowInDetail } from "../../../core/store/blogs/selectors/blogs.selector";
import { showInDetailAction } from "../../../core/store/blogs/actions/blogs.action";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard; // TODO: refactor
  @Input() showInDetail: boolean = false;
  displayFullText: boolean;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(getShowInDetail).subscribe(
      state => this.displayFullText = state
    )
  }

  onCheckChange(): void {
    this.store.dispatch(showInDetailAction());
  }

}
