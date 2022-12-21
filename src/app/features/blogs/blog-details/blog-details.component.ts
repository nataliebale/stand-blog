import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { IAd, IBanner, IBlog } from "../../../libs/components";
import { BannerService, BlogsService } from "../../../core/services";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailsComponent implements OnInit {
  banner$: Observable<IBanner> = this.bannerService.getBanner$();
  card$: Observable<IBlog>;
  ad$: Observable<IAd> = this.bannerService.getAd$();

  itemId: number;

  constructor(private route: ActivatedRoute,
              private bannerService: BannerService,
              private blogsService: BlogsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = Number(params.get('id'));
      this.card$ = this.blogsService.getBlogById$(this.itemId);
    })
  }

}
