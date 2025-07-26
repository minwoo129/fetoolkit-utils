import { beforeEach, describe, expect, it } from 'vitest';
import { forIn } from '../src';

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
});
