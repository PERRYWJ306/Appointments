import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentPage } from './pages/appointment.page';
import { AppointmentModal } from './pages/appointment.modal';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/appointment',
    pathMatch: 'full'
  },
  {
    path: 'appointment',
    component: AppointmentPage
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
    AppointmentPage,
    AppointmentModal  
];
