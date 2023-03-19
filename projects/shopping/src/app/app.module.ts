import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { EmiComponent } from './components/emi/emi.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsDataComponent } from './components/products-data/products-data.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { SentencePipe } from './pipes/sentences.pipe';
import { SortingPipePipe } from './pipes/sorting-pipe.pipe';
import { CapchaService } from './service/capcha.service';

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
    EmiComponent,
    ParentComponent,
    ChildComponent,
    ProductsDataComponent,
    FiltersComponent,
    MaterialDemoComponent,
    PipeDemoComponent,
    SentencePipe,
    SortingPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatButtonModule,
    ScrollingModule,
  ],
  providers: [CapchaService],
  bootstrap: [LoginComponent],
})
export class AppModule {}
