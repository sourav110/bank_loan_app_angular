import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IAppUser } from '../../models/loan';

@Component({
  selector: 'app-loan-application-form',
  imports: [ReactiveFormsModule],
  templateUrl: './loan-application-form.component.html',
  styleUrl: './loan-application-form.component.css'
})
export class LoanApplicationFormComponent {

  formBuilder = inject(FormBuilder);
  loanAppForm: FormGroup = new FormGroup({});
  masterService = inject(MasterService);

  constructor() {
    this.initializeLoanAppForm();

    const bankAppUser = sessionStorage.getItem("bankAppUser");
    if(this.masterService.appUser) {
      this.loanAppForm.controls['customerId'].setValue(this.masterService.appUser.userId);
    }
  }

  initializeLoanAppForm() {
    this.loanAppForm = this.formBuilder.group({
      applicantID: [0],
      fullName: [''],
      applicationStatus: [''],
      panCard: [''],
      dateOfBirth: [''],
      email: [''],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      annualIncome: [0],
      employmentStatus: [''],
      creditScore: [0],
      assets: [''],
      dateApplied: [new Date()],
      loans: this.formBuilder.array([this.createLoanGroup()]),
      customerId: [0]
    })
  }

  createLoanGroup(): FormGroup {
    return this.formBuilder.group({
      loanID: [0],
      applicantID: [0],
      bankName: [''],
      loanAmount: [0],
      emi: [0]
    })
  }

  get loanList(): FormArray {
    return this.loanAppForm.get('loans') as FormArray;
  }

  addNewLoan() {
    this.loanList.push(this.createLoanGroup());
  }

  removeLoanItem(index: number) {
    debugger
    this.loanList.removeAt(index);
  }

  onSaveLoan() {
    const formValue = this.loanAppForm.value;
    this.masterService.onSaveLoan(formValue).subscribe((res: IApiResponse) => {
      if(res.result) {
        alert('Submitted Successfully');
      } else {
        alert(res.message);
      }
    })
  }
}
