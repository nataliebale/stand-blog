import { Component, OnInit } from '@angular/core';
import { Banner } from "../../libs/components/banner/entity/banner.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/home']);
  }
}
