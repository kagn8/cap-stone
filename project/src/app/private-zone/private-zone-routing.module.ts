import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateZoneComponent } from './private-zone.component';

const routes: Routes = [{ path: '', component: PrivateZoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateZoneRoutingModule { }
