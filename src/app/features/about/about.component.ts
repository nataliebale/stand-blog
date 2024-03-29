import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";

import { IAbout } from "./entity/about.interface";
import { IBanner } from "../../libs/components";
import { AboutService, BannerService } from "../../core/services";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  aboutData$: Observable<IAbout> = this.aboutService.getAbout$();
  banner$: Observable<IBanner> = this.bannerService.getBanner$();

  constructor(private aboutService: AboutService,
              private bannerService: BannerService) { }

}
