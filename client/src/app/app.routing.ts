import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminOrderComponent } from './admin/admin/admin-order.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProfaddComponent } from './admin/profadd/profadd.component';
import { NavComponent } from './admin/nav/nav.component';
import { WorkerComponent } from './worker/worker.component';
const routes: Routes = [
  // {
  //   path: 'user',
  //   component: UserComponent,
  // },
  // {
  //   path: 'admin',

  //   component: AdminComponent,
  // },
  // {
  //   path: 'worker',

  //   component: WorkerComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },

  // // otherwise redirect to home
  // { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
