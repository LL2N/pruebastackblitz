import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {path: '', redirectTo: 'pages', pathMatch: 'full'},
 {path: 'pages', component: PagesComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forChild(routes)],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
