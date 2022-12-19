import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { BannerService, BlogsService, CategoriesService } from "../../core/services";
import { IAd, IBlog, ICategory } from "../../libs/components";
import { getBlogs, getPopularBlogs, IBlogsState } from "../../core/store/blogs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  blogs$: Observable<IBlog[] | null> = this.store.select(getBlogs);
  popularBlogs$: Observable<IBlog[] | null> = this.store.select(getPopularBlogs);
  ad$: Observable<IAd> = this.bannerService.getAd$();
  categories$: Observable<ICategory[]> = this.categoriesService.getCategories$();

  constructor(private blogsService: BlogsService,
              private bannerService: BannerService,
              private categoriesService: CategoriesService,
              private store: Store<IBlogsState>) { }

  ngOnInit(): void {
    this.store.dispatch(BlogsActions.loadBlogs());
    this.store.dispatch(BlogsActions.loadPopularBlogs());
  }

  onSearch(value: string): void {
    console.log(value); // TODO
  }

}
