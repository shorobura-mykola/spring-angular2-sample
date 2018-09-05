import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainLoginComponent} from './main-login/main.login.component';

@NgModule({
  declarations: [MainLoginComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class LoginModule {}
