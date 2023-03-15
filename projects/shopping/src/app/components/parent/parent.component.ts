import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  public Msg: string = '';
  public MsgFromChild: string = '';
  public sendData() {
    this.Msg = 'Hello Message from Parent!';
  }

  public getMessageFromChild(e: string) {
    this.MsgFromChild = e;
  }
}
