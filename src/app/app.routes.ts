import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { LoanApplicationListComponent } from './pages/loan-application-list/loan-application-list.component';
import { LoanApplicationFormComponent } from './pages/loan-application-form/loan-application-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'banker-list',
        component: BankerListComponent
    },
    {
        path: 'customer-list',
        component: CustomerListComponent
    },
    {
        path: 'loan-application-list',
        component: LoanApplicationListComponent
    },
    {
        path: 'loan-application-form',
        component: LoanApplicationFormComponent
    },
];
