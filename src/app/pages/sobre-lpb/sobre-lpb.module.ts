import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { DYOComponent } from './dyo/dyo.component';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuienessomosComponent, DYOComponent, HistoriaComponent]
})
export class SobreLPBModule { }