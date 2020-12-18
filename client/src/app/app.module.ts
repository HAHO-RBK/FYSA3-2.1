import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { WorkerComponent } from './worker/worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './admin/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [AppComponent, UserComponent, AdminComponent, WorkerComponent, NavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
