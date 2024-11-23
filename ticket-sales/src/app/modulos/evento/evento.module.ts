import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { PrimeModule } from 'src/app/prime.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventoRoutingModule,
    PrimeModule
  ],
  exports: [
    PrimeModule
  ]
})
export class EventoModule { }
