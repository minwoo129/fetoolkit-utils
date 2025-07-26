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
