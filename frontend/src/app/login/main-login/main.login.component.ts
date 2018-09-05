import {Component, OnInit} from '@angular/core';
import {User} from '../../user/main-user/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-registration-component',
  templateUrl: 'main-login-component.html',
  styleUrls: ['main-login-component.css']
})
export class MainLoginComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: Http, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      id: [this.user.id],
      name: [this.user.name],
      password: [this.user.password]
    });
  }
  login(form) {
    const obj = {
      id: form.value.id,
      name: form.value.name,
      password: form.value.password
    };
    this.http.post('http://localhost:8080/login', obj).subscribe(
      result => {
        console.log(result);
        this.router.navigateByUrl('/');
      },
      error => console.log(error)
    );
  }
}
