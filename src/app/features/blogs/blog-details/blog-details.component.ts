import { Component, OnInit } from '@angular/core';
import { Banner } from "../../../libs/components/banner/entity/banner.interface";
import { Ad } from "../../../libs/components/ads-block/entity/ad.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

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
  private itemId: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      this.getBlogById();
    })
  }

  getBlogById(){

  }

}
