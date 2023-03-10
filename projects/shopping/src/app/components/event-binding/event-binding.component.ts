import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
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
}
