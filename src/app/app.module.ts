import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MailServer } from "./service/MailServer.service";
import { NewMailComponent } from './new-mail/new-mail.component';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MailBoxComponent } from './mail-box/mail-box.component';

const appRoutes: Routes = [
  {
    path: 'newmail',
    component: NewMailComponent
  },
  {
    path: 'mailbox',
    component: MailBoxComponent
  },
  {
    path: '',
    component: NewMailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewMailComponent,
    MailBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MailServer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
