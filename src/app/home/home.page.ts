import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService, Message } from '../services/chat.service';
//import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';
//import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  messages: Message[] = [];
  newMessage = '';
  userName = 'Martin Ayala';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(res => {
      this.messages = res;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(this.newMessage, this.userName);
      this.newMessage = '';
    }
  } 
}
