import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinoComponent } from './listagem-suino/listagem-suino.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { EditaPesoComponent } from './edita-peso/edita-peso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    ListagemSuinoComponent,
    ControlePesoComponent,
    CadastroPesoComponent,
    EditaPesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
