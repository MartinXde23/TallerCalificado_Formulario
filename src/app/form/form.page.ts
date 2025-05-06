import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService } from '../services/form.service';
import { FormData } from '../models/formdata.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage {
  formData: FormData = {
    name: '',
    email: '',
    age: 0,
    birthDate: '',
    gender: '',
    hobbies: [],
    country: '',
    comments: '',
    createdAt: 0
  };

  hobbyOptions = ['Leer', 'Viajar', 'Música', 'Deportes', 'Cine'];

  constructor(private formService: FormService) {}

  submitForm() {
    this.formService.saveFormData(this.formData).then(() => {
      alert('Formulario enviado con éxito');
      this.formData = {
        name: '',
        email: '',
        age: 0,
        birthDate: '',
        gender: '',
        hobbies: [],
        country: '',
        comments: '',
        createdAt: 0
      };
    });
  }
}
