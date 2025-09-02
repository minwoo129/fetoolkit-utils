import { describe, expect, it } from 'vitest';
import { isSameObj } from '../../src/utils/object';

describe('object > isSameObj', () => {
  it('객체의 크기가 큰 경우(key 개수 100개)', () => {
    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < 100; i++) {
      obj1[`a${i}`] = i;
      obj2[`a${i}`] = i;
    }

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('동일한 객체인 경우', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('key값 동일, 값은 동일하지 않은 경우', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 4 };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('key값이 다른 경우', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, d: 3 };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('key값의 길이가 다른 경우', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2 };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('key값의 순서가 다른 경우', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { b: 2, a: 1, c: 3 };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });
});
