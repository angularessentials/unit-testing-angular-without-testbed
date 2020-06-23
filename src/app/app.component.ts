import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.loggerService.info('test');
  }

  onError() {
    this.loggerService.error('Something went wrong');
  }
}
