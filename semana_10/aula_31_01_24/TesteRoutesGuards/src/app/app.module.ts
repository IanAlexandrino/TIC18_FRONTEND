import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeDoComponenteComponent } from './nome-do-componente/nome-do-componente.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NumberViewerComponent } from './number-viewer/number-viewer.component';
import { NumberGeneratorService } from './number-generator.service'; // Importe o serviço

@NgModule({
  declarations: [
    AppComponent,
    NomeDoComponenteComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NumberViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    NumberGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
