import { describe, expect, it } from 'vitest';
import { decommaizeNumber } from '../../src/utils/number';

describe('number > decommaizeNumber', () => {
  it('소숫점 단위까지 존재하는 경우', () => {
    const value = '1,234,567.89';
    expect(decommaizeNumber(value)).toBe(1234567.89);
  });
  it('소숫점 단위가 없는 경우', () => {
    const value = '1,234,567';
    expect(decommaizeNumber(value)).toBe(1234567);
  });
});
