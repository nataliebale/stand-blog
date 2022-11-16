import { Component, OnInit } from '@angular/core';
import {SocialLink} from "./entity/socials.inteface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socials: SocialLink[] = [
    {
      title: 'facebook',
      url: '#'
    },
    {
      title: 'twitter',
      url: '#'
    },
    {
      title: 'behance',
      url: '#'
    },
    {
      title: 'linkedin',
      url: '#'
    },
    {
      title: 'dribble',
      url: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
