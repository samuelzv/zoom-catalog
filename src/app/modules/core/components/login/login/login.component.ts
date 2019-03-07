import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';

import {LoginService} from '../../../services/login.service';

@Component({
	selector: 'zoom-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	errors: string[];

	constructor( private router: Router,
		private formBuilder: FormBuilder,
    private loginService: LoginService) {
	}

	ngOnInit() {
	  this.errors = [];
		this.loginForm = this.formBuilder.group({
			username: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});
	}

	onSubmit() {
	  this.errors = [];
	  const {username, password} = this.loginForm.controls;
	  this.loginService.login(username.value, password.value)
      .subscribe((successLogin: boolean) => {
        if (successLogin) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errors.push('Invalid credentials, please try again with (admin/admin)');
        }
      }, (err) => this.errors.push(err.message || err));
	}

	removeError(index: number) {
    if (index >= 0) {
      this.errors.splice(index, 1);
    }
  }
}
