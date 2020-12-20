import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminOrderComponent } from './admin/admin-order.component';

const routes: Routes = [
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/order', component: AdminOrderComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
