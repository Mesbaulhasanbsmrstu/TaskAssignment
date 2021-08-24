import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${environment.apiUrl}/User`).pipe(map(data => { return data }))

  
  }
  logIn(model:any)
  {
    return this.http.post(`${environment.apiUrl}/Account/login`,model).pipe(
      map(data=>{
     const user=data;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
        }
  
    }
    )
    )
   

  }

  lohOut()
  {
    localStorage.removeItem('user');

  }
}
