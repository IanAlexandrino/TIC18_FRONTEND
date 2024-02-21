import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdicionarComponent } from './form-adicionar/form-adicionar.component';
import { ComponentelistarComponent } from './componentelistar/componentelistar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAdicionarComponent,
    ComponentelistarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
