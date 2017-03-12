import { Component } from '@angular/core';
import * as Engine from 'engine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  Engine = Engine;
}
