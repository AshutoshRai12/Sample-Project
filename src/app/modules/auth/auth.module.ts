import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthRouterModule } from './auth.routes';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './form-errors/form-errors.component';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    AuthComponent,
    FormErrorsComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
})
export class AuthModule { }
