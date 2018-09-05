import {Routes} from '@angular/router';
import {MainIndexComponent} from './index/main-index/main-index-component';
import {MainRegistrationComponent} from './registration/main-registration/main.registration.component';
import {MainLoginComponent} from './login/main-login/main.login.component';

export const routes: Routes = [
  {path: '', component: MainIndexComponent},
  {path: 'registration', component: MainRegistrationComponent},
  {path: 'login', component: MainLoginComponent}
];
