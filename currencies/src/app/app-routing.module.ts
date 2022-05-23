import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  {
    path: 'currency/:id',
    component: CurrencyDetailComponent,
  },
  {
    path: 'currency',
    component: CurrencyComponent,
  },
  {
    path: '',
    redirectTo: 'currency',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
