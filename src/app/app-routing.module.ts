import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/service', pathMatch: 'full' },
  { path: 'service', loadChildren:()=> import('../app/service-list/service-list.module').then(m=> m.ServiceListModule)},
  { path: 'datalist', loadChildren:()=> import('../app/data-list/data-list.module').then(m=> m.DataListModule)},
  { path: 'product', loadChildren:()=> import('../app/product-list/product-list.module').then(m=> m.ProductListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
