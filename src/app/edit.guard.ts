import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { FlistService } from './flist.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];  route: ActivatedRouteSnapshot;

  constructor(private flistService: FlistService) {}

  canActivate() {
    return true;
    //return this.flistService.getCookie('token') != "";
  }
}
