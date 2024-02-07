import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  

  constructor(constructor(private formBuilder: FormBuilder) {
    this.stationForm = this.formBuilder.group({
      stationName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      installationStatus: ['', Validators.required]
    });
  }) { }

  

  onSubmit() {
    if (this.stationForm.valid) {
      console.log(this.stationForm.value); // Aqui você pode enviar os dados para onde precisar
    } else {
      // Marque os campos como "touched" para exibir mensagens de erro
      this.stationForm.markAllAsTouched();
    }
  }

}
