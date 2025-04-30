import { Component, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isSidebarVisible: boolean = false;
  public isMobileScreen: boolean;
  constructor(public themeService: ThemeService) { 
    this.isMobileScreen = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  hideSidebar() {
    this.isSidebarVisible = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileScreen = window.innerWidth <= 768;
  }
}
