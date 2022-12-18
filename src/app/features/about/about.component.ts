import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBanner } from "../../libs/components/banner/entity/banner.interface";
import { AboutService } from "../../core/services/about/about.service";
import { IAbout } from "./entity/about.interface";
import { Observable } from "rxjs";
import { BannerService } from "../../core/services/banner/banner.service";

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
