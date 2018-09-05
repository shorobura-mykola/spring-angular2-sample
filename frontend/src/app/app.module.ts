import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {HttpModule} from '@angular/http';
import {RegistrationModule} from './registration/registration.module';
import {LoginModule} from './login/login.module';
import {IndexModule} from './index/index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    IndexModule,
    UserModule,
    RegistrationModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
