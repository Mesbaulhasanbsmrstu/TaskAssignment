import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormGroup
} from '@angular/forms';
import {
  TadaService
} from '../services/tada.service';
import {
  jsPDF
} from "jspdf";
import html2canvas from 'html2canvas';

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

  @ViewChild('historyTable') historyTable!: ElementRef;

  constructor(private tadaService: TadaService, private router: Router) {

  }

  ngOnInit(): void {
    this.tadaService.getHistory().subscribe((data) => {
      this.history = data;
    });
  }

  paid(item: any) {
    item.paid = 1;
    // console.log(tadaPay.paid);
    this.tadaService.payTADA(item).subscribe(data => {
      if (data.message == "success") {
        this.tadaService.getHistory().subscribe((data) => {
          this.history = data;
        });
      } 
    })
  }

  downloadPdf() {
    const doc = new jsPDF();

    html2canvas(this.historyTable.nativeElement).then(canvas => {
      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let position = 0;

      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      doc.save(`ta/da_history_${new  Date().toLocaleString() }.pdf`);
    }); 
  }
}
