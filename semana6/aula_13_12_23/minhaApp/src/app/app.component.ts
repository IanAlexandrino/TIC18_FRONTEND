import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteComponent } from "./componente/componente.component";
import { MacacoComponent } from "./macaco/macaco.component";
import { AraraComponent } from "./arara/arara.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ComponenteComponent, MacacoComponent, AraraComponent]
})
export class AppComponent {
  title = 'minhaApp';
}
