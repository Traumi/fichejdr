import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  @Input() stuff = [];
  @Input() viewonly : boolean;
  newitem = {nom : null, effet : null, nombre : null};

  constructor() { }

  ngOnInit() {
  }

  addItem() : void{
    this.stuff.push({nom : this.newitem.nom, effet : this.newitem.effet, nombre : this.newitem.nombre});
    this.newitem.nom = null;
    this.newitem.effet = null;
    this.newitem.nombre = null;
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

}
