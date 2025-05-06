import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormData } from '../models/formdata.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private firestore: Firestore) {}

  saveFormData(data: FormData) {
    const formRef = collection(this.firestore, 'formData');
    return addDoc(formRef, {
      ...data,
      createdAt: Date.now()
    });
  }
}
