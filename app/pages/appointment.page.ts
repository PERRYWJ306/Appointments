import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlotModel } from '../shared/slot.model';
import { Modal } from "ng2-modal";
import { AppointmentModal } from '../pages/appointment.modal';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'appointment-page',
  templateUrl: './app/pages/appointment.page.html',
  styleUrls: ['./app/pages/appointment.page.css']
})
export class AppointmentPage implements OnInit {
  private slots: Observable<SlotModel[]>;  
  private selectedSlot: SlotModel;
  @ViewChild('appointment') detail: AppointmentModal; 

  constructor(private router: Router, public http: Http) {

  }

  ngOnInit(): void {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3001/slots', { headers: headers })
      .map((res: Response) => res.json())
      .subscribe(
        res => {
          this.slots = res.data;
        },
        err => {
          alert(err);
        },
        () => console.log('')
      );
  }

  onSelect(slot) {
    this.detail.open(slot);
  }
}


