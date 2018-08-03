import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from '../../../node_modules/rxjs';

export interface Message
{
  recipient:number;
  sender:string;
  subject:string;
  messageBody:string;
}

@Injectable()
export class MessageService {

  constructor(private http: HttpClient){}

  getAll(): Observable<Message[]>
  {
    return this.http.get<Message[]>('/assets/data/messages.json');
  }
}
