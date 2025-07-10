import { beforeEach, describe, expect, it } from 'vitest';
import Array from '../src/utils/array';

describe('array > at', () => {
  let testArray: number[];
  let testArray2: number[];
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    testArray2 = [];
  });

  it('양수 index를 제공했을 경우', () => {
    expect(Array.at(testArray, 0)).toBe(1);
  });

  it('음수 index를 제공했을 경우', () => {
    expect(Array.at(testArray, -3)).toBe(3);
  });

  it('양수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
    expect(Array.at(testArray, 8)).toBe(4);
  });

  it('음수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
    expect(Array.at(testArray, -9)).toBe(2);
  });

  it('빈 배열에 양수 index가 들어온 경우', () => {
    expect(Array.at(testArray2, 5)).toBe(undefined);
  });

  it('빈 배열에 음수 index가 들어온 경우', () => {
    expect(Array.at(testArray2, 5)).toBe(undefined);
  });
});
