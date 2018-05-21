import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule
  ],

  exports: [
    SignInComponent,
    RouterModule
  ],

  declarations: [SignInComponent]
})

export class AuthModule { }
