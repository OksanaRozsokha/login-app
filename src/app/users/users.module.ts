import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpModule
  ],
  exports: [
    UsersRoutingModule
  ],
  declarations: [UsersListComponent],
  providers: [UsersService]
})
export class UsersModule { }
