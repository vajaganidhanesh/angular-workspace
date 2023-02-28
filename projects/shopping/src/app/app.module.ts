import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { netflixRegister } from '../app/components/netflix-register.component';

@NgModule({
  declarations: [AppComponent, netflixRegister],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [netflixRegister],
})
export class AppModule {}
