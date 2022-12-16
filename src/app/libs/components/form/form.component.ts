import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormData, IFormTitles } from "./entity/form.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input() formTitles: IFormTitles;
  @Output() formData: EventEmitter<IFormData> = new EventEmitter<IFormData>();

  form: FormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    }
  )

  constructor() { }

  public onSubmit(): void {
    this.formData.emit(this.form.value);
  }

}
