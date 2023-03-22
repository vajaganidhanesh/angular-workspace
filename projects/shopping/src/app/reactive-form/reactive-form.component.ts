import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  // public frmRegister = new FormGroup({
  //   UserName: new FormControl('Your Name'),
  //   Age: new FormControl(0),
  //   Mobile: new FormControl(''),
  // });

  // public formRegister = new FormGroup({
  //   username: new FormControl(''),
  //   age: new FormControl(0),
  //   formVendor: new FormGroup({
  //     vendorName: new FormControl(''),
  //     vendorRating: new FormControl(0),
  //   }),
  // });
  constructor(private fb: FormBuilder) {}
  public formRegister = this.fb.group({
    username: this.fb.control(''),
    age: this.fb.control(0),
    formVendor: this.fb.group({
      vendorName: this.fb.control(''),
      vendorRating: this.fb.control(0),
    }),
  });

  get vendorName() {
    return this.formRegister.get('vendorName');
  }

  get vendorRating() {
    return this.formRegister.get('vendorRating');
  }

  public submitClick(e: any) {
    alert(JSON.stringify(e));
  }

  public UpdateClick(e: any) {
    e.preventDefault();
    this.formRegister.patchValue({
      age: 23,
      formVendor: {
        vendorName: 'Samsung Galaxy',
        vendorRating: 4.5,
      },
    });
  }
}
