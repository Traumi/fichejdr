import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  @Input() perso = {};
  @Input() viewonly : boolean;

  constructor() { }

  ngOnInit() {
  }

}
