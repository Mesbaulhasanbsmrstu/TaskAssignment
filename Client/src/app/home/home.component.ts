import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup
} from '@angular/forms';
import {
  TadaService
} from '../services/tada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee: any = [];
  history: any = [];
  employeeId: any = [];
  addHistoryForm!: FormGroup;
  constructor(private tadaService: TadaService,private router: Router) {

  }

  ngOnInit(): void {
    this.tadaService.getHistory().subscribe((data) => {
      this.history = data;
    });
  }
  paid(id:string,date:string,name:string,travelCost:string,lunchCost:string,instrumentsCost:string,totalCost:string,paid:any) {
    
    let tadaPay = {
      id:id,
      date: date,
      name: name,
      travelCost:travelCost,
      lunchCost: lunchCost,
      instrumentsCost: instrumentsCost,
      totalCost:totalCost,
      paid: paid
    }
   // console.log(tadaPay.paid);
    this.tadaService.payTADA(tadaPay).subscribe(data => {
    
      
     if(data.message=="success")
     this.ngOnInit();
    
      
    })
  }

}
