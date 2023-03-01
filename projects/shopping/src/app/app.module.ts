import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { netflixRegister } from '../app/components/netflix-register.component';
import { LoginComponent } from './components/logincomponent/login.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';

@NgModule({
  declarations: [
    AppComponent,
    netflixRegister,
    LoginComponent,
    HomeComponent,
    NetflixHeaderComponent,
    NetflixIndexComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NetflixIndexComponent],
})
export class AppModule {}
