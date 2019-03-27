import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';

@Component({
  selector: 'app-flist',
  templateUrl: './flist.component.html',
  styleUrls: ['./flist.component.css']
})
export class FlistComponent implements OnInit {

  list : any;
  new_perso = {prenom : "", nom : ""};
  is_error = false;

  constructor(private _flistService : FlistService) { }

  ngOnInit() {
    this.getAllFiches();
  }

  getAllFiches() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.list = res;
    });
  }

  addPerso() : void{
    if(this.new_perso.prenom.length < 1 && this.new_perso.nom.length < 1){
      this.is_error = true;
      return;
    }

    for(let i = 0 ; i < this.list.length ; ++i){
      if(this.list[i].nom.toLowerCase().trim() == this.new_perso.nom.toLowerCase().trim() && this.list[i].prenom.toLowerCase().trim() == this.new_perso.prenom.toLowerCase().trim()){
        this.is_error = true;
        return;
      } 
    }

    this._flistService.addPerso(this.new_perso.prenom, this.new_perso.nom).subscribe(res => {
      this.getAllFiches();
      this.is_error = false;
    });
  }

}
