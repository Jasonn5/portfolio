import { EventEmitter, Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeChanged = new EventEmitter<boolean>();
  private isDarkTheme: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedPreference = localStorage.getItem('theme_preference');

      if (!savedPreference) {
        const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        localStorage.setItem('theme_preference', defaultTheme);
      }

      this.isDarkTheme = localStorage.getItem('theme_preference') === 'dark';
      document.documentElement.classList.toggle('dark', this.isDarkTheme);
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit(this.isDarkTheme);

    if (isPlatformBrowser(this.platformId)) {
      const themePreference = this.isDarkTheme ? 'dark' : 'light';
      localStorage.setItem('theme_preference', themePreference);
      document.documentElement.classList.toggle('dark', this.isDarkTheme);
    }
  }

  getTheme() {
    return this.isDarkTheme;
  }
}
