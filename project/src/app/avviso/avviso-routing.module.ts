import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvvisoComponent } from './avviso.component';

const routes: Routes = [{ path: '', component: AvvisoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvvisoRoutingModule { }
