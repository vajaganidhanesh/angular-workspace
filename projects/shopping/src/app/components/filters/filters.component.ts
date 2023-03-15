import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Input() public AllCount: number = 0;
  @Input() public ElectronicsCount: number = 0;
  @Input() public JeweleryCount: number = 0;
  @Input() public MensCount: number = 0;
  @Input() public WomensCount: number = 0;
  public CategoryName: string = 'all';

  @Output() public CategoryChanged: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public stringData: EventEmitter<any> = new EventEmitter<any>();

  public SendCategoryName(e: any) {
    this.CategoryChanged.emit(e.target.value);
  }
  public sendButtonClick() {
    this.stringData.emit({ name: 'samsungTv', price: 50000 });
  }
}
