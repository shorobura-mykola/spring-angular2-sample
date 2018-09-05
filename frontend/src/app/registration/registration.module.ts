import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainRegistrationComponent} from './main-registration/main.registration.component';

@NgModule({
  declarations: [MainRegistrationComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class RegistrationModule { }
