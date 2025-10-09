import { AppContent } from './app-content.model';

export const deContent: AppContent = {
  header: {
    logoAlt: 'Pioneer Indians e.V. Logo',
    eyebrow: '',
    title: 'Pioneer Indians e.V.',
    navigation: {
      home: 'Startseite',
      events: 'Veranstaltungen',
      programs: 'Programme',
      community: 'Gemeinschaft'
    }
  },
  footer: (year: number): string =>
    `© ${year} Pioneer Indians e.V. Alle Rechte vorbehalten.`
};
