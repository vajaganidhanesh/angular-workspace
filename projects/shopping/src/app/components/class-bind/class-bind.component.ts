import { Component } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css'],
})
export class ClassBindComponent {
  public bgStyle: string = 'red';
  public textStyle: string = 'white';
  public padding: string = '0px';
  public fontSize: string = '10px';

  public styleObject: {
    'background-color': string;
    color: string;
    padding: string;
    'font-size': any;
    'text-align': string;
  } = {
    'background-color': 'red',
    color: 'white',
    padding: '10px',
    'font-size': '20px',
    'text-align': 'center',
  };

  public applyClick() {
    this.styleObject = {
      'background-color': this.bgStyle,
      color: this.textStyle,
      padding: this.padding + 'px',
      'text-align': 'center',
      'font-size': this.fontSize + 'px',
    };
  }

  public fontSizes() {
    this.styleObject = {
      'background-color': this.bgStyle,
      color: this.textStyle,
      padding: this.padding + 'px',
      'text-align': 'center',
      'font-size': this.fontSize + 'px',
    };
  }
}
