import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { Slide } from "./entity/swiper.interface";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent {
  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    dots: false,
    margin: 12,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
  }

  slides: Slide[] = [
    {
      id: 1,
      img: "assets/images/banner-item-01.jpg",
      tag: "nature",
      title: 'Donec porttitor augue at velit',
      role: 'Admin',
      date: 'May 26, 2020',
      numOfComments: 72
    },
    {
      id: 2,
      img: "assets/images/banner-item-02.jpg",
      tag: "nature",
      title: 'Donec porttitor augue at velit',
      role: 'Admin',
      date: 'May 26, 2020',
      numOfComments: 72
    },
    {
      id: 3,
      img: "assets/images/banner-item-03.jpg",
      tag: "nature",
      title: 'Donec porttitor augue at velit',
      role: 'Admin',
      date: 'May 26, 2020',
      numOfComments: 72
    },
    {
      id: 4,
      img: "assets/images/banner-item-04.jpg",
      tag: "nature",
      title: 'Donec porttitor augue at velit',
      role: 'Admin',
      date: 'May 26, 2020',
      numOfComments: 72
    },
  ];
}
