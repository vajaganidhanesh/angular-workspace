import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent {
  public product: { Name: string; Price: number; Mfd: Date } = {
    Name: 'Samsung Tv',
    Price: 54000,
    Mfd: new Date('2023-03-18'),
  };

  public name: string = 'dhanesh';
  public method(name: string) {
    name.bold();
  }
}
