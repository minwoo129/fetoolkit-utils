import { describe, expect, it } from 'vitest';
import { keys } from '../../src/utils/object';

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
