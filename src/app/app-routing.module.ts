import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { ShippingsComponent } from './shippings/shippings.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { ArticlesComponent } from './articles/articles.component';
import { MenusComponent } from './menus/menus.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'shippings', component: ShippingsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
