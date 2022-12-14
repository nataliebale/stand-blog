import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Ad} from "../../libs/components/ads-block/entity/ad.interface";
import { ICard } from "../../libs/components/card/entity/card.interface";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { Observable } from "rxjs";
import { IBlogsState } from "../../core/store/blogs/entity/blogs.interface";
import { Store } from "@ngrx/store";
import * as BlogsActions from "../../core/store/blogs/actions/blogs.action";
import { getBlogs } from "../../core/store/blogs/selectors/blogs.selector";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  cards$: Observable<ICard[] | null> = this.store.select(getBlogs);

  ad: Ad = {
    title: 'Stand Blog HTML5 Template',
    description: 'Creative HTML Template For Bloggers!',
    url: 'https://templatemo.com/tm-551-stand-blog',
    image: 'assets/images/cta-bg.jpg',
    btnText: 'download now!'
  }

  constructor(private blogsService: BlogsService,
              private store: Store<IBlogsState>) { }

  ngOnInit(): void {
    this.store.dispatch(BlogsActions.loadBlogs())
  }

  onSearch(value: string): void {
    console.log(value);
  }

}
