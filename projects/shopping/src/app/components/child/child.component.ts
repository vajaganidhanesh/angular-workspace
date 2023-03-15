import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() public MsgInput: string = '';
  @Output() public ChildClick: EventEmitter<string> =
    new EventEmitter<string>();

  public ChildButtonClick() {
    this.ChildClick.emit('Hello ! from child');
  }
}
