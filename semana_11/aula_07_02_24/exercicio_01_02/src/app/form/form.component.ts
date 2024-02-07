import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @ViewChild('formulario') aviaoForm: NgForm | undefined;

  onSubmit(formulario: NgForm){
    if(this.aviaoForm){

      let {id, modelo, capacidade, empresa} = formulario.value;
      console.log(id, modelo, capacidade, empresa);

    }
    

  }

}
