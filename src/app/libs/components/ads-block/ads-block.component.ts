import { Component, Input, OnInit } from '@angular/core';
import { Ad } from "./entity/ad.interface";

@Component({
  selector: 'app-ads-block',
  templateUrl: './ads-block.component.html',
  styleUrls: ['./ads-block.component.scss']
})
export class AdsBlockComponent implements OnInit {
  @Input() public ad: Ad;

  constructor() { }

  ngOnInit(): void {
  }

}
