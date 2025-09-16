import { Component } from '@angular/core';
import { DatePipe, DecimalPipe, KeyValuePipe } from '@angular/common';

import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe, KeyValuePipe]
})
export class AppComponent {
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.27,
    newYork: 18.12,
    paris: 72.12,
    chicago: 65.07,
  };

  historicTemperatures = ([25, 37, 19, -4, 28, 21, 19, 28, 33, 31]).sort((a, b) => a > b ? 1 : -1);

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}