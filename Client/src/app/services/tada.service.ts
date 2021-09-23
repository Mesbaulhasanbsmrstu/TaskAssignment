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
    return this.http.get(`https://localhost:5001/api/Employees`).pipe(map(data => { return data }))

  
  }
  getHistory() {
    return this.http.get(`https://localhost:5001/api/TADA`).pipe(map(data => { return data }))

  
  }
  addHistory(historyData:any) {
    return this.http.post<any>(`https://localhost:5001/api/TADA/add`, historyData).pipe(map(data => { return data }))
  }
  payTADA(payTADA: any)
  {
    return this.http.put<any>(`https://localhost:5001/api/TADA/pay`, payTADA).pipe(map(data => { return data }))
  }

}
