import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(message: any) {
    console.log(message);
  }

  error(message: any) {
    console.error(message);
  }
}
