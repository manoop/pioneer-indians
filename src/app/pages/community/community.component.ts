import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService, SupportedLanguage } from '../../core/language.service';

type CommunityCopy = {
  title: string;
  intro: string;
  supportTitle: string;
  supportItems: { title: string; description: string }[];
  contactTitle: string;
  contactBody: string;
  contactButton: string;
};

const COMMUNITY_CONTENT: Record<SupportedLanguage, CommunityCopy> = {
  en: {
    title: 'Community Partnerships & Support',
    intro:
      'We believe cultural work is collective work. Join our volunteer guild, sponsor a residency, or invite us to co-create an experience with your organization.',
    supportTitle: 'Ways to Get Involved',
    supportItems: [
      {
        title: 'Volunteer Guild',
        description: 'Offer time during festivals, translation for newsletters, or photography for archives.'
      },
      {
        title: 'Residency Sponsors',
        description: 'Fund artist residencies, youth scholarships, or accessibility services for community events.'
      },
      {
        title: 'Venue Allies',
        description: 'Provide rehearsal space, classrooms, or outdoor stages to host our pop-up gatherings.'
      }
    ],
    contactTitle: 'Let’s collaborate',
    contactBody:
      'Tell us about your ideas and we will follow up with a tailored proposal within a week.',
    contactButton: 'Start the conversation'
  },
  de: {
    title: 'Partnerschaften & Unterstützung',
    intro:
      'Kulturelle Arbeit ist Teamarbeit. Treten Sie unserer Freiwilligen-Gilde bei, fördern Sie eine Residenz oder laden Sie uns ein, gemeinsam ein Erlebnis zu gestalten.',
    supportTitle: 'So können Sie mitwirken',
    supportItems: [
      {
        title: 'Freiwilligen-Gilde',
        description: 'Unterstützen Sie Festivals, übersetzen Sie Newsletter oder fotografieren Sie für unser Archiv.'
      },
      {
        title: 'Residenz-Patenschaften',
        description: 'Finanzieren Sie Künstlerresidenzen, Stipendien für Jugendliche oder Barrierefreiheit bei Veranstaltungen.'
      },
      {
        title: 'Raumpartner:innen',
        description: 'Stellen Sie Proberäume, Kursräume oder Bühnen im Freien für unsere Pop-up-Events zur Verfügung.'
      }
    ],
    contactTitle: 'Lassen Sie uns zusammenarbeiten',
    contactBody:
      'Teilen Sie Ihre Ideen mit uns – wir melden uns innerhalb einer Woche mit einem maßgeschneiderten Vorschlag.',
    contactButton: 'Gespräch beginnen'
  }
};

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {
  copy: CommunityCopy = COMMUNITY_CONTENT.en;
  private subscription?: Subscription;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.subscription = this.languageService.language$.subscribe((lang: SupportedLanguage) => {
      this.copy = COMMUNITY_CONTENT[lang];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
