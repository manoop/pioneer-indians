import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService, SupportedLanguage } from '../../core/language.service';

type EventsCopy = {
  title: string;
  intro: string;
  seasons: { season: string; description: string; highlights: string[] }[];
};

const EVENTS_CONTENT: Record<SupportedLanguage, EventsCopy> = {
  en: {
    title: 'Seasonal Festivals & Pop-Up Gatherings',
    intro:
      'From intimate salon concerts to exuberant street parades, our seasonal programming blends classical artistry with contemporary voices.',
    seasons: [
      {
        season: 'Spring Vibrance',
        description: 'Holi colors, poetry nights, and panel discussions on migration histories.',
        highlights: ['Color splash parade', 'Sufi & jazz fusion night', 'Family kite crafting']
      },
      {
        season: 'Summer Sounds',
        description: 'Outdoor cinema, collaborative jam sessions, and storytelling under the stars.',
        highlights: ['Bollywood in the Park', 'Tabla & techno experiments', 'Night of a Thousand Lanterns']
      },
      {
        season: 'Winter Warmth',
        description: 'Kitchen residencies, mindful movement classes, and New Year’s eve community dinner.',
        highlights: ['Spice trail supper club', 'Classical raga sunrise', 'Shared resolutions circle']
      }
    ]
  },
  de: {
    title: 'Saisonale Feste & Pop-up-Treffen',
    intro:
      'Von intimen Salonkonzerten bis zu ausgelassenen Straßenumzügen verbindet unser Jahresprogramm klassische Kunst mit zeitgenössischen Stimmen.',
    seasons: [
      {
        season: 'Frühlingsleuchten',
        description: 'Holi-Farben, Lyrikabende und Diskussionsrunden zu Migrationsgeschichten.',
        highlights: ['Farbenparade', 'Sufi- und Jazz-Fusionabend', 'Familien-Drachenwerkstatt']
      },
      {
        season: 'Sommersounds',
        description: 'Open-Air-Kino, gemeinsame Jam-Sessions und Erzählnächte unter Sternen.',
        highlights: ['Bollywood im Park', 'Tabla-Techno-Experimente', 'Nacht der tausend Laternen']
      },
      {
        season: 'Winterwärme',
        description: 'Küchenresidenzen, achtsame Bewegungsstunden und gemeinsames Silvester-Dinner.',
        highlights: ['Spice-Trail-Supperclub', 'Klassischer Raga bei Sonnenaufgang', 'Gemeinsame Vorsätze-Runde']
      }
    ]
  }
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  copy: EventsCopy = EVENTS_CONTENT.en;
  private subscription?: Subscription;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.subscription = this.languageService.language$.subscribe((lang: SupportedLanguage) => {
      this.copy = EVENTS_CONTENT[lang];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
