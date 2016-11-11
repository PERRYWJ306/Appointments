"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_modal_1 = require("ng2-modal");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppointmentModal = (function () {
    function AppointmentModal(http) {
        this.http = http;
    }
    AppointmentModal.prototype.ngOnInit = function () {
    };
    AppointmentModal.prototype.ngAfterContentInit = function () {
    };
    AppointmentModal.prototype.ngAfterContentChecked = function () {
        // contentChild is updated after the content has been checked
    };
    AppointmentModal.prototype.submit = function (f) {
        if (f.valid || f.touched) {
            this.slot.fullName = this.fullName;
            this.slot.contactPhone = this.contactPhone;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            var body = JSON.stringify(this.slot);
            this.http.put('http://localhost:3001/slot/' + this.slot._id, body, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //alert(res);
            }, function (err) {
                alert(err);
            }, function () { return console.log(''); });
        }
        this.details.close();
    };
    AppointmentModal.prototype.open = function (slot) {
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
    };
    __decorate([
        core_1.ViewChild('details'), 
        __metadata('design:type', ng2_modal_1.Modal)
    ], AppointmentModal.prototype, "details", void 0);
    AppointmentModal = __decorate([
        core_1.Component({
            selector: "appointment-modal",
            templateUrl: './app/pages/appointment.modal.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppointmentModal);
    return AppointmentModal;
}());
exports.AppointmentModal = AppointmentModal;
//# sourceMappingURL=appointment.modal.js.map