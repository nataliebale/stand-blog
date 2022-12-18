import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { IBlog } from "../card";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent {
  @Input() slides: IBlog[];

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
}
