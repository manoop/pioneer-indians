import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent, animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { LanguageService, SupportedLanguage } from './core/language.service';
import { AppContent } from './content/app-content.model';
import { deContent } from './content/de';
import { enContent } from './content/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('introFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('480ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('420ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('logoTransition', [
      state(
        'rest',
        style({
          transform: 'translate3d(0, 0, 0) scale(1)',
          filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
          opacity: 1
        })
      ),
      state(
        'navigating',
        style({
          transform: 'translate3d(0, 0, 0) scale(1)',
          filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
          opacity: 1
        })
      ),
      transition(
        'rest => navigating',
        animate(
          '640ms cubic-bezier(0.25, 0.8, 0.3, 1)',
          keyframes([
            style({ offset: 0, transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 }),
            style({ offset: 0.35, transform: 'translate3d(0, -6px, 0) scale(1.04) rotate(-1deg)', opacity: 0.96 }),
            style({ offset: 0.7, transform: 'translate3d(0, 4px, 0) scale(0.98) rotate(2deg)', opacity: 0.98 }),
            style({ offset: 1, transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 })
          ])
        )
      ),
      transition('navigating => rest', animate('0ms'))
    ]),
    trigger('routeSlide', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('360ms 50ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  language: SupportedLanguage = 'en';
  content: AppContent = enContent;
  logoState: 'rest' | 'navigating' = 'rest';
  navigationOpen = false;
  showIntro = true;
  showLogo = false;
  readonly currentYear = new Date().getFullYear();

  private languageSub?: Subscription;
  private routerSub?: Subscription;
  private restartTimer?: ReturnType<typeof setTimeout>;
  private introLogoTimer?: ReturnType<typeof setTimeout>;
  private introCompleteTimer?: ReturnType<typeof setTimeout>;

  constructor(private readonly languageService: LanguageService, private readonly router: Router) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe(lang => {
      this.updateLanguage(lang);
    });

    this.updateLanguage(this.languageService.current);

    this.beginIntroSequence();

    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.activateLogo();
        this.navigationOpen = false;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.releaseLogo();
      }
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.routerSub?.unsubscribe();
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
    }
    if (this.introLogoTimer) {
      clearTimeout(this.introLogoTimer);
    }
    if (this.introCompleteTimer) {
      clearTimeout(this.introCompleteTimer);
    }
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? 'root';
  }

  toggleLanguage(language: SupportedLanguage): void {
    this.languageService.setLanguage(language);
  }

  toggleNavigation(): void {
    this.navigationOpen = !this.navigationOpen;
  }

  closeNavigation(): void {
    this.navigationOpen = false;
  }

  private activateLogo(): void {
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
    }

    if (this.logoState === 'rest') {
      this.logoState = 'navigating';
      return;
    }

    this.logoState = 'rest';
    this.restartTimer = setTimeout(() => {
      this.logoState = 'navigating';
      this.restartTimer = undefined;
    }, 0);
  }

  private releaseLogo(): void {
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
      this.restartTimer = undefined;
    }

    if (this.logoState !== 'navigating') {
      this.logoState = 'rest';
    }
  }

  onLogoAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'navigating') {
      this.logoState = 'rest';
    }
  }

  private updateLanguage(language: SupportedLanguage): void {
    this.language = language;
    this.content = language === 'en' ? enContent : deContent;
  }

  private beginIntroSequence(): void {
    this.showIntro = true;
    this.showLogo = false;

    if (this.introLogoTimer) {
      clearTimeout(this.introLogoTimer);
    }

    if (this.introCompleteTimer) {
      clearTimeout(this.introCompleteTimer);
    }

    this.introLogoTimer = setTimeout(() => {
      this.showLogo = true;
      this.introLogoTimer = undefined;
    }, 6000);

    this.introCompleteTimer = setTimeout(() => {
      this.showIntro = false;
      this.showLogo = false;
      this.introCompleteTimer = undefined;
    }, 10000);
  }
}
