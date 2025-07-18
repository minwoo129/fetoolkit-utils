# FEToolkit

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
현재는 제공되고 있는 기능이 많이 없을지 몰라도 지속적인 업데이트를 통해 기능을 추가해나갈 예정입니다.

## Documentation

- 이 라이브러리는 유틸리티 함수만 모아놓은 라이브러리입니다.
  - 프레임워크에 제한 없이 모든 환경에서 제약없이 사용하실 수 있습니다.

## 초기 설정 절차

### 1. 설치 방법

- npm
  ```
  npm i @fetoolkit/utils
  ```
- yarn
  ```
  yarn add @fetoolkit/utils
  ```
- pnpm
  ```
  pnpm add @fetoolkit/utils
  ```

## 제공되는 유틸리티 함수

## 1. Array

| 이름   | 설명                                                                                 |                공식문서                |
| :----- | :----------------------------------------------------------------------------------- | :------------------------------------: |
| at     | 배열에서 특정 인덱스에 있는 요소를 반환하는 함수<br> (파이썬처럼 음수 인덱스도 지원) |   [공식문서](./src/docs/array/at.md)   |
| first  | 배열의 첫번째 요소를 꺼내오는 함수                                                   | [공식문서](./src/docs/array/first.md)  |
| last   | 배열의 마지막 요소를 꺼내오는 함수                                                   |  [공식문서](./src/docs/array/last.md)  |
| filter | Array에서 조건에 맞는 값들만 필터링하는 함수입니다.                                  | [공식문서](./src/docs/array/filter.md) |

## 2. Number

| 이름              | 설명                                                      |                      공식문서                      |
| :---------------- | :-------------------------------------------------------- | :------------------------------------------------: |
| commaizeNumber    | 주어진 숫자를 콤마로 구분하는 함수입니다.                 |  [공식문서](./src/docs/number/commaizeNumber.md)   |
| decommaizeNumber  | 콤마로 구분된 숫자에서 콤마만 제거하는 함수입니다.        | [공식문서](./src/docs/number/decommaizeNumber.md)  |
| formatPhoneNumber | 전화번호를 하이픈(-)이 들어간 형태로 변환하는 함수입니다. | [공식문서](./src/docs/number/formatPhoneNumber.md) |
| percent           | 나눗셈 결과를 퍼센트로 계산해주는 함수입니다.             |      [공식문서](./src/docs/number/percent.md)      |
| sum               | 배열에 저장된 모든 숫자들을 더하는 함수입니다.            |        [공식문서](./src/docs/number/sum.md)        |

## 3. Mask

| 이름            | 설명                                 |                공식문서                 |
| :-------------- | :----------------------------------- | :-------------------------------------: |
| maskName        | 이름을 마스킹하는 함수입니다.        | [공식문서](./src/docs/mask/maskName.md) |
| maskPhoneNumber | 휴대폰 번호를 마스킹하는 함수입니다. | [공식문서](./src/docs/mask/maskName.md) |
