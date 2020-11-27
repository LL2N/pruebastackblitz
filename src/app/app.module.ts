import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { Routes } from '@angular/router';

const routes: Routes = [
 {path: '', redirectTo: 'pages', pathMatch: 'full'}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PagesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
