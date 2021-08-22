import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'DatingApp';
  users:any;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users=data;
      console.log(data);
    });
  }

}
