import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBanner } from "../../libs/components/banner/entity/banner.interface";
import { IFormData, IFormTitles } from "../../libs/components/form/entity/form.interface";
import { BannerService } from "../../core/services/banner/banner.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  contactFormTitles: IFormTitles = {
    textControlTitle: "your name",
    mailControlTitle: "your email",
    subjectControlTitle: "subject",
    textareaControlTitle: "type your comment",
    btnTitle: "send message",
    formTitle: "send us message"
  }

  banner$: Observable<IBanner> = this.bannerService.getBanner$();

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
  }

  getFormData(data: IFormData) : void {
    console.log(data)
  }
}
