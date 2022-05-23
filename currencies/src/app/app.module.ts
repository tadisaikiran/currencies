import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { CurrencyComponent } from './currency/currency.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  declarations: [AppComponent, CurrencyDetailComponent, CurrencyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
