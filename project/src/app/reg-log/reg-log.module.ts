import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegLogRoutingModule } from './reg-log-routing.module';
import { RegLogComponent } from './reg-log.component';


@NgModule({
  declarations: [
    RegLogComponent
  ],
  imports: [
    CommonModule,
    RegLogRoutingModule
  ]
})
export class RegLogModule { }
