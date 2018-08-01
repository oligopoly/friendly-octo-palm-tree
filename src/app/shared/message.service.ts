import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})

export class Message
{
  constructor(
    public userId:number,
    public sender:number,
    public subject:string,
    public messageBody:string){}
}
export class MessageService {

  constructor(){}

  getAll(): Message
  {
    return (new Message(910,911,"subject","body" ));
  }
}
