import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SupportedLanguage = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<SupportedLanguage>('en');
  readonly language$ = this.languageSubject.asObservable();

  setLanguage(language: SupportedLanguage): void {
    if (language !== this.languageSubject.value) {
      this.languageSubject.next(language);
    }
  }

  get current(): SupportedLanguage {
    return this.languageSubject.value;
  }
}
