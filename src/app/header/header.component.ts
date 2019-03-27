import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form = {login : "", pw : "", Slogin : "", Spw : "", Spw2 : ""}
  session = {login : null, token : null}
  subForm : boolean = false;

  constructor(private _flistService: FlistService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.check_token(this.getCookie("TOKEN"));
  }

  setCookie(cname, cvalue, exdays): void {
    this._flistService.setCookie(cname, cvalue, exdays);
  }

  getCookie(cname): string {
    return this._flistService.getCookie(cname);
  }

  displayLoginForm(): void {
    $('.ui.modal').modal('show')
  }

  closeLoginForm(): void {
    $('.ui.modal').modal('hide')
  }

  initSession() : boolean{
    if(this.session.token){
      return true;
    }
    return false;
  }

  login(): void{
    this._flistService.login(this.form.login, this.form.pw).subscribe(res => {
      if(res.token){
        this.setCookie("TOKEN",res.token,5);
        this.session.login = res.login;
        this.session.token = res.token;
        $('.ui.modal').modal('hide');
      }
    });
  }

  subscribe(): void{
    if(this.form.Spw.length < 4) return;
    if(this.form.Spw != this.form.Spw2) return;
    this._flistService.subscribe(this.form.Slogin, this.form.Spw).subscribe(res => {
      if(res.token){
        this.setCookie("TOKEN",res.token,5);
        this.session.login = res.login;
        this.session.token = res.token;
        $('.ui.modal').modal('hide');
      }
    });
  }

  logout(): void{
    this._flistService.delete_cookie("TOKEN");
    this.session.login = null;
    this.session.token = null;
    if(this._router.url.includes("edit")) this._router.navigate(['/']);
  }

  check_token(token : string): void{
    this._flistService.check_token(token).subscribe(res => {
      if(res.token){
        this.session.login = res.login;
        this.session.token = res.token;
        this.setCookie("TOKEN",res.token,5);
      }
    });
  }

}