import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Banner } from "../../../libs/components/banner/entity/banner.interface";
import { Ad } from "../../../libs/components/ads-block/entity/ad.interface";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable, tap } from "rxjs";
import { BannerService } from "../../../core/services/banner/banner.service";
import { IBlog } from "../../../libs/components/card/entity/card.interface";
import { BlogsService } from "../../../core/services/blogs/blogs.service";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailsComponent implements OnInit {
  banner$: Observable<Banner | null> = this.bannerService.getBanner$(); // TODO: refactor

  public ad: Ad = { // TODO: refactor
    title: 'Stand Blog HTML5 Template',
    description: 'Creative HTML Template For Bloggers!',
    url: 'https://templatemo.com/tm-551-stand-blog',
    image: 'assets/images/cta-bg.jpg',
    btnText: 'download now!'
  }

  card$: Observable<any>;

  itemId: number;

  constructor(private route: ActivatedRoute,
              private bannerService: BannerService,
              private blogsService: BlogsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = Number(params.get('id'));
      this.getBlogById();
    })
  }

  getBlogById(){ // TODO: refactor
    this.card$ = this.blogsService.getBlogById$(this.itemId).pipe(
      tap(data => console.log(data))
    )
  }

}
