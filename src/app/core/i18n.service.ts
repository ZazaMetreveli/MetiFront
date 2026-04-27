import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Language = 'ka' | 'en';

type TranslationKey =
  | 'brand.homeAria'
  | 'nav.label'
  | 'nav.home'
  | 'nav.about'
  | 'nav.portfolio'
  | 'nav.services'
  | 'nav.contact'
  | 'language.switchToEnglish'
  | 'language.switchToGeorgian'
  | 'menu.toggle';

const LANGUAGE_STORAGE_KEY = 'meti-language';

const translations: Record<Language, Record<TranslationKey, string>> = {
  ka: {
    'brand.homeAria': 'Meti მთავარი გვერდი',
    'nav.label': 'მთავარი ნავიგაცია',
    'nav.home': 'მთავარი',
    'nav.about': 'ჩვენ შესახებ',
    'nav.portfolio': 'პორტფოლიო',
    'nav.services': 'სერვისები',
    'nav.contact': 'კონტაქტი',
    'language.switchToEnglish': 'ინგლისურ ენაზე გადართვა',
    'language.switchToGeorgian': 'ქართულ ენაზე გადართვა',
    'menu.toggle': 'ნავიგაციის მენიუს გახსნა/დახურვა'
  },
  en: {
    'brand.homeAria': 'Meti home page',
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'language.switchToEnglish': 'Switch language to English',
    'language.switchToGeorgian': 'Switch language to Georgian',
    'menu.toggle': 'Toggle navigation menu'
  }
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly currentLanguage = signal<Language>('ka');
  readonly language = this.currentLanguage.asReadonly();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    const savedLanguage = this.getSavedLanguage();
    this.setLanguage(savedLanguage ?? 'ka', false);
  }

  t(key: TranslationKey): string {
    return translations[this.currentLanguage()][key];
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'ka' ? 'en' : 'ka');
  }

  languageButtonLabel(): string {
    return this.currentLanguage() === 'ka' ? 'ENG' : 'GEO';
  }

  languageButtonAriaLabel(): string {
    return this.currentLanguage() === 'ka'
      ? this.t('language.switchToEnglish')
      : this.t('language.switchToGeorgian');
  }

  private setLanguage(language: Language, persist = true): void {
    this.currentLanguage.set(language);
    this.document.documentElement.lang = language;

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }

  private getSavedLanguage(): Language | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const language = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return language === 'ka' || language === 'en' ? language : null;
  }
}
