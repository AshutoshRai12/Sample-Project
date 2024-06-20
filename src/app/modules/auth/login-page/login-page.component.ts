import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { authRoutes } from '../auth-routes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmailValidators } from '../../shared/validators/email.validators';
import { Router } from '@angular/router';
import { heroRoutes } from '../../hero/hero-route';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  authRoutes: typeof authRoutes;
  isButtonLogInLoading: boolean;
  logInForm: FormGroup;
  email: FormControl;
  password: FormControl;
  window: Window;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private document : Document,
    private renderer: Renderer2,
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    this.authRoutes = authRoutes;
    this.window = this.document.defaultView as Window;
    this.isButtonLogInLoading = false;
    this.email = new FormControl<string | null>('', [
      Validators.required,
      EmailValidators.isEmail(),
    ]);
    this.password = new FormControl<string | null>('', [Validators.required]);
    this.logInForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

 
  ngAfterViewInit() {
    this.renderer.addClass(this.document.body, 'bg-linear');
  }

  // This function is  Validate user and allow login.
  sendForm(){
        const  data:any =    localStorage.getItem('UserData')
       const userData = JSON.parse(data);
        if(userData.email === this.logInForm.value.email && userData.password === this.logInForm.value.password){
         this.router.navigate([heroRoutes.dashboard]);
        }
  }
}
