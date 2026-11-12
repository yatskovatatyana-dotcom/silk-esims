import Papa from 'papaparse';

export type Currency = 'RUB' | 'EUR';
export type Tariff = {
  id: string; country: string; countryEn: string; code: string; title: string; titleEn: string;
  gb: number; days: number; price: number; costEur: number; template: string;
  active: boolean; hit: boolean; featuresRu: string; featuresEn: string; networks: string;
};
export type Pricing = { currency: Currency; rate: number; margin: number; rounding: 'none' | '99' };
export const defaultPricing: Pricing = { currency: 'RUB', rate: 100, margin: 35, rounding: '99' };
export function costInCurrency(t: Tariff, p: Pricing) { return t.costEur * (p.currency === 'RUB' ? p.rate : 1); }
export function proposedPrice(t: Tariff, p: Pricing) {
  const cost = costInCurrency(t, p);
  const value = cost / (1 - p.margin / 100);
  return p.rounding === '99' ? (p.currency === 'RUB' ? Math.ceil((value + 1) / 100) * 100 - 1 : Math.ceil(value + 0.01) - 0.01) : Math.round(value * 100) / 100;
}
export function currentInCurrency(t: Tariff, p: Pricing) { return t.price / (p.currency === 'EUR' ? p.rate : 1); }
export function actualMargin(cost: number, price: number) { return price > 0 ? (price - cost) / price * 100 : 0; }
export function pricingIssue(t: Tariff, p: Pricing, price: number) {
  if (!Number.isFinite(price) || price <= 0) return 'Invalid price';
  if (price <= costInCurrency(t, p)) return 'Below cost';
  if (actualMargin(costInCurrency(t, p), price) + 0.01 < p.margin) return 'Margin below target';
  if (Math.abs(price / currentInCurrency(t, p) - 1) > 0.5) return 'Change over 50%';
  return '';
}
export function applySelected(catalog: Tariff[], staged: Tariff[], selected: string[], prices: Record<string, number>, p: Pricing) {
  const result = [...catalog];
  for (const t of staged.filter(t => selected.includes(t.id))) {
    const price = prices[t.id] ?? proposedPrice(t, p);
    if (!Number.isFinite(price) || price <= costInCurrency(t, p)) throw new Error('Price must be above cost');
    const next = { ...t, price: Math.round(price * (p.currency === 'EUR' ? p.rate : 1) * 100) / 100 };
    const index = result.findIndex(row => row.id === t.id);
    if (index === -1) result.push(next); else result[index] = next;
  }
  return result;
}
const countrySeeds = [
  ['AM', 'Армения', 'Armenia', 'am', '2200036', 'Ucom, Team'],
  ['AZ', 'Азербайджан', 'Azerbaijan', 'az', '2577355', 'Azercell'],
  ['CN', 'Китай', 'China', 'cn', '2561002', 'China Unicom'],
  ['TR', 'Турция', 'Turkey', 'tr', '2563010', 'Turkcell, Türk Telekom'],
  ['AE', 'ОАЭ', 'UAE', 'ae', '2580001', 'du, Etisalat'],
  ['UZ', 'Узбекистан', 'Uzbekistan', 'uz', '2591001', 'Beeline, Ucell'],
];
export const sampleTariffs: Tariff[] = countrySeeds.flatMap(([code, country, countryEn, prefix, template, networks], i) => [1, 5, 10].map((gb, j) => ({
  id: `${prefix}${gb}`, code, country, countryEn, title: ['Стартовый', 'Оптимальный', 'Максимальный'][j],
  titleEn: ['Starter', 'Optimal', 'Maximum'][j], gb, days: [7, 14, 30][j],
  price: (code === 'AE' ? [299, 799, 1499] : [199, 499, 999])[j],
  costEur: Math.round(([1.05, 2.9, 5.8][j] + (i === 4 ? [1.5, 3, 5][j] : i * 0.07)) * 100) / 100,
  template: String(Number(template) + j * 3), active: true, hit: j === 1, featuresRu: '', featuresEn: '', networks,
})));
export const csvTemplate = 'id,country,country_en,code,gb,days,cost_eur,template,networks\ntr1,Турция,Turkey,TR,1,7,1.05,2563010,Turkcell\ntr5,Турция,Turkey,TR,5,14,2.90,2563013,Turkcell\n';
export function parseTariffCsv(text: string, catalog: Tariff[]): { rows: Tariff[]; errors: string[] } {
  const parsed = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: 'greedy', transformHeader: h => h.trim().replace(/^\uFEFF/, '') });
  const required = ['id', 'country', 'code', 'gb', 'days', 'cost_eur', 'template'];
  const missing = required.filter(key => !parsed.meta.fields?.includes(key));
  if (missing.length) return { rows: [], errors: [`Missing columns: ${missing.join(', ')}`] };
  const errors = parsed.errors.map(e => `Row ${(e.row ?? 0) + 2}: ${e.message}`);
  const rows: Tariff[] = []; const ids = new Set<string>();
  parsed.data.forEach((r, i) => {
    const id = r.id?.trim(); const gb = Number(r.gb); const days = Number(r.days); const cost = Number(r.cost_eur?.replace(',', '.'));
    if (!id || ids.has(id) || !r.country?.trim() || !/^[A-Z]{2}$/.test(r.code?.trim()) || !(gb > 0) || !(days > 0 && Number.isInteger(days)) || !(cost > 0) || !r.template?.trim()) {
      errors.push(`Row ${i + 2}: check ID (unique), country, ISO code, GB, days, cost and template`); return;
    }
    ids.add(id); const existing = catalog.find(t => t.id === id);
    rows.push({ id, country: r.country.trim(), countryEn: r.country_en || existing?.countryEn || '', code: r.code.trim(), gb, days, costEur: cost, template: r.template.trim(), networks: r.networks || existing?.networks || '', title: existing?.title || 'New plan', titleEn: existing?.titleEn || 'New plan', price: existing?.price || Math.ceil(cost * 150), active: existing?.active ?? false, hit: existing?.hit ?? false, featuresRu: existing?.featuresRu || '', featuresEn: existing?.featuresEn || '' });
  });
  if (!parsed.data.length) errors.push('File contains no plans');
  return { rows, errors };
}
export function downloadCsv(text: string, filename: string) {
  const url = URL.createObjectURL(new Blob(['\uFEFF', text], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
export function flag(code: string) { return [...code.toUpperCase()].map(c => String.fromCodePoint(127397 + c.charCodeAt(0))).join(''); }
export function money(value: number, currency: Currency = 'RUB') { return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: currency === 'RUB' ? 0 : 2 }).format(value); }
