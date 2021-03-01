import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindOrderComponent } from './find-order/find-order.component';

const routes: Routes = [
  { path: 'find-order', component: FindOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
