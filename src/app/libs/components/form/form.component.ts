import { Component, Input, OnInit } from '@angular/core';
import { FormTitles } from "./entity/form.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formTitles: FormTitles;

  form: FormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      mail: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {

  }

}
