import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaLogadaComponent } from './area-logada.component';
import { SharedModule } from '../shared/shared.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';



@NgModule({
  declarations: [
    AreaLogadaComponent
  ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    SharedModule,
    // importando a pasta shared para renderizar componentes como header e footer
  ]
})
export class AreaLogadaModule { }
