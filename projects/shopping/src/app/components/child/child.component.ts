import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() public UserName: string | null = null;
  public currentValue: String | null = null;
  public previousValue: string | null = null;
  public msg: string | null = null;
  @Input() public MsgInput: string = '';
  @Output() public ChildClick: EventEmitter<string> =
    new EventEmitter<string>();

  public ChildButtonClick() {
    this.ChildClick.emit('Hello ! from child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (var property in changes) {
      let change = changes[property];
      this.currentValue = change.currentValue;
      this.previousValue = change.previousValue;
    }

    if (this.currentValue == this.previousValue) {
      this.msg = 'No change Detected';
    } else {
      this.msg = 'change Detected';
    }
  }
}
