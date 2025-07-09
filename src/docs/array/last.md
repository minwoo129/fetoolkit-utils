# Array(last)

- Array 내에 마지막 요소를 반환합니다.

```tsx
Array.last(array);
```

## 기본 사용 예시

```tsx
import { Array } from '@fetoolkit/utils';

const { last } = Array;

const testArr = [1, 23, 578, 456, 1234];
const num1 = last(testArr); // 1234
```

## API 문서

- 입력 인자
  |name|type|description|
  |:---:|:---|:---:|
  |array|T[]||
- 반환 타입: T | undefined
