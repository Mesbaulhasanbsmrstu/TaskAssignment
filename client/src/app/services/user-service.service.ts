import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private currentuserSource=new ReplaySubject<any>(1);
currentuser$=this.currentuserSource.asObservable();

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${environment.apiUrl}/User`).pipe(map(data => { return data }))

  
  }

  logIn(model:any)
  {
    return this.http.post(`${environment.apiUrl}/Account/login`,model).pipe(
      map(data=>{
     const user:any=data;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentuserSource.next(user);
        }
    
  
    }
    )
    )
  
    
  }

  Registration(model:any)
  {
    return this.http.post(`${environment.apiUrl}/Account/register`,model).pipe(
      map(data=>{
     const user:any=data;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentuserSource.next(user);
        }
        return data;
    
  
    }
    )
    )
  
    
  }
  setCurrentUser(user:any)
  {
    this.currentuserSource.next(user);
  }

  logOut()
  {
    localStorage.removeItem('user');
   
    this.currentuserSource.next(null);

  }
}
