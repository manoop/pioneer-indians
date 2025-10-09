export interface AppContent {
  header: {
    logoAlt: string;
    eyebrow: string;
    title: string;
    navigation: {
      home: string;
      events: string;
      programs: string;
      community: string;
    };
  };
  footer: (year: number) => string;
}
