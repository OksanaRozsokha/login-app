import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [
    AuthModule
  ],
  declarations: []
})
export class CoreModule { }
