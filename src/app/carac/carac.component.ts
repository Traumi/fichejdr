import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carac',
  templateUrl: './carac.component.html',
  styleUrls: ['./carac.component.css']
})
export class CaracComponent implements OnInit {

  @Input() stats = [];
  @Input() viewonly : boolean;
  newstat = {nom : null, val : null};

  constructor() { }

  ngOnInit() {
  }

  addStat() : void{
    this.stats.push({nom : this.newstat.nom, val : this.newstat.val});
    this.newstat.nom = null;
    this.newstat.val = null;
  }

  removeStat(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.stats.length ; ++i){
      if(this.stats[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.stats.splice(index, 1);
  }

}
