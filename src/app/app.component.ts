import { Component } from '@angular/core';
import { AppMenus } from './services/appMenus/appMenus';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = AppMenus;

  constructor() { }
}
