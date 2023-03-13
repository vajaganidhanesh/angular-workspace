import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  public img_src: string = '/assets/whiteshoe.png';
  public styling: { position: string; top: string; left: string } = {
    position: '',
    left: '',
    top: '',
  };

  public InsertClick(e: any): void {
    console.log(e);
    document.write(`
      Button Id     : ${e.target.id} <br>
      Button Name   : ${e.target.name} <br>
      Button Class  : ${e.target.className} <br>
      X Position    : ${e.clientX} <br>
      Ctrl Key      : ${e.ctrlKey}
      `);
  }

  public setImages(colorName: string): void {
    switch (colorName) {
      case 'green':
        this.img_src = 'assets/greenshoe.png';
        break;
      case 'red':
        this.img_src = 'assets/redshoe.png';
        break;
      case 'blue':
        this.img_src = 'assets/blueshoe.png';
        break;
      default:
        break;
    }
  }

  public mouseMove(e: any): void {
    this.styling = {
      position: `fixed`,
      left: e.clientX + 'px',
      top: e.clientY + 'px',
    };
  }
}
