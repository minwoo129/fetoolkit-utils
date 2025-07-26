export const formatPhoneNumber = (phoneNumber: string) => {
  // 지역번호가 두자리로 시작하는 경우(서울(02)밖에 없음)
  const isSeoulNumber = phoneNumber.startsWith('02');

  // 12자리 전화번호는 앞자리가 4개
  const is12Number = phoneNumber.length === 12;

  const secondSplitIndex = isSeoulNumber ? 2 : is12Number ? 4 : 3;

  return [
    phoneNumber.slice(0, secondSplitIndex),
    phoneNumber.slice(secondSplitIndex, phoneNumber.length - 4),
    phoneNumber.slice(phoneNumber.length - 4),
  ].join('-');
};

// ==========================================================================================

export const commaizeNumber = (value: string | number) => {
  const numStr = String(value);
  const decimalPointIndex = numStr.indexOf('.');
  const commaizeRegExp = /(\d)(?=(\d\d\d)+(?!\d))/g;

  return decimalPointIndex > -1
    ? numStr.slice(0, decimalPointIndex).replace(commaizeRegExp, '$1,') +
        numStr.slice(decimalPointIndex)
    : numStr.replace(commaizeRegExp, '$1,');
};

// ==========================================================================================

export const decommaizeNumber = (numStr: string) => {
  return Number(numStr.replace(/,/g, ''));
};

// ==========================================================================================

export const sum = (nums: number[]) => {
  return nums.reduce((acc, num) => acc + num, 0);
};

// ==========================================================================================

export const percent = (num: number, denom: number, unit: number = 0) => {
  if (denom === 0) {
    return 'error';
  }

  const result = (num / denom) * 100;
  if (result > 100 || result < 0) {
    return 'error';
  }

  return result.toFixed(unit);
};

// ==========================================================================================

export const isInteger = (num: number) => {
  return Number.isInteger(num);
};

// ==========================================================================================

export const isPositiveInteger = (num: number) => {
  return isInteger(num) && num > 0;
};

// ==========================================================================================

export const isNegativeInteger = (num: number) => {
  return isInteger(num) && num < 0;
};
