import { test, expect } from 'bun:test';
import { sampleTariffs, proposedPrice, costInCurrency, currentInCurrency, actualMargin, applySelected, parseTariffCsv, csvTemplate } from './model';
const row = { ...sampleTariffs[0], costEur: 2, price: 400 };
const settings = { currency: 'RUB', rate: 100, margin: 50, rounding: 'none' };
test('50% margin on cost 200 yields price 400, not markup 300', () => {
  expect(proposedPrice(row, settings)).toBe(400); expect(actualMargin(200, 400)).toBe(50);
});
test('currency conversion keeps current and proposed comparisons in EUR', () => {
  expect(costInCurrency(row, { ...settings, currency: 'EUR' })).toBe(2);
  expect(currentInCurrency(row, { ...settings, currency: 'EUR' })).toBe(4);
});
test('approval changes only selected positions', () => {
  const rows = sampleTariffs.slice(0, 2);
  const next = applySelected(rows, rows, [rows[0].id], { [rows[0].id]: 700, [rows[1].id]: 800 }, settings);
  expect(next[0].price).toBe(700); expect(next[1].price).toBe(rows[1].price);
});
test('approval refuses below-cost price', () => {
  expect(() => applySelected([row], [row], [row.id], { [row.id]: 100 }, settings)).toThrow();
});
test('supplier file retains package quantities and durations', () => {
  const result = parseTariffCsv(csvTemplate, []);
  expect(result.errors).toEqual([]); expect(result.rows.map(r => [r.gb, r.days])).toEqual([[1, 7], [5, 14]]);
});
test('duplicate supplier IDs prevent clean import', () => {
  expect(parseTariffCsv(csvTemplate + 'tr1,Турция,Turkey,TR,5,14,2,1,Turkcell\n', []).errors.length).toBeGreaterThan(0);
});
