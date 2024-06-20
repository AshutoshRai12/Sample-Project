import { Component } from '@angular/core';
import { authRoutes } from '../auth-routes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmailValidators } from '../../shared/validators/email.validators';
import { Router } from '@angular/router';
import { heroRoutes } from '../../hero/hero-route';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  authRoutes: typeof authRoutes;
  isButtonRegisterLoading: boolean;
  showPassword: boolean;
  registerForm: FormGroup;
  firstname: FormControl;
  email: FormControl;
  password: FormControl;
  terms: FormControl;
  constructor( private formBuilder: FormBuilder, private route : Router){
    this.authRoutes = authRoutes;
    this.showPassword = false;
    this.isButtonRegisterLoading = false;
    this.firstname = new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.email = new FormControl<string | null>('', [
      Validators.required,
      EmailValidators.isEmail(),
    ]);
    this.password = new FormControl<string | null>('', {
      validators: [
        Validators.minLength(4),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{4,}'),
      ],
      updateOn: 'change',
    });

    this.terms = new FormControl<boolean | null>(false, [Validators.requiredTrue]);
    this.registerForm = this.formBuilder.group({
      firstname: this.firstname,
      email: this.email,
      password: this.password,
      terms: this.terms,
    });
  }

  updatePassword() {
    this.password.updateValueAndValidity({ emitEvent: false });
  }
  togglePasswordType() {
    this.showPassword = !this.showPassword;
  }
  sendForm() {
    if(this.registerForm.invalid){
      const formValue = this.registerForm.getRawValue();
      localStorage.removeItem("UserData");
      console.log('ashu', formValue);
      localStorage.setItem('UserData', JSON.stringify(formValue));
      this.route.navigate([heroRoutes.dashboard]);
    }
   
  }
}
