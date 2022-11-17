import { Component, OnInit } from '@angular/core';
import {Ad} from "../../libs/components/ads-block/entity/ad.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ad: Ad = {
    title: 'Stand Blog HTML5 Template',
    description: 'Creative HTML Template For Bloggers!',
    url: 'https://templatemo.com/tm-551-stand-blog',
    image: 'assets/images/cta-bg.jpg',
    btnText: 'download now!'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
