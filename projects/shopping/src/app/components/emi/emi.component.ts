import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css'],
})
export class EmiComponent {
  public P: number = 10000;
  public r: number = 10.25;
  public n: number = 1;
  public EMI: number = 0;

  public amountChange(e: any) {
    this.P = e.target.value;
  }
  public yearChange(e: any) {
    this.n = e.target.value;
  }
  public interestChange(e: any) {
    this.r = e.target.value;
  }

  public totalEMI() {
    var n = this.n * 12;
    var r = this.r / 12 / 100;
    // alert(`${n}`);
    this.EMI = (this.P * r * Math.pow(1 + r, n)) / Math.pow(1 + r, n) - 1;
  }
}
