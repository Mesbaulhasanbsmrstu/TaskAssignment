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

  users:any=[];
 
  constructor( ){

  }
  ngOnInit(): void{
 
 
  }
  
 
  
}
