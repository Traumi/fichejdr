import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';

@Component({
  selector: 'app-flist',
  templateUrl: './flist.component.html',
  styleUrls: ['./flist.component.css']
})
export class FlistComponent implements OnInit {

  list : any;

  constructor(private _flistService : FlistService) { }

  ngOnInit() {
    this.getAllFiches();
  }

  getAllFiches() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.list = res;
    });
  }

  addPerso(){
    this._flistService.addPerso().subscribe(res => {
      this.list = res;
    });
  }

}
