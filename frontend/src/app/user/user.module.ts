import {NgModule} from '@angular/core';
import {routes} from '../app.routes';
import {RouterModule} from '@angular/router';
import {MainUserComponent} from './main-user/main.user.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [MainUserComponent],
  imports: [RouterModule.forChild(routes), BrowserModule],
  providers: []
})
export class UserModule {

}
