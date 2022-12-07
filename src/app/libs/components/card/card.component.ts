import { Component, Input, OnInit } from '@angular/core';
import { ICard } from "./entity/card.interface";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard; // TODO: refactor
  @Input() showInDetail: boolean = false;
  displayFullText: boolean;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('blogs').subscribe(
      blogs => {
        if (blogs) {
          this.displayFullText = blogs.showInDetail;
          console.log(222222222, this.displayFullText);
        }
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
