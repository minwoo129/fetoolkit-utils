import { describe, expect, it } from 'vitest';
import { commaizeNumber } from '../../src/utils/number';

describe('number > commaizeNumber', () => {
  it('소숫점 단위까지 존재하는 경우', () => {
    const value = '1234567.89';
    expect(commaizeNumber(value)).toBe('1,234,567.89');
  });
  it('소숫점 단위가 없는 경우', () => {
    const value = '1234567';
    expect(commaizeNumber(value)).toBe('1,234,567');
  });
});
