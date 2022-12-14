import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {Banner} from "./entity/banner.interface";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Input() banner: Banner | null;
  constructor() { }

}
