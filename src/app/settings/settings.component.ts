import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  night : boolean;

  constructor(private _flistService : FlistService ) { }

  ngOnInit() {
    this.night = false;
    if(this._flistService.getCookie("NIGHT") == "true") this.night = true;

    this._flistService.setCookie("NIGHT", this.night, 7);
  }

  changeNight() : void{
    this._flistService.setCookie("NIGHT", this.night, 7);
  }

}
