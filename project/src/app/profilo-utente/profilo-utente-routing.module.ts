import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiloUtenteComponent } from './profilo-utente.component';

const routes: Routes = [{ path: '', component: ProfiloUtenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfiloUtenteRoutingModule { }
