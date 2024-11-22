import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaPrincipalRoutingModule } from './vista-principal-routing.module';
import { VistaPrincipalComponent } from './vista-principal.component';


@NgModule({
  declarations: [
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    VistaPrincipalRoutingModule
  ]
})
export class VistaPrincipalModule { }
