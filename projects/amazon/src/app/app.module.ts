import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonIndexComponent } from './components/amazon-index/amazon-index.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonEletronicsComponent } from './components/amazon-eletronics/amazon-eletronics.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonIndexComponent,
    AmazonJeweleryComponent,
    AmazonHomeComponent,
    AmazonEletronicsComponent,
    AmazonMensComponent,
    AmazonWomensComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AmazonIndexComponent],
})
export class AppModule {}
