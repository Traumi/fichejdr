import { Injectable, OnInit } from '@angular/core';
import { FlistService } from './flist.service';

@Injectable({
  providedIn: 'root'
})
export class NightModeService{

  night_mode : any;

  constructor(private _flistService : FlistService) { }

  init() : void{
    this.night_mode = this._flistService.getCookie("NIGHT");
    if(this.night_mode == "true"){
      document.getElementsByTagName("body").item(0).classList.add("dark");
    }else{
      document.getElementsByTagName("body").item(0).classList.remove("dark");
    }
  }
}
