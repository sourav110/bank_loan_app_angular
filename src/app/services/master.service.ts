import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse, IApplicationList, IAppUser, ILoan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);
  appUser!: IAppUser;

  constructor() {
    const loginUser = sessionStorage.getItem("bankAppUser");
    if (loginUser != null) {
      this.appUser = JSON.parse(loginUser);
    }
  }

  onSaveLoan(obj: ILoan) {
    debugger
    return this.http.post<IApiResponse>("https://projectapi.gerasim.in/api/BankLoan/AddNewApplication", obj);
  }

  getCustomerApplications(customerId: number) {
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/BankLoan/GetMyApplications?customerId=" + customerId);
  }

  getAssignedApplications(bankEmpId: number) {
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/BankLoan/GetApplicationAssigneedToMe?bankEmployeeId=" + bankEmpId);
  }
}
