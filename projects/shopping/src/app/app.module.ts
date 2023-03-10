import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { netflixRegister } from '../app/components/netflix-register.component';
import { LoginComponent } from './components/logincomponent/login.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';
import { BindcomponentComponent } from './components/bindcomponent/bindcomponent.component';
import { FakestoreapiComponent } from './components/fakestoreapi/fakestoreapi.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MobileComponentComponent } from './components/mobile-component/mobile-component.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';
import { BookingSiteComponent } from './components/booking-site/booking-site.component';
import { ClassBindComponent } from './components/class-bind/class-bind.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';

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
    BindcomponentComponent,
    FakestoreapiComponent,
    ContentProjectionComponent,
    MobileComponentComponent,
    ProductDetailsComponent,
    ForDemoComponent,
    BookingSiteComponent,
    ClassBindComponent,
    EventBindingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [EventBindingComponent],
})
export class AppModule {}
