import { beforeEach, describe, expect, it } from 'vitest';
import { at, filter, first, last, objArrMap } from '../src/utils/array';

type TestObj = {
  id: number;
  name: string;
  isMale: boolean;
};

describe('array', () => {
  let testArray: number[];
  let testArray2: number[];
  let testObjArray: TestObj[];
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    testArray2 = [];

    testObjArray = [
      {
        id: 1,
        name: 'John',
        isMale: true,
      },

      {
        id: 2,
        name: 'Jane',
        isMale: false,
      },
      {
        id: 3,
        name: 'Jim',
        isMale: true,
      },
      {
        id: 4,
        name: 'Jill',
        isMale: false,
      },
    ];
  });

  describe('at', () => {
    it('양수 index를 제공했을 경우', () => {
      expect(at(testArray, 0)).toBe(testArray[0]);
    });

    it('음수 index를 제공했을 경우', () => {
      expect(at(testArray, -3)).toBe(testArray[2]);
    });

    it('양수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
      expect(at(testArray, 8)).toBe(testArray[3]);
    });

    it('음수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
      expect(at(testArray, -9)).toBe(testArray[1]);
    });

    it('빈 배열에 양수 index가 들어온 경우', () => {
      expect(at(testArray2, 5)).toBe(undefined);
    });

    it('빈 배열에 음수 index가 들어온 경우', () => {
      expect(at(testArray2, 5)).toBe(undefined);
    });
  });

  describe('first', () => {
    it('배열의 첫 요소가 반환되는지 여부', () => {
      expect(first(testArray)).toBe(testArray[0]);
    });

    it('빈 배열이 들어온 경우', () => {
      expect(first(testArray2)).toBe(undefined);
    });
  });

  describe('last', () => {
    it('배열의 마지막 요소가 반환되는지 여부', () => {
      expect(last(testArray)).toBe(testArray[testArray.length - 1]);
    });

    it('빈 배열이 들어온 경우', () => {
      expect(last(testArray2)).toBe(undefined);
    });
  });

  describe('filter', () => {
    it('filterBy가 배열인 경우(배열길이: 1)', () => {
      const filterBy = [2];
      expect(filter(testArray, filterBy)).toStrictEqual([3]);
    });
    it('filterBy가 배열인 경우(배열길이: 2)', () => {
      const filterBy = [0, 2];
      expect(filter(testArray, filterBy)).toStrictEqual([1, 3]);
    });
    it('filterBy가 배열인 경우(배열길이: 3)', () => {
      const filterBy = [2, 3, 4];
      expect(filter(testArray, filterBy)).toStrictEqual([3, 4, 5]);
    });
    it('filterBy가 배열인 경우(배열길이: 4)', () => {
      const filterBy = [0, 1, 2, 3];
      expect(filter(testArray, filterBy)).toStrictEqual([1, 2, 3, 4]);
    });
    it('filterBy가 메서드인 경우', () => {
      expect(filter(testArray, (item) => item > 3)).toStrictEqual([4, 5]);
    });
  });

  describe('objArrMap', () => {
    it('value가 number인 key인 경우', () => {
      const result = objArrMap(testObjArray, 'id');
      expect(result).toStrictEqual([1, 2, 3, 4]);
      // 타입 체크: result는 number[] 타입이어야 함
      expect(typeof result[0]).toBe('number');
    });

    it('value가 string인 key인 경우', () => {
      const result = objArrMap(testObjArray, 'name');
      expect(result).toStrictEqual(['John', 'Jane', 'Jim', 'Jill']);
      // 타입 체크: result는 string[] 타입이어야 함
      expect(typeof result[0]).toBe('string');
    });

    it('value가 boolean인 key인 경우', () => {
      const result = objArrMap(testObjArray, 'isMale');
      expect(result).toStrictEqual([true, false, true, false]);
      // 타입 체크: result는 boolean[] 타입이어야 함
      expect(typeof result[0]).toBe('boolean');
    });
  });
});
