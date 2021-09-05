import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  get404Error()
  {
     this.http.get(`${environment.apiUrl}/Buggy/not-found`).subscribe(response=>{
console.log(response);
     },error=>{
       console.log(error);
     })
  
    }

    get400Error()
  {
     this.http.get(`${environment.apiUrl}/Buggy/bad-request`).subscribe(response=>{
console.log(response);
     },error=>{
       console.log(error);
     })
  
    } 

    get500Error()
  {
     this.http.get(`${environment.apiUrl}/Buggy/server-error`).subscribe((response:any)=>{
console.log(response);
     },error=>{
       console.log("abs");
     })
  
    }
    
    get401Error()
    {
       this.http.get(`${environment.apiUrl}/Buggy/auth`).subscribe(response=>{
  console.log(response);
       },error=>{
         console.log(error);
       })
    
      }

      get400ValidationError()
      {
         this.http.get(`${environment.apiUrl}/Buggy/not-found`).subscribe(response=>{
    console.log(response);
         },error=>{
           console.log(error);
         })
      
        }
   
  }


