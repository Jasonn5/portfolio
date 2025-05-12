import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isSidebarVisible: boolean = false;
  public isMobileScreen: boolean;

  constructor(
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileScreen = window.innerWidth <= 768;
    } else {
      this.isMobileScreen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  hideSidebar() {
    this.isSidebarVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileScreen = window.innerWidth <= 768;
    }
  }
}
