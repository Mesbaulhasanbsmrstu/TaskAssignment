import { Component, OnInit } from '@angular/core';
import { User } from 'models/user.model';
import { Observable, ReplaySubject } from 'rxjs';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};
   
private currentuserSource=new ReplaySubject<any>(1);
  currentuser$:any;
// currentuser$!: Observable<User>;
constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  this.getCurrentuser();
  //this.currentuser$ = this.userService.currentuser$;
  this.currentuser$=this.userService.currentuser$;
  }
  login()
  {
    this.userService.logIn(this.model).subscribe(data=> {
     
      console.log(data);
    // console.log("mesba");
  
    });
  
  }
  logOut()
  {
    this.userService.logOut();
 
  }
 
getCurrentuser()
{
  this.currentuser$=this.userService.currentuser$; 
 // console.log(this.currentuser$);
}

}
