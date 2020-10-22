import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'
import { RestApiService } from '../services/rest-api.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})


export class AddressComponent implements OnInit {
  btnDisabled = false;

  currentAddress: any;

  constructor(    private router: Router,
    private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:9090/api/account/address'
      );

      if (
        JSON.stringify(data['address']) === '{}' &&
        this.data.message === ''
      ) {
        this.data.warning(
          'You have not entered your shipping address. Please enter your shipping address.'
        );
      }
      this.currentAddress = data['address'];
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  async updateAddress() {
    this.btnDisabled = true;
    try {
      const res = await this.rest.post(
        'http://localhost:9090/api/account/address',
        this.currentAddress
      );

      res['success']
        ? (this.data.success(res['message']), await this.data.getProfile())
        : this.data.error(res['message']);
        this.router.navigate(['profile']);
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

}
