import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromhomecomponent:any;
  @Output() cancleRegister=new EventEmitter();

model:any={};
  constructor(private userService:UserServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  register()
  {
    
    this.userService.Registration(this.model).subscribe(data=> {
     
      console.log(data);
      this.cancle();
    // console.log("mesba");
   
  
    },error=>{
      this.toastr.error(error.error);
      
    });
  }
  cancle()
  {
   this.cancleRegister.emit(false);
  }

}
