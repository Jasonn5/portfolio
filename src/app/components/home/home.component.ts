import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isSidebarVisible: boolean = false;
  constructor(public themeService: ThemeService) { }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  hideSidebar() {
    this.isSidebarVisible = false;
  }
}
