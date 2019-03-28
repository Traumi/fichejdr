import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  night : boolean;
  accounts = [];
  persos = [];
  admin = false;
  checkAdmin;

  constructor(private _flistService : FlistService ) { }

  ngOnInit() {
    this.night = false;
    if(this._flistService.getCookie("NIGHT") == "true") this.night = true;

    this._flistService.setCookie("NIGHT", this.night, 7);
    this._flistService.getAllProfils().subscribe(res => {
      this.accounts = res;
    });
    this._flistService.getAllFiches().subscribe(res => {
      this.persos = res;
    });
    this.isAdmin();
    this.checkAdmin = setInterval(() => {
      this.isAdmin();
    }, 1250);
  }

  ngOnDestroy() {
    if (this.checkAdmin) {
      clearInterval(this.checkAdmin);
    }
  }

  isAdmin() : void{
    if(!(this._flistService.getCookie("TOKEN") == null || this._flistService.getCookie("TOKEN") == "")){
      this._flistService.check_token(this._flistService.getCookie("TOKEN")).subscribe(res => {
        if(res.admin){
          if(res.admin == 1) this.admin = true;
          else this.admin = false;
        }else{
          this.admin = false;
        }
      });
    }else{
      this.admin = false;
    }
  }

  changeNight() : void{
    this._flistService.setCookie("NIGHT", this.night, 7);
  }

}
