import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NomeDoComponenteComponent} from "./nome-do-componente/nome-do-componente.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nome-do-componente', component: NomeDoComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
