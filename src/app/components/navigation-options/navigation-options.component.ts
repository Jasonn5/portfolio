import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation-options',
  templateUrl: './navigation-options.component.html',
  styleUrls: ['./navigation-options.component.scss']
})
export class NavigationOptionsComponent {
  public themeText = "noche";
  constructor(private router: Router,public themeService: ThemeService) {}

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
