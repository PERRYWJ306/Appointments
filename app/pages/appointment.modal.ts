import { AfterContentChecked, AfterContentInit, Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Modal } from "ng2-modal";
import { SlotModel } from '../shared/slot.model';
import { NgForm } from "@angular/forms";
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: "appointment-modal",
  templateUrl: './app/pages/appointment.modal.html',
})
export class AppointmentModal implements OnInit, AfterContentChecked, AfterContentInit {  
    @ViewChild('details') details: Modal; 

    private slot: SlotModel;
    private _id: Number;
    private from: Date;
    private to: Date;
    private fullName: string;
    private contactPhone: string;

    constructor(public http: Http) {      
    }

    ngOnInit(): void {
    }

    ngAfterContentInit() {
       
    }

    ngAfterContentChecked() {
        // contentChild is updated after the content has been checked

    } 

    submit(f: NgForm) {
        if(f.valid || f.touched) {
            this.slot.fullName = this.fullName;
            this.slot.contactPhone = this.contactPhone;

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let body = JSON.stringify(this.slot);

            this.http.put('http://localhost:3001/slot/' + this.slot._id, body, { headers: headers })
                .map((res: Response) => res.json())
                .subscribe(
                        res => {
                            //alert(res);
                        },
                        err => {
                            alert(err);
                        },
                        () => console.log('')                
                );
         }
        
        this.details.close();
    }

    open(slot: SlotModel) {
        this.slot = slot;

        this._id = slot._id;
        this.from = slot.from;
        this.to = slot.to;
        this.fullName = slot.fullName;
        this.contactPhone = slot.contactPhone;
        this.details.title = "Appointment Details";
        this.details.cancelButtonLabel = "Cancel";
        this.details.submitButtonLabel = "Save";

        this.details.open();
    }
}
