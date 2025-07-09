// eslint-disable-next-line no-unused-vars
type FilterActionType<T> = (item: T, index: number) => boolean;
// =============================================================
const at = <T>(array: T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }
  if (at > 0) {
    return array[at % array.length];
  }

  const decIdx = (at * -1) % array.length;
  return decIdx === 0 ? array[0] : array[array.length - decIdx];
};

const first = <T>(array: T[]): T | undefined => {
  return array[0];
};

const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

const filter = <T>(array: T[], filterBy: number[] | FilterActionType<T>) => {
  if (Array.isArray(filterBy)) {
    return array.filter((_, index) => filterBy.includes(index));
  }

  return array.filter(filterBy);
};

export default {
  at,
  first,
  last,
  filter,
};
