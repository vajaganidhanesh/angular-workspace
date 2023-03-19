import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  public categories: string[] = [
    'Electronics',
    'Mens Fashion',
    'Womens Fashion',
    'Medicines',
  ];

  public product: { Name: string; Price: number; Mfd: Date; Rate: number } = {
    Name: 'Samsung Tv',
    Price: 54000,
    Mfd: new Date('2023-03-18'),
    Rate: 0.245,
  };

  public name: string = 'dhanesh';
  public method(name: string) {
    name.bold();
  }

  // i18nSelect pipeline
  public delivery: { product: string; city: string }[] = [
    { product: 'Samsung', city: 'delhi' },
    { product: 'Nokia', city: 'Hyderabad' },
    { product: 'Watch', city: 'Mumbai' },
    { product: 'Iphone', city: 'Goa' },
  ];

  public status: any = {
    delhi: 'Delivery in 2 days',
    Hyderabad: 'Same day Delivery',
    Mumbai: 'One day Delivery',
    other: 'Usually dispatched in 2-3 days',
  };
  // ______________________________________

  // ----------------i18nPural---------------
  public Message: string[] = [];
  public Count: number = 0;
  public InputMessage: string = '';
  public showMessages: boolean = false;

  public NotificationMap = {
    '=0': 'No New messages',
    '=1': 'One New Message',
    other: '# Messages',
  };

  public sendClick() {
    var now = new Date();
    this.Message.push(this.InputMessage + ' - ' + now.toLocaleTimeString());
    this.Count = this.Message.length;
    alert(this.InputMessage);
    this.InputMessage = '';
  }

  public openMessages() {
    this.showMessages = this.showMessages == false ? true : false;
  }

  // custom pipe
  public messagePipe: string = 'WelCome AnGulAR';

  // custom pipe Sorting
  public Cities: string[] = [
    'banglore',
    'hyderabad',
    'delhi',
    'chennai',
    'kochi',
    'andhra',
  ];
  ngOnInit(): void {
    this.Count = this.Message.length;
    console.log(JSON.stringify(this.product));
  }
}
