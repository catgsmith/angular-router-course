import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';
import {AuthStore} from '../services/auth.store';
import {Subscription} from "rxjs";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login() {
    const val = this.form.value;

    this.subscription  = this.auth.login(val.email, val.password).subscribe(() => {}, this.handleLoginError);
  }

  handleLoginError(err: any) {
    alert("Login failed!");
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
