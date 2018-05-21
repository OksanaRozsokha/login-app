import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path: '', component: SignInComponent}
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AuthRouterModule { }
