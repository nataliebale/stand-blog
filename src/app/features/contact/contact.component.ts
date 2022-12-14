import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Banner } from "../../libs/components/banner/entity/banner.interface";
import { FormTitles, IFormData } from "../../libs/components/form/entity/form.interface";
import { BannerService } from "../../core/services/banner/banner.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  contactFormTitles: FormTitles = {
    textControlTitle: "your name",
    mailControlTitle: "your email",
    subjectControlTitle: "subject",
    textareaControlTitle: "type your comment",
    btnTitle: "send message",
    formTitle: "send us message"
  }

  banner$: Observable<Banner | null> = this.bannerService.getBanner$();

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
  }

  getFormData(data: IFormData) : void {
    console.log(data)
  }
}
