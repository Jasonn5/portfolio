import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss'
})
export class MenuOptionsComponent {

  constructor(public themeService: ThemeService){}
}
