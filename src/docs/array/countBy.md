# Array(countBy)

- 배열에 속해있는 요소를 mapper 함수가 반환하는 값에 따라 분류하고 개수를 반환하는 함수입니다.

```tsx
countBy(array, mapper);
```

## 기본 사용 예시

```tsx
import { countBy } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num1 = countBy(testArr, (item) => (item % 2 === 0 ? 'even' : 'odd')); // {even: 5, odd: 5}
```

## API 문서

- 입력 인자
  |name|type|description|
  |:---:|:---|:---:|
  |array|T[]||
  |mapper|(item: T) => PropertyKey||
- 반환 타입: Record<PropertyKey, number>
