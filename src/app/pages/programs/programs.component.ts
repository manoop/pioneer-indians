import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService, SupportedLanguage } from '../../core/language.service';

type ProgramCopy = {
  title: string;
  intro: string;
  streams: { name: string; description: string; duration: string }[];
};

const PROGRAMS_CONTENT: Record<SupportedLanguage, ProgramCopy> = {
  en: {
    title: 'Year-Round Learning Programs',
    intro:
      'Immersive courses and mentorships nurture cultural literacy, leadership, and artistic experimentation for all ages.',
    streams: [
      {
        name: 'Emerging Artists Lab',
        description:
          'Twelve-week incubator pairing classical gurus with multimedia mentors to produce collaborative performances.',
        duration: '12 weeks'
      },
      {
        name: 'Community Story Circles',
        description:
          'Facilitated oral-history project capturing migration journeys with support from local archives and radio partners.',
        duration: 'Monthly'
      },
      {
        name: 'Youth Culture Camp',
        description:
          'Summer experience mixing dance, coding, and design challenges inspired by South Asian innovation and folklore.',
        duration: '6 weeks'
      }
    ]
  },
  de: {
    title: 'Ganzjährige Lernprogramme',
    intro:
      'Intensive Kurse und Mentorings fördern kulturelle Bildung, Führungskompetenz und künstlerisches Experimentieren für alle Altersgruppen.',
    streams: [
      {
        name: 'Lab für Nachwuchskünstler:innen',
        description:
          'Zwölfwöchiger Inkubator, der klassische Meister:innen mit Multimedia-Coaches verbindet, um gemeinsame Performances zu entwickeln.',
        duration: '12 Wochen'
      },
      {
        name: 'Community Story Circles',
        description:
          'Moderiertes Oral-History-Projekt, das Migrationswege mit Unterstützung lokaler Archive und Radios festhält.',
        duration: 'Monatlich'
      },
      {
        name: 'Youth Culture Camp',
        description:
          'Sommerprogramm mit Tanz, Coding und Design-Challenges, inspiriert von südasiatischer Innovation und Folklore.',
        duration: '6 Wochen'
      }
    ]
  }
};

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit, OnDestroy {
  copy: ProgramCopy = PROGRAMS_CONTENT.en;
  private subscription?: Subscription;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.subscription = this.languageService.language$.subscribe((lang: SupportedLanguage) => {
      this.copy = PROGRAMS_CONTENT[lang];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
