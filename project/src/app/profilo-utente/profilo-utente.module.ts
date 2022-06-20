import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiloUtenteRoutingModule } from './profilo-utente-routing.module';
import { ProfiloUtenteComponent } from './profilo-utente.component';


@NgModule({
  declarations: [
    ProfiloUtenteComponent
  ],
  imports: [
    CommonModule,
    ProfiloUtenteRoutingModule
  ]
})
export class ProfiloUtenteModule { }
