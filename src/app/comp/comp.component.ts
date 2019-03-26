import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Input() competences = [];
  @Input() viewonly : boolean;
  newcomp = {nom : null, cout : null, effet : null}

  constructor() { }

  ngOnInit() {
  }

  addComp() : void{
    this.competences.push({nom : this.newcomp.nom, cout : this.newcomp.cout, effet : this.newcomp.effet});
    this.newcomp.nom = null;
    this.newcomp.cout = null;
    this.newcomp.effet = null;
  }

  removeComp(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.competences.length ; ++i){
      if(this.competences[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.competences.splice(index, 1);
  }

}
