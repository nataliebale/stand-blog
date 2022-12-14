import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Ad } from "./entity/ad.interface";

@Component({
  selector: 'app-ads-block',
  templateUrl: './ads-block.component.html',
  styleUrls: ['./ads-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsBlockComponent {
  @Input() ad: Ad;

  constructor() { }
}
