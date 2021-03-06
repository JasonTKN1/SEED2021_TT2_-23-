import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { BalanceComponent } from './components/balance/balance.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'transfer-money', component: TransferMoneyComponent },
  { path: 'transactionView', component: TransactionHistoryComponent},
  { path: 'view-account-details', component: ViewAccountDetailsComponent },
  { path: 'balance', component: BalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
