import { Component, OnInit } from '@angular/core';
import{AuthenticationService, UserDetails} from '../services/authentication.service'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: UserDetails

  constructor(  private data: DataService) { }

  ngOnInit() {
  

}
}
