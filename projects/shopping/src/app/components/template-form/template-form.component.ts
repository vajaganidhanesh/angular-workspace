import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  public SubmitClick(formdata: any) {
    alert(JSON.stringify(formdata));
  }

  public cityError: string = 'Please select city';
  public SelectCity(e: any) {
    if (e.target.value == '-1') {
      this.cityError = 'Please select city';
    } else {
      this.cityError = '';
    }
  }
}
