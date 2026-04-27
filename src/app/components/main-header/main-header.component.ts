import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  isMenuOpen = false;

  constructor(public readonly i18n: I18nService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleLanguage(): void {
    this.i18n.toggleLanguage();
    this.closeMenu();
  }
}
