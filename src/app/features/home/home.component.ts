import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAd } from "../../libs/components/ads-block/entity/ad.interface";
import { IBlog } from "../../libs/components/card/entity/card.interface";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { Observable } from "rxjs";
import { IBlogsState } from "../../core/store/blogs/entity/blogs.interface";
import { Store } from "@ngrx/store";
import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { getBlogs } from "../../core/store/blogs/selectors/blogs.selector";
import { BannerService } from "../../core/services/banner/banner.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  cards$: Observable<IBlog[] | null> = this.store.select(getBlogs); // TODO | null

  ad$: Observable<IAd> = this.bannerService.getAd$();

  constructor(private blogsService: BlogsService,
              private bannerService: BannerService,
              private store: Store<IBlogsState>) { }

  ngOnInit(): void {
    this.store.dispatch(BlogsActions.loadBlogs())
  }

  onSearch(value: string): void {
    console.log(value); // TODO
  }

}
