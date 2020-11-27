import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoticiasComponent, ComunicadosComponent]
})
export class NycModule { }