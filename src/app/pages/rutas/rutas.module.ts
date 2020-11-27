import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasComponent } from './tarifas/tarifas.component';
import { RutahorariosComponent } from './rutahorarios/rutahorarios.component';
import { ListaComponent } from './lista/lista.component';
import { RutasComponent } from './rutas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RutasComponent, TarifasComponent, RutahorariosComponent, ListaComponent]
})
export class RutasModule { }