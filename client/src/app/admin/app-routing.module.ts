import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminOrderComponent } from './admin/admin-order.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfaddComponent } from './profadd/profadd.component';
const routes: Routes = [
  { path: 'admin/home', component: HomeComponent },
  { path: 'admin/worker', component: AdminOrderComponent },
  { path: 'admin/user', component: UserListComponent },
  { path: 'admin/profadd', component: ProfaddComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
