import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  products: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:9090/api/seller/products'
      );
      data['success']
        ? (this.products = data['products'])
        : this.data.error(data['message']);
        console.log(this.products[1].image);
    }
    catch (error) {
      this.data.error(error['message']);
    }
  }

}
