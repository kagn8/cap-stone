import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegLogComponent } from './reg-log.component';

const routes: Routes = [{ path: '', component: RegLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegLogRoutingModule { }
