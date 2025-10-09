import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService, SupportedLanguage } from '../../core/language.service';

type HomeCopy = {
  heroTitle: string;
  heroSubtitle: string;
  cta: string;
  highlights: { title: string; description: string }[];
  spotlightTitle: string;
  spotlightDescription: string;
  spotlightQuote: string;
};

const HOME_CONTENT: Record<SupportedLanguage, HomeCopy> = {
  en: {
    heroTitle: 'Celebrating Culture, Creativity, and Community',
    heroSubtitle:
      'Pioneer Indians Cultural Collective connects artists, families, and curious neighbors through vibrant programming, collaborative workshops, and joyful festivals inspired by South Asian traditions.',
    cta: 'Explore Upcoming Gatherings',
    highlights: [
      {
        title: 'Intercultural Dialogues',
        description: 'Monthly meetups spark conversations between generations and cultures with storytelling, music, and food.'
      },
      {
        title: 'Creative Residencies',
        description: 'Local artists experiment with contemporary takes on classical forms through supported residencies and showcases.'
      },
      {
        title: 'Family Learning Labs',
        description: 'Hands-on sessions invite kids and parents to learn crafts, language, and dance together every weekend.'
      }
    ],
    spotlightTitle: 'Rooted in Eggenfelden, reaching the world',
    spotlightDescription:
      'We partner with schools, civic groups, and cultural institutions to design programs that highlight immigrant voices and create a welcoming home for everyone.',
    spotlightQuote: '“Culture thrives when we share it generously and listen deeply.”'
  },
  de: {
    heroTitle: 'Wir feiern Kultur, Kreativität und Gemeinschaft',
    heroSubtitle:
      'Der Pioneer Indians Kulturverein verbindet Künstler:innen, Familien und neugierige Nachbar:innen durch lebendige Programme, Workshops und Feste, die von südasiatischen Traditionen inspiriert sind.',
    cta: 'Bevorstehende Treffen entdecken',
    highlights: [
      {
        title: 'Interkulturelle Dialoge',
        description: 'Monatliche Treffen eröffnen Gespräche zwischen Generationen und Kulturen mit Geschichten, Musik und Kulinarik.'
      },
      {
        title: 'Kreative Residenzen',
        description:
          'Regionale Künstler:innen entwickeln zeitgenössische Interpretationen klassischer Formen in geförderten Residenzen und Showcases.'
      },
      {
        title: 'Familien-Lernlabore',
        description:
          'Praktische Sessions laden Kinder und Eltern ein, gemeinsam jedes Wochenende Handwerk, Sprache und Tanz zu erleben.'
      }
    ],
    spotlightTitle: 'Verwurzelt in Eggenfelden, verbunden mit der Welt',
    spotlightDescription:
      'Wir kooperieren mit Schulen, Bürgerinitiativen und Kulturhäusern, um Programme zu gestalten, die migrantische Stimmen stärken und ein einladendes Zuhause für alle schaffen.',
    spotlightQuote: '„Kultur blüht auf, wenn wir sie großzügig teilen und aufmerksam zuhören.“'
  }
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  language: SupportedLanguage = 'en';
  copy: HomeCopy = HOME_CONTENT.en;

  private subscription?: Subscription;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.subscription = this.languageService.language$.subscribe(lang => {
      this.language = lang;
      this.copy = HOME_CONTENT[lang];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
