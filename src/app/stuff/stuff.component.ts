import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  @Input() stuff = [];
  @Input() armures = [];
  @Input() objets = [];
  @Input() viewonly : boolean;
  newitem = {nom : null, effet : null, nombre : null};
  newarmure = {nom : null, effet : null, nombre : null};
  newobj = {nom : null, effet : null, nombre : null};

  constructor() { }

  ngOnInit() {
  }

  addItem() : void{
    this.stuff.push({nom : this.newitem.nom, effet : this.newitem.effet, nombre : this.newitem.nombre});
    this.newitem.nom = null;
    this.newitem.effet = null;
    this.newitem.nombre = null;
  }
  addArmure() : void{
    this.armures.push({nom : this.newarmure.nom, effet : this.newarmure.effet, nombre : this.newarmure.nombre});
    this.newarmure.nom = null;
    this.newarmure.effet = null;
    this.newarmure.nombre = null;
  }
  addObjet() : void{
    this.objets.push({nom : this.newobj.nom, effet : this.newobj.effet, nombre : this.newobj.nombre});
    this.newobj.nom = null;
    this.newobj.effet = null;
    this.newobj.nombre = null;
  }

  removeItem(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.stuff.length ; ++i){
      if(this.stuff[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.stuff.splice(index, 1);
  }
  removeArmure(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.armures.length ; ++i){
      if(this.armures[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.armures.splice(index, 1);
  }
  removeObjet(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.objets.length ; ++i){
      if(this.objets[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.objets.splice(index, 1);
  }

}
