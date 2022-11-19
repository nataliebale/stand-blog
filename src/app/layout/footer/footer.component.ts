import { Component } from '@angular/core';
import { SocialLink } from "./entity/socials.inteface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
}
