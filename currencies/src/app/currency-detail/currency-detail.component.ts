import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css'],
})
export class CurrencyDetailComponent implements OnInit {
  currencyDetail: any;
  currency: any;
  currencyId: any;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.currencyId = this.route.snapshot.paramMap.get('id');
    this.appService.getCurrencyList(this.currencyId).subscribe({
      next: (data) => {
        this.currencyDetail = data;
        this.currency = this.currencyDetail.eur[this.currencyId];
      },
      error: (e) => console.error(e),
    });
  }
}
