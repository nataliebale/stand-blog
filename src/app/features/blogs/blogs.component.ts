import { Component, OnInit } from '@angular/core';
import {Ad} from "../../libs/components/ads-block/entity/ad.interface";
import {Banner} from "../../libs/components/banner/entity/banner.interface";
import { ICard } from "../../libs/components/card/entity/card.interface";

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

  public cards: ICard[] = [
    {
      image: 'assets/images/banner-item-01.jpg',
      tag: 'nature',
      title: 'Aenean pulvinar gravida sem nec',
      role: 'Admin',
      date: 'May 12, 2020',
      numOfComments: 12,
      description: 'Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.'
    },
    {
      image: 'assets/images/banner-item-02.jpg',
      tag: 'lifestyle',
      title: 'Aenean pulvinar gravida sem nec',
      role: 'Admin',
      date: 'May 12, 2020',
      numOfComments: 12,
      description: 'Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.'
    },
    {
      image: 'assets/images/banner-item-03.jpg',
      tag: 'lifestyle',
      title: 'Aenean pulvinar gravida sem nec',
      role: 'Admin',
      date: 'May 12, 2020',
      numOfComments: 12,
      description: 'Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
