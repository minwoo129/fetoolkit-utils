import { beforeEach, describe, expect, it } from 'vitest';
import {
  at,
  chunk,
  count,
  countBy,
  filter,
  find,
  findIndex,
  first,
  groupBy,
  last,
  objArrMap,
} from '../src/utils/array';

type TestObj = {
  id: number;
  name: string;
  isMale: boolean;
};

type GroupByTestObj = {
  category: string;
  name: string;
};

describe('array', () => {
  let testArray: number[];
  let testArray2: number[];
  let testObjArray: TestObj[];
  let chunkTestArray: number[];
  let countByTestArray: number[];
  let groupByTestArray: GroupByTestObj[];
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

    chunkTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    countByTestArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];

    groupByTestArray = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' },
      { category: 'fruit', name: 'pear' },
      { category: 'vegetable', name: 'broccoli' },
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

  describe('chunk', () => {
    it('size가 양수 또는 정수가 아닌 경우', () => {
      expect(() => chunk(chunkTestArray, 0)).toThrow();
      expect(() => chunk(chunkTestArray, -1)).toThrow();
      expect(() => chunk(chunkTestArray, 1.5)).toThrow();
      expect(() => chunk(chunkTestArray, NaN)).toThrow();
      expect(() => chunk(chunkTestArray, Infinity)).toThrow();
      expect(() => chunk(chunkTestArray, -Infinity)).toThrow();
    });

    it('size가 배열의 길이보다 큰 경우', () => {
      const result = chunk(chunkTestArray, 100);
      expect(result).toStrictEqual([chunkTestArray]);
    });

    it('size가 배열의 길이와 같은 경우', () => {
      const result = chunk(chunkTestArray, chunkTestArray.length);
      expect(result).toStrictEqual([chunkTestArray]);
    });

    it('size가 배열의 길이보다 작은 경우', () => {
      const cases = [
        {
          size: 2,
          value: [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9, 10],
          ],
        },
        { size: 3, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]] },
        {
          size: 4,
          value: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10],
          ],
        },
        {
          size: 5,
          value: [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
          ],
        },
        {
          size: 6,
          value: [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10],
          ],
        },
        {
          size: 7,
          value: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10],
          ],
        },
        {
          size: 8,
          value: [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [9, 10],
          ],
        },
        { size: 9, value: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10]] },
      ];

      for (const { size, value } of cases) {
        const result = chunk(chunkTestArray, size);
        expect(result).toStrictEqual(value);
      }
    });
  });

  describe('count', () => {
    it('배열의 길이가 반환되는지 여부', () => {
      expect(count(testArray)).toBe(testArray.length);
    });

    it('빈 배열이 들어온 경우', () => {
      expect(count(testArray2)).toBe(0);
    });
  });

  describe('countBy', () => {
    it('각 요소를 키값으로 지정하는 경우', () => {
      const result = countBy(countByTestArray, String);

      expect(result).toEqual({
        '1': 2,
        '2': 2,
        '3': 2,
        '4': 2,
        '5': 2,
        '6': 2,
        '7': 2,
        '8': 2,
        '9': 2,
        '10': 2,
      });
    });

    it('짝수인지 홀수인지 판별하는 경우', () => {
      const result = countBy(countByTestArray, (item) =>
        item % 2 === 0 ? 'even' : 'odd',
      );

      expect(result).toEqual({
        even: 10,
        odd: 10,
      });
    });
  });

  describe('find', () => {
    it('predicate가 true를 반환하는 요소가 있는 경우', () => {
      const result = find(testArray, (item) => item > 3);
      expect(result).toBe(4);
    });

    it('predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = find(testArray, (item) => item > 10);
      expect(result).toBe(undefined);
    });

    it('fromIndex가 제공된 경우', () => {
      const result = find(testArray, (item) => item > 3, 2);
      expect(result).toBe(4);
    });

    it('fromIndex가 제공된 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = find(testArray, (item) => item > 10, 2);
      expect(result).toBe(undefined);
    });

    it('fromIndex이 배열의 길이보다 큰 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = find(testArray, (item) => item > 10, 20);
      expect(result).toBe(undefined);
    });
  });

  describe('findIndex', () => {
    it('predicate가 true를 반환하는 요소가 있는 경우', () => {
      const result = findIndex(testArray, (item) => item > 3);
      expect(result).toBe(3);
    });

    it('predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = findIndex(testArray, (item) => item > 10);
      expect(result).toBe(undefined);
    });

    it('fromIndex가 제공된 경우', () => {
      const result = findIndex(testArray, (item) => item > 3, 2);
      expect(result).toBe(3);
    });

    it('fromIndex가 제공된 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = findIndex(testArray, (item) => item > 10, 2);
      expect(result).toBe(undefined);
    });

    it('fromIndex이 배열의 길이보다 큰 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
      const result = findIndex(testArray, (item) => item > 10, 20);
      expect(result).toBe(undefined);
    });
  });

  describe('groupBy', () => {
    it('category 프로퍼티를 기준으로 그룹화하는 경우', () => {
      const result = groupBy(groupByTestArray, (item) => item.category);
      expect(result).toEqual({
        fruit: [
          { category: 'fruit', name: 'apple' },
          { category: 'fruit', name: 'banana' },
          { category: 'fruit', name: 'pear' },
        ],
        vegetable: [
          { category: 'vegetable', name: 'carrot' },
          { category: 'vegetable', name: 'broccoli' },
        ],
      });
    });

    it('name 프로퍼티를 기준으로 그룹화하는 경우', () => {
      const result = groupBy(groupByTestArray, (item) => item.name);
      expect(result).toEqual({
        apple: [{ category: 'fruit', name: 'apple' }],
        banana: [{ category: 'fruit', name: 'banana' }],
        carrot: [{ category: 'vegetable', name: 'carrot' }],
        pear: [{ category: 'fruit', name: 'pear' }],
        broccoli: [{ category: 'vegetable', name: 'broccoli' }],
      });
    });
  });
});
