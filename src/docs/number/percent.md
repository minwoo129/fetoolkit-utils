# Numbers(percent)

- 나눗셈 결과를 퍼센트로 계산해주는 함수입니다.
- 참고사항
  - 분자가 0보다 작은 경우 또는 분모가 0보다 작거나 같은 경우에는 'error'라고 반환됩니다.
  - 표현 가능 범위: 0 ~ 100
    - 이 외에 값들은 모두 'error'로 반환됩니다.

```tsx
Number.percent(num, denom, unit);
```

## 기본 사용 예시

```tsx
import { Number } from '@fetoolkit/utils';

const { percent } = Number;

const num1 = percent(1, 3); // 33
const num2 = percent(1, 3, 2); // 33.33
```

## API 문서

- 입력 인자
  |name|type|description|
  |:---:|:---|:---:|
  |num| number |분자|
  |denom| number |분모|
  |unit| number |잘라낼 소숫점 단위<br>(default: 0)|
- 반환 타입: number
