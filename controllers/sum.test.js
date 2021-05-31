const sum = require('./sum');

describe('Sample Test', () => {
  it('sum correct', () => {
    expect(sum(3, 4)).toBe(7);
  });
});