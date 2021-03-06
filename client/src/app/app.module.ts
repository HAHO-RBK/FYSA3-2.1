import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WorkerComponent } from './worker/worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './admin/nav/nav.component';
import { HomeComponent } from './admin/home/home.component';
import { AppRoutingModule } from './admin/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminOrderComponent } from './admin/admin/admin-order.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProfaddComponent } from './admin/profadd/profadd.component';
import { appRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { WorkerRoutingModule } from './worker/worker.routing.module';
import { UserRoutingModule } from './user/user.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WorkerComponent,
    AdminComponent,
    NavComponent,
    HomeComponent,
    AdminOrderComponent,
    UserListComponent,
    ProfaddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    AppRoutingModule,
    appRoutingModule,
    WorkerRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
