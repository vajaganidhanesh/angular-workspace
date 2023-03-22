import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
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
    Photos: this.fb.array([this.fb.control('')]),
  });

  get vendorName() {
    return this.formRegister.get('vendorName');
  }

  get vendorRating() {
    return this.formRegister.get('vendorRating');
  }
  get Photos(): FormArray {
    return this.formRegister.get('Photos') as FormArray;
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
  public addInput() {
    this.Photos.push(this.fb.control(''));
  }
  public removeInput(e: any) {
    this.Photos.removeAt(e);
  }
}
