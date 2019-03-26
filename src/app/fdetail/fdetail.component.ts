import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlistService } from '../flist.service';
import { Fiche } from '../fiche';

@Component({
  selector: 'app-fdetail',
  templateUrl: './fdetail.component.html',
  styleUrls: ['./fdetail.component.css']
})
export class FdetailComponent implements OnInit {

  perso : Fiche;

  constructor(private _route: ActivatedRoute, private _flistService : FlistService) {
      this.perso = new Fiche();
   }

  ngOnInit() {
    //this.perso = new Fiche();
    this.getFiche();
  }

  getFiche(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._flistService.getFiche(id)
      .subscribe(res => {

        this.perso.id = res.id;
        this.perso.prenom = res.prenom;
        this.perso.nom = res.nom;
        this.perso.age = res.age;
        this.perso.race = res.race;
        this.perso.classe = res.classe;
        this.perso.stats = res.stats;
        this.perso.bars = res.bars;
        this.perso.stuff = res.stuff;
        this.perso.competences = res.competences;
        
        //console.log(this.perso.stats)
      });
  }

}
/*import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';*/