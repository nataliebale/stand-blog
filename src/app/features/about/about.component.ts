import { Component, OnInit } from '@angular/core';
import {Banner} from "../../libs/components/banner/entity/banner.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  banner: Banner = {
    title: 'ABOUT US',
    description: "MORE ABOUT US!",
    image: 'assets/images/heading-bg.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
