import { Component, Input, OnInit } from '@angular/core';
import { ICard } from "./entity/card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard; // TODO: refactor
  @Input() showInDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
