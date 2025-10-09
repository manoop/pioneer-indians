import { AppContent } from './app-content.model';

export const deContent: AppContent = {
  header: {
    logoAlt: 'Pioneer Indians Heritage-Programm Logo',
    eyebrow: 'Heritage-Programm',
    title: 'Pioneer Indians Kulturverein',
    navigation: {
      home: 'Startseite',
      events: 'Veranstaltungen',
      programs: 'Programme',
      community: 'Gemeinschaft'
    }
  },
  footer: (year: number): string =>
    `© ${year} Pioneer Indians Kulturverein. Alle Rechte vorbehalten.`
};
