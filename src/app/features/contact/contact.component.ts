import { Component, OnInit } from '@angular/core';
import {Banner} from "../../libs/components/banner/entity/banner.interface";
import { FormTitles } from "../../libs/components/form/entity/form.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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

  banner: Banner = {
    title: 'CONTACT US',
    description: "LET’S STAY IN TOUCH!",
    image: 'assets/images/heading-bg.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
