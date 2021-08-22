import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${environment.apiUrl}/User`).pipe(map(data => { return data }))

  
  }
}
