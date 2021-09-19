import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TadaService } from '../services/tada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee: any = [];
  history: any = [];
  addHistoryForm!: FormGroup;
  constructor( private tadaService: TadaService) {
   
   }

  ngOnInit(): void {
    this.tadaService.getHistory().subscribe((data) => {
      this.history = data;
    });
  }

}
