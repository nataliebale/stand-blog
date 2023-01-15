import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { getBlogs, getError, IBlogsState } from "../../core/store";
import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { IAd, IBanner, IBlog } from "../../libs/components";
import { BannerService, BlogsService } from "../../core/services";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent implements OnInit {
  banner$: Observable<IBanner> = this.bannerService.getBanner$();
  cards$: Observable<IBlog[] | null> = this.store.select(getBlogs);
  cardsError$: Observable<string> = this.store.select(getError);
  ad$: Observable<IAd> = this.bannerService.getAd$();

  constructor(private blogsService: BlogsService,
              private bannerService: BannerService,
              private store: Store<IBlogsState>) { }

  ngOnInit(): void {
    this.store.dispatch(BlogsActions.loadBlogs())
  }

  onFiltersChange(filters: any){
    console.log('blogs filters => ',filters);
  }
}
