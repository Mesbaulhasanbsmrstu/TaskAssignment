import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Observable, ReplaySubject } from 'rxjs';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};
username:any;
private currentuserSource=new ReplaySubject<any>(1);
  currentuser$:any;
// currentuser$!: Observable<User>;
constructor(private userService: UserServiceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  this.getCurrentuser();
  var users=localStorage.getItem('user')!;
    const user:any=JSON.parse(users);
    this.username=JSON.parse(users).username;
  //this.currentuser$ = this.userService.currentuser$;
 // this.currentuser$=this.userService.currentuser$;
  }
  login()
  {
    this.userService.logIn(this.model).subscribe(data=> {
     this.router.navigateByUrl('/members');
      console.log(data);
      this.username=this.model.username;
    // console.log("mesba");
   
  
    },error=>{
      this.toastr.error(error.error);
      
    });
  
  }

  logOut()
  {
    this.userService.logOut();
    this.router.navigateByUrl('/');
  }
 
getCurrentuser()
{
  this.currentuser$=this.userService.currentuser$; 
 // console.log(this.currentuser$);
}


}
