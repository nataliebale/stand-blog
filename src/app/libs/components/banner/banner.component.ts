import {Component, Input, OnInit} from '@angular/core';
import {Banner} from "./entity/banner.interface";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() public banner: Banner;
  constructor() { }

  ngOnInit(): void {
  }

}
