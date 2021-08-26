import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserServiceService,private toastr:ToastrService)
  {}
  canActivate():Observable<boolean> {
  return this.userService.currentuser$.pipe(
   map(user=>{
     if(user)
     return true;
     this.toastr.error("You shall not pass");
return false
   })
  )
  }
  
}
