import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from '../number-generator.service';

@Component({
  selector: 'app-number-viewer',
  templateUrl: './number-viewer.component.html',
  styleUrl: './number-viewer.component.css'
})
export class NumberViewerComponent {

  numbers: number[] = [];

  constructor(private numberGeneratorService: NumberGeneratorService) {}

  ngOnInit(): void {
    this.numberGeneratorService.generateNumbers().subscribe(
      number => {
        this.numbers.push(number + 1); // Adiciona 1 para exibir números de 1 a 100
      }
    );
  }

}
