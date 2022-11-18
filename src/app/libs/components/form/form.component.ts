import { Component, Input, OnInit } from '@angular/core';
import { FormTitles } from "./entity/form.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formTitles: FormTitles;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {

  }

}
