import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form = {login : "", pw : ""}
  session = {login : null, token : null}
  token : String = "";

  constructor(private _flistService: FlistService) { 
  }

  ngOnInit() {
    this.token = this.getCookie("token");
    this.check_token(this.getCookie("TOKEN"));
  }

  setCookie(cname, cvalue, exdays): void {
    this._flistService.setCookie(cname, cvalue, exdays);
  }

  getCookie(cname): string {
    return this._flistService.getCookie(cname);
  }

  login(): void{
    this._flistService.login(this.form.login, this.form.pw).subscribe(res => {
      if(res.token){
        this.setCookie("TOKEN",res.token,5);
        this.session.login = res.login;
        this.session.token = res.token;
      }
    });
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