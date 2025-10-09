import { AppContent } from './app-content.model';

export const enContent: AppContent = {
  header: {
    logoAlt: 'Pioneer Indians e.V logo',
    eyebrow: '',
    title: 'Pioneer Indians e.V.',
    navigation: {
      home: 'Home',
      events: 'Events',
      programs: 'Programs',
      community: 'Community'
    }
  },
  footer: (year: number): string =>
    `© ${year} Pioneer Indians e.V. All rights reserved.`
};
