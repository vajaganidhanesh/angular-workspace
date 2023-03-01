import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { netflixRegister } from '../app/components/netflix-register.component';
import { LoginComponent } from './components/logincomponent/login.component';

@NgModule({
  declarations: [AppComponent, netflixRegister, LoginComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoginComponent],
})
export class AppModule {}
