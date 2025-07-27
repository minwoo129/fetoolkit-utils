import { describe, expect, it } from 'vitest';
import { values } from '../../src/utils/object';

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
