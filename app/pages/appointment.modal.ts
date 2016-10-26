import { AfterContentChecked, AfterContentInit, Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Modal } from "ng2-modal";
import { SlotModel } from '../shared/slot.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: "appointment-modal",
  templateUrl: './app/pages/appointment.modal.html',
})
export class AppointmentModal implements OnInit, AfterContentChecked, AfterContentInit {  
    @ViewChild('details') details: Modal; 
    //@ViewChild('f') form: NgForm;

    private slot: SlotModel;
    private from: Date;
    private to: Date;
    private fullName: string;
    private contactPhone: string;

    constructor() {      
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
        }
        
        this.details.close();
    }

    open(slot: SlotModel) {
        this.slot = slot;

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
