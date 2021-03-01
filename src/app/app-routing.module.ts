import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindOrderComponent } from './find-order/find-order.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';

const routes: Routes = [
  { path: 'find-order', component: FindOrderComponent },
  { path: 'manage-order', component: ManageOrderComponent },
  { path: '', redirectTo: '/find-order', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
