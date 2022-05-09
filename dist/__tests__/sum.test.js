"use strict";var _AffiliateService = require('../app/services/AffiliateService');

describe('testing index file', () => {
  test('double function', () => {
    expect(_AffiliateService.double.call(void 0, 5)).toBe(10);
  });
});
