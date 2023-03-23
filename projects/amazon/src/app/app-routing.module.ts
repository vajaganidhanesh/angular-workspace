import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonEletronicsComponent } from './components/amazon-eletronics/amazon-eletronics.component';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: AmazonHomeComponent },
  { path: 'jewelery', component: AmazonJeweleryComponent },
  { path: 'electronics', component: AmazonEletronicsComponent },
  { path: 'mens', component: AmazonMensComponent },
  { path: 'womens', component: AmazonWomensComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}