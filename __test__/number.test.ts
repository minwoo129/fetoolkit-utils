import { describe, expect, it } from 'vitest';
import {
  commaizeNumber,
  decommaizeNumber,
  formatPhoneNumber,
  percent,
  sum,
} from '../src/utils/number';

describe('number > formatPhoneNumber', () => {
  describe('휴대폰번호 X', () => {
    it('서울번호(02), 가운데가 세자리인 경우', () => {
      const phoneNumber = '021234567';
      expect(formatPhoneNumber(phoneNumber)).toBe('02-123-4567');
    });
    it('서울번호(02), 가운데가 네자리인 경우', () => {
      const phoneNumber = '0212345678';
      expect(formatPhoneNumber(phoneNumber)).toBe('02-1234-5678');
    });
    it('첫 단위가 세자리, 가운데가 세자리인 경우', () => {
      const phoneNumber = '0311234567';
      expect(formatPhoneNumber(phoneNumber)).toBe('031-123-4567');
    });
    it('첫 단위가 세자리, 가운데가 네자리인 경우', () => {
      const phoneNumber = '03112345678';
      expect(formatPhoneNumber(phoneNumber)).toBe('031-1234-5678');
    });
    it('첫 단위가 네자리, 가운데가 네자리인 경우', () => {
      const phoneNumber = '050512345678';
      expect(formatPhoneNumber(phoneNumber)).toBe('0505-1234-5678');
    });
  });
  describe('휴대폰번호: 010 표준 이전', () => {
    it('첫 번호가 011, 가운데가 세자리인 경우', () => {
      const phoneNumber = '0111234567';
      expect(formatPhoneNumber(phoneNumber)).toBe('011-123-4567');
    });
    it('첫 번호가 011, 가운데가 네자리인 경우', () => {
      const phoneNumber = '01112345678';
      expect(formatPhoneNumber(phoneNumber)).toBe('011-1234-5678');
    });
  });
  describe('휴대폰번호: 010 표준 이후', () => {
    it('첫 번호가 010, 가운데가 네자리인 경우', () => {
      const phoneNumber = '01012345678';
      expect(formatPhoneNumber(phoneNumber)).toBe('010-1234-5678');
    });
  });
});

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

describe('number > sum', () => {
  it('합계가 정상적으로 출력되는 지 여부', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(sum(nums)).toBe(15);
  });
});

describe('number > percent', () => {
  it('분자가 0인 경우', () => {
    const num = 0;
    const denom = 100;
    expect(percent(num, denom)).toBe('0');
  });
  it('분모가 0인 경우', () => {
    const num = 100;
    const denom = 0;
    expect(percent(num, denom)).toBe('error');
  });
  it('분자가 0보다 작은 경우', () => {
    const num = -10;
    const denom = 100;
    expect(percent(num, denom)).toBe('error');
  });
  it('분모가 0보다 작은 경우', () => {
    const num = 5;
    const denom = -100;
    expect(percent(num, denom)).toBe('error');
  });
  it('분자가 분모보다 큰 경우', () => {
    const num = 100;
    const denom = 50;
    expect(percent(num, denom)).toBe('error');
  });
  it('소숫점 아래 2자리까지 표현이 되는지 여부', () => {
    const num = 100;
    const denom = 200;

    expect(percent(num, denom, 2)).toBe('50.00');
  });
  it('소숫점 아래 3자리까지 표현이 되는지 여부', () => {
    const num = 100;
    const denom = 300;

    expect(percent(num, denom, 3)).toBe('33.333');
  });
});
