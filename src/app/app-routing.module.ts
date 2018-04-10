import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainsComponent }      from './trains/trains.component';
import { LoginComponent }       from './login/login.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

const routes: Routes = [
  { path: 'trains', component: TrainsComponent },
  { path: '', redirectTo: '/trains', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: TrainDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}