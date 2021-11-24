import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { UsersComponent } from './components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, FormComponent, UsersComponent, UserItemComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
