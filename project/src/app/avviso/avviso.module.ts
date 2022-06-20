import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvvisoRoutingModule } from './avviso-routing.module';
import { AvvisoComponent } from './avviso.component';


@NgModule({
  declarations: [
    AvvisoComponent
  ],
  imports: [
    CommonModule,
    AvvisoRoutingModule
  ]
})
export class AvvisoModule { }
