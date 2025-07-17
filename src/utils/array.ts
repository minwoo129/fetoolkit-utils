// eslint-disable-next-line no-unused-vars
type FilterActionType<T> = (item: T, index: number) => boolean;
// =============================================================
export const at = <T>(array: T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }
  if (at > 0) {
    return array[at % array.length];
  }

  const decIdx = (at * -1) % array.length;
  return decIdx === 0 ? array[0] : array[array.length - decIdx];
};

export const first = <T>(array: T[]): T | undefined => {
  return array[0];
};

export const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

export const filter = <T>(
  array: T[],
  filterBy: number[] | FilterActionType<T>,
) => {
  if (Array.isArray(filterBy)) {
    return array.filter((_, index) => filterBy.includes(index));
  }

  return array.filter(filterBy);
};
