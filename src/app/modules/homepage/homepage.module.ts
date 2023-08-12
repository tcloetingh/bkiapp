import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { LandingzoneComponent } from './landingzone/landingzone.component';


@NgModule({
  declarations: [
    LandingzoneComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [LandingzoneComponent]
})
export class HomepageModule { }
