import {Component, OnInit} from '@angular/core';
import {User} from '../../user/main-user/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-registration-component',
  templateUrl: 'main-registration-component.html',
  styleUrls: ['main-registration-component.css']
})
export class MainRegistrationComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: Http, private router: Router) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      id: [this.user.id],
      name: [this.user.name],
      email: [this.user.email],
      password: [this.user.password]
    });
  }

  registration(form) {
    const obj = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    };
    this.http.post('http://localhost:8080/registration', obj).subscribe(
      result => {
        if (result.statusText === 'OK') {
          this.router.navigateByUrl('/');
        }
      },
      error => console.log(error)
    );
  }
}
