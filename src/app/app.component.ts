import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'bank_loan_app';

  bankAppUser: any;
  router = inject(Router);

  constructor() {
    
  }

  ngOnInit(): void {
    debugger
    const loginUser = sessionStorage.getItem("bankAppUser");
    if (loginUser != null) {
      this.bankAppUser = JSON.parse(loginUser);
      debugger
      if (this.bankAppUser.role == "Customer") {
        this.router.navigateByUrl("loan-application-list");
      } else {
        this.router.navigateByUrl("customer-list");
      }
    }
  }


  onLogout() {
    debugger
    sessionStorage.removeItem("bankAppUser");
    this.router.navigateByUrl("login");
  }
}
