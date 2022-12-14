import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Banner} from "../../libs/components/banner/entity/banner.interface";
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
export class AboutComponent implements OnInit {
  public aboutData$: Observable<IAbout> = this.aboutService.getAbout$();

  // banner: Banner = {
  //   title: 'RECENT POSTS',
  //   description: "OUR RECENT BLOG ENTRIES",
  //   image: 'assets/images/heading-bg.jpg'
  // }

  banner$: Observable<Banner> = this.bannerService.getBanner$();

  constructor(private aboutService: AboutService,
              private bannerService: BannerService) { }

  ngOnInit(): void {
  }

}
