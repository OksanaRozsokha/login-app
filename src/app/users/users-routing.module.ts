import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UsersRoutingModule { }
