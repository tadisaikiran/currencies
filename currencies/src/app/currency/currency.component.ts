import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencyList: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getCurrency().subscribe({
      next: (data) => {
        this.currencyList = data;
      },
      error: (e) => console.error(e),
    });
  }
}
