import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlotModel } from '../shared/slot.model';
import { Modal } from "ng2-modal";
import { AppointmentModal } from '../pages/appointment.modal';

@Component({
  selector: 'appointment-page',
  templateUrl: './app/pages/appointment.page.html',
  styleUrls: ['./app/pages/appointment.page.css']
})
export class AppointmentPage implements OnInit {
  private slots: Array<SlotModel>;
  private selectedSlot: SlotModel;
  @ViewChild('appointment') detail: AppointmentModal; 

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.slots = new Array<SlotModel>();

    var f = new Date();
    var t = new Date();

    for(var h = 9; h < 17; h++) {
        f.setHours(h, 0, 0, 0);
        t.setHours(h+1, 0, 0, 0);

        this.slots.push(new SlotModel(new Date(f), new Date(t)));       
    }   
  }

  onSelect(slot) {
    this.detail.open(slot);
  }
}