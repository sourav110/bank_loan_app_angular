import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showRegForm = signal<boolean>(false);
  http = inject(HttpClient);
  router = inject(Router);

  changeView() {
    debugger
    this.showRegForm.set(!this.showRegForm());
  }

  loginUserObj: LoginUser = new LoginUser();

  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  }) 

  onRegister() {
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer", this.loginUserObj).subscribe((res: any) => {
      console.log(res)
    })
  }

  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/login", this.loginFormGroup.value).subscribe((res: any) => {
      debugger
      if(res.result && res.data.userName != null && res.data.userName != "") {
        alert("Login Success");
        console.log(res.data);
        sessionStorage.setItem("bankAppUser", JSON.stringify(res.data));
        this.router.navigateByUrl("customer-list");
      } else {
        alert("Invalid Credentials");
      }

    })
  }

}

export class LoginUser {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  password: string;

  constructor() {
    this.userId = 0;
    this.userName = "";
    this.emailId = "";
    this.fullName = "";
    this.password = "";
  }
}
