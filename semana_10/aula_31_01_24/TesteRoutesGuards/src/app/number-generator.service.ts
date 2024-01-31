import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

  constructor() { }

  generateNumbers(): Observable<number> {
    return interval(100) // Emite um número a cada 100ms
      .pipe(
        take(100), // Emite apenas 100 números
      );
  }
}
