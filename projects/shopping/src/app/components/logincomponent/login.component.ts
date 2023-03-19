import { Component, OnInit } from '@angular/core';
import { CapchaService } from '../../service/capcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public code: string = '';
  constructor(private captcha: CapchaService) {}
  ngOnInit(): void {
    this.code = this.captcha.GenerateCode();
  }
  public NewCode(): void {
    this.code = this.captcha.GenerateCode();
  }
}
