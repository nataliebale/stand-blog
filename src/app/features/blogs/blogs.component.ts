import { Component, OnInit } from '@angular/core';
import {Ad} from "../../libs/components/ads-block/entity/ad.interface";
import {Banner} from "../../libs/components/banner/entity/banner.interface";
import { ICard } from "../../libs/components/card/entity/card.interface";
import { BlogsService } from "../../core/services/blogs/blogs.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  banner: Banner = {
    title: 'ABOUT US',
    description: "MORE ABOUT US!",
    image: 'assets/images/heading-bg.jpg'
  }

  public ad: Ad = {
    title: 'Stand Blog HTML5 Template',
    description: 'Creative HTML Template For Bloggers!',
    url: 'https://templatemo.com/tm-551-stand-blog',
    image: 'assets/images/cta-bg.jpg',
    btnText: 'download now!'
  }

  public cards$: Observable<ICard[]> = this.blogsService.getBlogs$();

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
  }

}
