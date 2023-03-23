import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-validations',
  templateUrl: './reactive-validations.component.html',
  styleUrls: ['./reactive-validations.component.css'],
})
export class ReactiveValidationsComponent {
  constructor(private fb: FormBuilder) {}
  public frmRegister = this.fb.group({
    Name: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    Mobile: this.fb.control('', [
      Validators.required,
      Validators.pattern(/\+91\d{10}/),
    ]),
  });

  get Name(): FormControl {
    return this.frmRegister.get('Name') as FormControl;
  }

  get Mobile(): FormControl {
    return this.frmRegister.get('Mobile') as FormControl;
  }
}
