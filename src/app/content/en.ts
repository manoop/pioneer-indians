import { AppContent } from './app-content.model';

export const enContent: AppContent = {
  header: {
    logoAlt: 'Pioneer Indians Heritage Program logo',
    eyebrow: 'Heritage Program',
    title: 'Pioneer Indians Cultural Collective',
    navigation: {
      home: 'Home',
      events: 'Events',
      programs: 'Programs',
      community: 'Community'
    }
  },
  footer: (year: number): string =>
    `© ${year} Pioneer Indians Cultural Collective. All rights reserved.`
};
