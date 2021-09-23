import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TadaService } from '../services/tada.service';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.css']
})
export class AddHistoryComponent implements OnInit {
  employeeName:any;
  addTaDaForm!: FormGroup;
  constructor(private tadaService:TadaService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.tadaService.getEmployee().subscribe(data=>{
      this.employeeName=data
    })

    this.addTaDaForm  = this.formBuilder.group({
      date: ['',Validators.required],
      name: ['sumit', Validators.required],
      travelCost: ['',Validators.required],
      lunchCost: ['',Validators.required],
      instrumentsCost: ['',Validators.required],
      paid: [0 ,Validators.required]
    })
  }
  
  get getControl() {
    return this.addTaDaForm.controls
  }

  submitTaDa() {
    let tadaHistory = {
      date: this.getControl.date.value,
      name: this.getControl.name.value,
      travelCost: this.getControl.travelCost.value,
      lunchCost: this.getControl.lunchCost.value,
      instrumentsCost: this.getControl.instrumentsCost.value,
      paid: this.getControl.paid.value
    }

    this.tadaService.addHistory(tadaHistory).subscribe(data => {
     // if (data.message == "success")
     // window. location. reload();
     //this.router.navigate(['/home'])
     this.router.navigate(['/home'])
     .then(() => {
       window.location.reload();
     });
    })
  }
}
