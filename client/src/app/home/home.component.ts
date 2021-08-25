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
  registerMode=false;
users:any;
  constructor(private userService: UserServiceService) { }


  ngOnInit(): void {
this.getUser();
  }

 registerToggle()
 {
   this.registerMode=!this.registerMode;
 }
 getUser()
 {
   this.userService.getUsers().subscribe((data) => {
     this.users=data;
     console.log(data);
   
   });
 }
 cancelregisterMode(event:boolean)
 {
this.registerMode=event;
 }
}
