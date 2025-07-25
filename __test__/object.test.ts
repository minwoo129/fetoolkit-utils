import { beforeEach, describe, expect, it } from 'vitest';
import { forIn, keys, omit, pick, values } from '../src';

describe('object > forIn', () => {
  let testObj: Record<string, number>;

  beforeEach(() => {
    testObj = {
      a: 1,
      b: 2,
      c: 3,
    };
  });

  it('object를 순회하며 각 프로퍼티의 값을 반환하는 경우', () => {
    const result: number[] = [];

    forIn(testObj, (value) => {
      result.push(value);
    });

    expect(result).toEqual([1, 2, 3]);
  });

  it('키값에 따라 value 타입이 모두 다른경우', () => {
    const testObj2 = {
      a: 1,
      b: 'test: 2',
      c: false,
    };

    forIn(testObj2, (value, key) => {
      if (key === 'a') {
        expect(typeof value).toBe('number');
      }
      if (key === 'b') {
        expect(typeof value).toBe('string');
      }
      if (key === 'c') {
        expect(typeof value).toBe('boolean');
      }
    });
  });
});

describe('object > keys', () => {
  it('object의 키값을 배열로 반환하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = keys(testObj);

    expect(result).toEqual(['a', 'b', 'c']);
  });
});

describe('object > values', () => {
  it('object의 value값을 배열로 반환하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = values(testObj);

    expect(result).toEqual([1, 2, 3]);
  });
});

describe('object > omit', () => {
  it('object에서 특정 키를 생략한 새로운 객체를 생성하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = omit(testObj, ['b', 'c']);

    expect(result).toEqual({ a: 1 });
    expect(testObj).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('object > pick', () => {
  it('object에서 특정 키를 선택한 새로운 객체를 생성하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = pick(testObj, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 });
    expect(testObj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
