import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Ad } from "../../libs/components/ads-block/entity/ad.interface";
import { Banner } from "../../libs/components/banner/entity/banner.interface";
import { ICard } from "../../libs/components/card/entity/card.interface";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { Observable } from "rxjs";
import { IBlogsState } from "../../core/store/blogs/entity/blogs.interface";
import { Store } from "@ngrx/store";
import { getBlogs, getError } from "../../core/store/blogs/selectors/blogs.selector";
import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { BannerService } from "../../core/services/banner/banner.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent implements OnInit {
  banner$: Observable<Banner | null> = this.bannerService.getBanner$();
  cards$: Observable<ICard[] | null> = this.store.select(getBlogs);
  cardsError$: Observable<string> = this.store.select(getError);

  ad: Ad = {
    title: 'Stand Blog HTML5 Template',
    description: 'Creative HTML Template For Bloggers!',
    url: 'https://templatemo.com/tm-551-stand-blog',
    image: 'assets/images/cta-bg.jpg',
    btnText: 'download now!'
  }

  constructor(private blogsService: BlogsService,
              private bannerService: BannerService,
              private store: Store<IBlogsState>) { }

  ngOnInit(): void {
    this.store.dispatch(BlogsActions.loadBlogs())
  }

}
