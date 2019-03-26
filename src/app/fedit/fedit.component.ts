import { Component, OnInit } from '@angular/core';
import { Fiche } from '../fiche';
import { FlistService } from '../flist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fedit',
  templateUrl: './fedit.component.html',
  styleUrls: ['./fedit.component.css']
})
export class FeditComponent implements OnInit {

  perso : Fiche;

  constructor(private router: Router, private _route: ActivatedRoute, private _flistService : FlistService) {
      this.perso = new Fiche();
   }

  ngOnInit() {
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
      });
  }

  updatePerso() : void{
    this._flistService.updateFiche(this.perso).subscribe(res => {
      console.log(res);
    });
  }

  fichePerso() : void{
    //this._route.
    this.router.navigate(['/detail', this.perso.id]);
  }

}
