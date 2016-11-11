import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { ModalModule } from 'ng2-modal';
import { AppointmentModal } from './pages/appointment.modal';

import { AppComponent }   from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule,
  ],
  declarations: [ 
    AppComponent,
    routedComponents 
  ],
  providers: [
    AppointmentModal
  ],  
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }

