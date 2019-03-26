import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { FlistService } from './flist.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];  route: ActivatedRouteSnapshot;

  constructor(private _flistService: FlistService) {}

  canActivate(): Observable<boolean> {
    let token = this._flistService.getCookie('TOKEN');
    return this._flistService.check_token(token).pipe(
      map((test: any) => {
        console.log(test)
        return test.token != null;
      })
    )
  }
}
