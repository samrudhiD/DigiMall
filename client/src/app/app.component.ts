import { Component } from '@angular/core';

import { AuthenticationService} from './services/authentication.service'
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blossom';

searchTerm = '';
isCollapsed = true;

constructor(private router: Router, private data: DataService) {
  this.data.cartItems = this.data.getCart().length;
  this.data.getProfile();
}

get token() {
  return localStorage.getItem('token');
}

collapse() {
  this.isCollapsed = true;
}

closeDropdown(dropdown) {
  dropdown.close();
}

logout() {
  this.data.user = {};
  this.data.cartItems = 0;
  localStorage.clear();
  this.router.navigate(['']);
}

search() {
  if (this.searchTerm) {
    this.collapse();
    this.router.navigate(['search', { query: this.searchTerm }]);
  }
}
}
