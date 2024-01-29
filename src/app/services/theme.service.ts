import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeChanged = new EventEmitter<boolean>();
  private isDarkTheme: boolean;

  constructor() {
    if (!localStorage.getItem('theme_preference')) {
      var firstThemeDefault = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.setItem('theme_preference', firstThemeDefault);
    }
    this.isDarkTheme = localStorage.getItem('theme_preference') == 'dark' ? true : false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit(this.isDarkTheme);
    const themePreference = this.isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme_preference', themePreference);
  }

  getTheme() {
    return this.isDarkTheme;
  }
}
