import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegLogRoutingModule } from './reg-log-routing.module';
import { RegLogComponent } from './reg-log.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegLogComponent
  ],
  imports: [
    CommonModule,
    RegLogRoutingModule,
    FormsModule, 
    HttpClientModule
  ]
})
export class RegLogModule { }
