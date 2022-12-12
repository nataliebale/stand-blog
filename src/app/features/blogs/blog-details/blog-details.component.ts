import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Banner } from "../../../libs/components/banner/entity/banner.interface";
import { Ad } from "../../../libs/components/ads-block/entity/ad.interface";
import { ActivatedRoute } from "@angular/router";
import { ICard } from "../../../libs/components/card/entity/card.interface";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  public card: ICard = {
    id: 1,
    image: 'assets/images/banner-item-01.jpg',
    tag: 'nature',
    title: 'Aenean pulvinar gravida sem nec',
    role: 'Admin',
    date: 'May 12, 2020',
    numOfComments: 12,
    description: 'Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.'
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
