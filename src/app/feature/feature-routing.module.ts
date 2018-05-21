import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {path: 'feature', component: FeatureComponent}
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
export class FeatureRoutingModule { }
