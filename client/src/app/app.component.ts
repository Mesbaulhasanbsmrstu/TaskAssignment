import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServiceService } from './services/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'DatingApp';
  users:any;
  constructor(private userService: UserServiceService) { }


  ngOnInit(): void {
  
  this.setCurrentuser();
  }

  setCurrentuser()
  {
    var users=localStorage.getItem('user')!;
    const user:any=JSON.parse(users);
   // var user=localStorage.getItem('user');
    if(user)
    {
      this.userService.setCurrentUser(user);
      console.log(user);
    }

  }
  
  
}
