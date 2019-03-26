import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() bars = [];
  @Input() viewonly : boolean;
  newbar = {nom : null, val : null};

  constructor() { }

  ngOnInit() {
    
  }

  addBar() : void{
    this.bars.push({nom : this.newbar.nom, val : this.newbar.val});
    this.newbar.nom = null;
    this.newbar.val = null;
  }

  removeBar(o : object) : void{
    let index = null;
    for(let i = 0 ; i  < this.bars.length ; ++i){
      if(this.bars[i] == o){
        index = i; 
        break;
      }
    }
    if(index != null) this.bars.splice(index, 1);
  }

}
