import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { formattedError } from '@angular/compiler';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form = {login : "", pw : "", Slogin : "", Spw : "", Spw2 : ""}
  formError = [];
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
    this.formError = [];
    this._flistService.login(this.form.login, this.form.pw).subscribe(res => {
      if(res.token){
        this.setCookie("TOKEN",res.token,5);
        this.session.login = res.login;
        this.session.token = res.token;
        $('.ui.modal').modal('hide');
      }
      if(res.error){
        this.formError.push(res.error);
      }
    });
  }

  subscribe(): void{
    this.formError = [];
    if(this.form.Spw == null || this.form.Spw == null || this.form.Slogin == "" || this.form.Slogin == null){
      this.formError.push("Vous devez remplir tout les champs");
    } 
    if(this.form.Spw.length < 4){
      this.formError.push("Votre mot de passe doit contenir au moins 4 caractères");
    }
    if(this.form.Slogin.length < 3){
      this.formError.push("Votre pseudo doit contenir au moins 3 caractères");
    } 
    if(this.form.Spw != this.form.Spw2){
      this.formError.push("Les mots de passe entrés sont différents");
    } 
    if(this.formError.length > 0) return;
    this._flistService.subscribe(this.form.Slogin, this.form.Spw).subscribe(res => {
      console.log(res)
      if(res.token){
        this.setCookie("TOKEN",res.token,5);
        this.session.login = res.login;
        this.session.token = res.token;
        $('.ui.modal').modal('hide');
      }
      if(res.error){
        this.formError.push(res.error);
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
    if(token == null || token == "") return;
    this._flistService.check_token(token).subscribe(res => {
      if(res.token){
        this.session.login = res.login;
        this.session.token = res.token;
        this.setCookie("TOKEN",res.token,5);
      }
    });
  }

}