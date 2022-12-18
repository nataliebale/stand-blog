import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";

import { IBanner, IFormData, IFormTitles } from "../../libs/components";
import { BannerService } from "../../core/services";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  banner$: Observable<IBanner> = this.bannerService.getBanner$();

  contactFormTitles: IFormTitles = {
    textControlTitle: "your name",
    mailControlTitle: "your email",
    subjectControlTitle: "subject",
    textareaControlTitle: "type your comment",
    btnTitle: "send message",
    formTitle: "send us message"
  }

  constructor(private bannerService: BannerService) { }

  getFormData(data: IFormData) : void {
    console.log(data)
  }
}
