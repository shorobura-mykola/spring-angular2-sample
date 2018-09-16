import {Component, OnInit} from '@angular/core';
import {User} from '../../user/main-user/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-registration-component',
  templateUrl: 'main-login-component.html',
  styleUrls: ['main-login-component.css']
})
export class MainLoginComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      name: [this.user.name],
      password: [this.user.password]
    });
  }

  login(form) {
    console.log(form.value);
    const obj = {
      name: form.value.name,
      password: form.value.password
    };
    this.httpClient.post('http://localhost:8080/login', obj).subscribe(
      result => {
        console.log(result);
        localStorage.setItem('token', result.token);
        this.router.navigateByUrl('/');
      },
      error => console.log(error)
    );
  }
}
