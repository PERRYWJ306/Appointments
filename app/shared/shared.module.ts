import { NgModule } from '@angular/core';
import { SlotModel } from '../shared/slot.model';

export const sharedComponents = [
  SlotModel
];

@NgModule({
  declarations: sharedComponents, 
  exports: sharedComponents
})
export class SharedModule { }