import { Observable } from '../../../node_modules/rxjs';

import { Component } from '@angular/core';
import { MessageService, Message } from '../shared/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mu-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component..scss'],
  providers: [MessageService]
})

export class MessagesComponent 
{
  userId: string;
  messages: Observable<Message[]>;

  constructor(route: ActivatedRoute, messageService: MessageService) 
  { 
    route.paramMap.subscribe(params => this.userId = params.get('userId'));
    this.messages = messageService.getAll(); 
  }
}
