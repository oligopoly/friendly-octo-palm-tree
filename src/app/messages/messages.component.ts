import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, Message } from '../shared/message.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'mu-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component..scss'],
  providers: [MessageService]
})
export class MessagesComponent 
{
  userId: string;
  message: Message;

  constructor(route: ActivatedRoute, messageService: MessageService) 
  { 
    route.paramMap.subscribe(params => this.userId = params.get('userId'));
    this.message = messageService.getAll();
  }
}
