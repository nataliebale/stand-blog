import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAd } from "./entity/ad.interface";

@Component({
  selector: 'app-ads-block',
  templateUrl: './ads-block.component.html',
  styleUrls: ['./ads-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsBlockComponent {
  @Input() ad: IAd;

  constructor() { }
}
