import { double } from '../app/services/AffiliateService';

describe('testing index file', () => {
  test('double function', () => {
    expect(double(5)).toBe(10);
  });
});
