import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarroComponent} from './carro/carro.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    // Adicione aqui os componentes que você criar
  ],
  imports: [
    BrowserModule
    // Adicione aqui os módulos que você precisar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
