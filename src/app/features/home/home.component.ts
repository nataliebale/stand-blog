import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { BannerService, BlogsService } from "../../core/services";
import { IAd, IBlog } from "../../libs/components";
import { getBlogs, IBlogsState } from "../../core/store/blogs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  cards$: Observable<IBlog[] | null> = this.store.select(getBlogs)
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
