import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FormPage } from './form/form.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'formulario', component: FormPage },
];
