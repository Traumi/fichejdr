import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';
import { NightModeService } from '../night-mode.service';

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

  constructor(private _flistService : FlistService, private _nmService : NightModeService ) { }

  ngOnInit() {
    this._nmService.init();

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
    console.log(this.night)
    this._flistService.setCookie("NIGHT", this.night, 7);
    this._nmService.init();
  }

  msgSuccess = [];
  updateCreator(id : number, crea : string) : void{
    this.msgSuccess = [];
    this._flistService.updateFicheCreator(id,crea,this._flistService.getCookie("TOKEN")).subscribe(res => {
      if(res.success) this.msgSuccess.push(res.success);
    });
  }

}
