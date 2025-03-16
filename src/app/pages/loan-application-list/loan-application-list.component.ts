import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IApplicationList } from '../../models/loan';

@Component({
  selector: 'app-loan-application-list',
  imports: [],
  templateUrl: './loan-application-list.component.html',
  styleUrl: './loan-application-list.component.css'
})
export class LoanApplicationListComponent {
  masterService = inject(MasterService);
  applicationList: IApplicationList [] = [];

  constructor() {
    if(this.masterService.appUser.role == "Customer") {
      this.getCustomerApplications();
    } else {
      this.getAssignedApplications();
    }
  }

  getCustomerApplications() {
    this.masterService.getCustomerApplications(this.masterService.appUser.userId).subscribe((res: IApiResponse) => {
      this.applicationList = res.data;
    })
  }

  getAssignedApplications() {
    this.masterService.getAssignedApplications(this.masterService.appUser.userId).subscribe((res: IApiResponse) => {
      this.applicationList = res.data;
    })
  }
}
