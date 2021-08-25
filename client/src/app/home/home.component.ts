import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  this.getUser();
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
  getUser()
  {
    this.userService.getUsers().subscribe((data) => {
      this.users=data;
      console.log(data);
    
    });
  }

}
