import { Component } from '@angular/core';
import { NightModeService } from './night-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fichejdr';
  night_mode = false;

  constructor(private _nmService : NightModeService ) { this._nmService.init() }
}
