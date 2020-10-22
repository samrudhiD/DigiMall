import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RestApiService } from '../services/rest-api.service';
import { DataService } from '../services/data.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    email: '';
    password: '';
    
    isSeller:false

    btnDisabled = false;

  constructor(
    private router: Router,
    private rest: RestApiService,
    private data: DataService,
    ) {}

    ngOnInit() {}

  
    validate() {
      if (this.email) {
        if (this.password) {
          return true;
        } else {
          this.data.error('Password is not entered');
        }
      } else {
        this.data.error('Email is not entered.');
      }
    }
    
    async login() {
      this.btnDisabled = true;
      try {
        if (this.validate()) {
          const data = await this.rest.post(
            'http://localhost:9090/api/account/login',
            {
              email: this.email,
              password: this.password,
            },
          );
          if (data['success']) {
            localStorage.setItem('token', data['token']);
            await this.data.getProfile();
            this.router.navigate(['profile']);
          } else {
            this.data.error(data['message']);
          }
        }
      } catch (error) {
        this.data.error(error['message']);
      }
      this.btnDisabled = false;
    }
}