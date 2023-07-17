import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbAlertModule, NgbTooltipModule, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostListComponent,
    NotificationModalComponent,
    PostFormComponent,

  ],
  imports: [
    NgbAlertModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbTooltipModule
  ],
  providers: [NgbTooltipConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
