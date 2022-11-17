import { Component, OnInit } from '@angular/core';
import {Banner} from "../../libs/components/banner/entity/banner.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  banner: Banner = {
    title: 'CONTACT US',
    description: "LET’S STAY IN TOUCH!",
    image: 'assets/images/heading-bg.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
