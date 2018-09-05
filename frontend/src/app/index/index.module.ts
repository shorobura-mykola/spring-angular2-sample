import {NgModule} from '@angular/core';
import {MainIndexComponent} from './main-index/main-index-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [MainIndexComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class IndexModule {
}
