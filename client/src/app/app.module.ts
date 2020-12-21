import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { WorkerComponent } from './worker/worker.component';
import { ApproutingModule, routingComponents } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    UserComponent,
    AdminComponent,
    WorkerComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
