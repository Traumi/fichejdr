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
  isAdmin = false;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _flistService : FlistService) {
    this.perso = new Fiche();
  }

  ngOnInit() {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    
    this.checkAdmin(id);
    this.getFiche();
  }

  checkAdmin(id: number) : void{
    const token = this._flistService.getCookie('TOKEN');
    this._flistService.check_access(token, id).subscribe(res => {
      if(res.token) this.isAdmin = true;
      else this.isAdmin = false;
    });
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
        this.perso.armures = res.armures;
        this.perso.objets = res.objets;
        this.perso.competences = res.competences;
        this.getAllFiches();
      });
  }

  getAllFiches() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.list = [];
      for(let i = 0 ; i < res.length ; ++i){
        if(res[i].id == this.perso.id){
          if((i-2) >= 0) this.list[0] = res[i-2];
          else this.list[0] = null;
          if(i-1 >= 0) this.list[1] = res[i-1];
          else this.list[1] = null;
          this.list[2] = res[i];
          if((i+1) < res.length) this.list[3] = res[i+1];
          else this.list[3] = null;
          if(i+2 < res.length) this.list[4] = res[i+2];
          else this.list[4] = null;
        }
      }
    });
  }

  goto(num : number) : void{
    this._flistService.getAllFiches().subscribe(res => {
      this._flistService.getFiche(num).subscribe(res => {
        this.perso.id = res.id;
        this.perso.prenom = res.prenom;
        this.perso.nom = res.nom;
        this.perso.age = res.age;
        this.perso.race = res.race;
        this.perso.classe = res.classe;
        this.perso.stats = res.stats;
        this.perso.bars = res.bars;
        this.perso.stuff = res.stuff;
        this.perso.armures = res.armures;
        this.perso.objets = res.objets;
        this.perso.competences = res.competences;
        this.getAllFiches();
      });
      this._router.navigate(['/detail/'+num]);
      this.checkAdmin(num);
    });
  }

  goFirst() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.goto(res[0].id)
    });
  }

  goLast() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.goto(res[res.length-1].id)
    });
  }

  goNext() : void{
    if(this.list[3] == null) return;
    this.goto(this.list[3].id)
  }

  goPrevious() : void{
    if(this.list[1] == null) return;
    this.goto(this.list[1].id)
  }
}
/*import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';*/