import { Component, Input, OnInit } from '@angular/core';
import { ICard } from "./entity/card.interface";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../core/store/blogs/entity/blogs.interface";

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
    this.store.select('blogs').subscribe(
      blogs => {
        this.displayFullText = blogs.showInDetail;
      }
    )
  }

  onCheckChange(): void {
    this.store.dispatch(
      { type: '[Blogs] show in detail'}
    )
    this.displayFullText = !this.displayFullText
  }

}
