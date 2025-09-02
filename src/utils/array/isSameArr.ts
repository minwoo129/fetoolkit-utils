export const isSameArr = (a: Array<unknown>, b: Array<unknown>) => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

console.log(isSameArr([1, 2, 3], [1, 2, 3]));
