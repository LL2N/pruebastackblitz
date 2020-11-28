import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { PagesComponent } from "./pages.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "", redirectTo: "nyc", pathMatch: "full" },
      {
        path: "nyc",
        loadChildren: () => import("./nyc/nyc.module").then(m => m.NycModule)
      },
      {
        path: "rutas",
        loadChildren: () => import("./rutas/rutas.module").then(m => m.RutasModule)
      },
      {
        path: "sobre-lpb",
        loadChildren: () =>
          import("./sobre-lpb/sobre-lpb.module").then(m => m.SobreLPBModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterTestingModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [PagesComponent]
})
export class PagesModule {}
