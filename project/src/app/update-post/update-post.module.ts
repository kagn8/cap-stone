import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePostRoutingModule } from './update-post-routing.module';
import { UpdatePostComponent } from './update-post.component';


@NgModule({
  declarations: [
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    UpdatePostRoutingModule
  ]
})
export class UpdatePostModule { }
