import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TadaService {

  constructor(private http: HttpClient) { }
  getEmployee() {
    return this.http.get(`${environment.apiUrl}/Employees`).pipe(map(data => { return data }))

  
  }
  getHistory() {
    return this.http.get(`${environment.apiUrl}/TADA`).pipe(map(data => { return data }))

  
  }
  addHistory(historyData:any) {
    return this.http.post<any>(`${environment.apiUrl}/TADA/add`, historyData).pipe(map(data => { return data }))
  }
  payTADA(payTADA: any)
  {
    return this.http.put<any>(`${environment.apiUrl}/TADA/pay`, payTADA).pipe(map(data => { return data }))
  }

}
