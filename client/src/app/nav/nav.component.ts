import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};
 loggedIn?: boolean;
constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }
  login()
  {
    this.userService.logIn(this.model).subscribe((data) => {
     
      console.log(data);
     this.loggedIn=true;
    },error=>{
      console.log(error);
    });
  
  }
  logOut()
  {
    this.loggedIn=false;
  }

}
