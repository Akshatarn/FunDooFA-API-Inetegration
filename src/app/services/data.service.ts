import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  recievedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: string) {
    this.messageSource.next(message)
  }

}
