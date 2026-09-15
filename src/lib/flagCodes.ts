// Maps country slugs used across the app to ISO 3166-1 alpha-2 codes
// (EU for the Europe multi-country package).
export const flagCodes: Record<string, string> = {
  turkey: 'TR',
  thailand: 'TH',
  uae: 'AE',
  europe: 'EU',
  usa: 'US',
  japan: 'JP',
  egypt: 'EG',
  georgia: 'GE',
  vietnam: 'VN',
  indonesia: 'ID',
  'south-korea': 'KR',
  singapore: 'SG',
  italy: 'IT',
  spain: 'ES',
  france: 'FR',
  germany: 'DE',
  greece: 'GR',
  portugal: 'PT',
  uk: 'GB',
  canada: 'CA',
  mexico: 'MX',
  brazil: 'BR',
  morocco: 'MA',
  'south-africa': 'ZA',
  australia: 'AU',
};

export const getFlagCode = (slug: string) => flagCodes[slug];
