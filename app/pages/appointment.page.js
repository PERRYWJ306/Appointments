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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var appointment_modal_1 = require('../pages/appointment.modal');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppointmentPage = (function () {
    function AppointmentPage(router, http) {
        this.router = router;
        this.http = http;
    }
    AppointmentPage.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://localhost:3001/slots', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.slots = res.data;
        }, function (err) {
            alert(err);
        }, function () { return console.log(''); });
    };
    AppointmentPage.prototype.onSelect = function (slot) {
        this.detail.open(slot);
    };
    __decorate([
        core_1.ViewChild('appointment'), 
        __metadata('design:type', appointment_modal_1.AppointmentModal)
    ], AppointmentPage.prototype, "detail", void 0);
    AppointmentPage = __decorate([
        core_1.Component({
            selector: 'appointment-page',
            templateUrl: './app/pages/appointment.page.html',
            styleUrls: ['./app/pages/appointment.page.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AppointmentPage);
    return AppointmentPage;
}());
exports.AppointmentPage = AppointmentPage;
//# sourceMappingURL=appointment.page.js.map