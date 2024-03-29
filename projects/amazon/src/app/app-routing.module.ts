import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonEletronicsComponent } from './components/amazon-eletronics/amazon-eletronics.component';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AmazonAdminGuard } from './guard/amazon-admin.guard';

const routes: Routes = [
  { path: 'home', component: AmazonHomeComponent },
  { path: 'jewelery', component: AmazonJeweleryComponent },
  { path: 'electronics', component: AmazonEletronicsComponent },
  { path: 'mens', component: AmazonMensComponent },
  { path: 'womens', component: AmazonWomensComponent },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    children: [{ path: 'more/:id', component: AmazonMoreDetailsComponent }],
  },
  {
    path: 'admin',
    component: AmazonAdminComponent,
    canActivate: [AmazonAdminGuard],
  },
  { path: 'login', component: AmazonLoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
