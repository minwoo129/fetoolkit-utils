# Array(filter)

- Array에서 조건에 맞는 값들만 필터링하는 함수입니다.
- 두번째 인자에 조건을 설정해주어 필터링할 수 있습니다.
  - 기존에 쓰던 filter 메서드의 콜백 함수를 포함해 number Array로 선언할 수도 있습니다.
  - number Array로 선언하면 그 숫자에 해당하는 index의 요소들만 필터링됩니다.

```tsx
Array.filter(array, filterBy);
```

## 기본 사용 예시

```tsx
import { Array } from '@fetoolkit/utils';

const { filter } = Array;

const testArr = [1, 23, 578, 456, 1234];
const arr1 = filter(testArr, [0, 2, 3]); // [1, 578, 456]
const arr2 = filter(testArr, (item, index) => index % 2 === 0); // [1, 578, 1234]
```

## API 문서

- 입력 인자
  - array: T[]
  - filterBy: number[] | (item: T, index: number) => boolean
- 반환 타입: T[]
