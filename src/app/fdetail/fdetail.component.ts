import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlistService } from '../flist.service';
import { Fiche } from '../fiche';

@Component({
  selector: 'app-fdetail',
  templateUrl: './fdetail.component.html',
  styleUrls: ['./fdetail.component.css']
})
export class FdetailComponent implements OnInit {

  perso : Fiche;
  list : any;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _flistService : FlistService) {
      this.perso = new Fiche();
   }

  ngOnInit() {
    this.getFiche();
  }

  getFiche(): void {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
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
        this.getAllFiches();
        //console.log(this.perso.stats)
      });
  }

  getAllFiches() : void{
    this._flistService.getAllFiches().subscribe(res => {
      //this.list = res;
      this.list = [];
      for(let i = 0 ; i < res.length ; ++i){
        if(res[i].id == this.perso.id){
          //console.log(res[i]);
          //this.list[0] = res[i];
          if((i-2) >= 0) this.list[0] = res[i-2];
          else this.list[0] = null;
          if(i-1 >= 0) this.list[1] = res[i-1];
          else this.list[1] = null;
          this.list[2] = res[i];
          if((i+1) < res.length) this.list[3] = res[i+1];
          else this.list[3] = null;
          if(i+2 < res.length) this.list[4] = res[i+2];
          else this.list[4] = null;

          console.log(this.list);
        }
      }
    });
  }

  goto(num : number) : void{
    this._flistService.getFiche(num)
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
        this.getAllFiches();

      });
    this._router.navigate(['/detail/'+num]);
  }

}
/*import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';*/