import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  public frmRegister = new FormGroup({
    UserName: new FormControl('Your Name'),
    Age: new FormControl(0),
    Mobile: new FormControl(''),
  });

  public submitClick(e: any) {
    alert(JSON.stringify(e));
  }
}
