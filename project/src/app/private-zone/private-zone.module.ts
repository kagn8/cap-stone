import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateZoneRoutingModule } from './private-zone-routing.module';
import { PrivateZoneComponent } from './private-zone.component';


@NgModule({
  declarations: [
    PrivateZoneComponent
  ],
  imports: [
    CommonModule,
    PrivateZoneRoutingModule
  ]
})
export class PrivateZoneModule { }
