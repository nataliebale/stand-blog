import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from "./entity/card.interface";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../core/store/blogs/entity/blogs.interface";
import { getPopularBlog, getShowInDetail } from "../../../core/store/blogs/selectors/blogs.selector";
import { setPopularBlog, showInDetailAction } from "../../../core/store/blogs/actions/blogs.action";
import { untilDestroyed } from "@ngneat/until-destroy";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: IBlog;
  @Input() showInDetail: boolean = false;

  isPopular: boolean;
  displayFullText: boolean;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.select(getShowInDetail).pipe(
      untilDestroyed(this)
    ).subscribe(
      state => this.displayFullText = state
    )
    
    this.store.select(getPopularBlog).pipe(
      untilDestroyed(this)
    ).subscribe(
      state => this.isPopular = (state === this.card?.id)
    )
  }

  onCheckChange() {
    this.store.dispatch(showInDetailAction());
  }

  onSetPopularProduct() {
    this.store.dispatch(setPopularBlog({ popularBlog: this.card.id }));
  }

}
