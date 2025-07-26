// eslint-disable-next-line no-unused-vars
type FilterActionType<T> = (item: T, index: number) => boolean;

// ==========================================================================================

export const at = <T>(array: readonly T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }
  if (!Number.isInteger(at)) {
    return undefined;
  }

  if (at > 0) {
    return array[at % array.length];
  }

  const decIdx = (at * -1) % array.length;
  return decIdx === 0 ? array[0] : array[array.length - decIdx];
};

// ==========================================================================================

export const first = <T>(array: readonly T[]): T | undefined => {
  return array[0];
};

// ==========================================================================================

export const last = <T>(array: readonly T[]): T | undefined => {
  return array[array.length - 1];
};

// ==========================================================================================

export const filter = <T>(
  array: readonly T[],
  filterBy: number[] | FilterActionType<T>,
) => {
  if (Array.isArray(filterBy)) {
    return array.filter((_, index) => filterBy.includes(index));
  }

  return array.filter(filterBy);
};

// ==========================================================================================

export const objArrMap = <T extends Record<string, unknown>, K extends keyof T>(
  arr: readonly T[],
  key: K,
): T[K][] => {
  return arr.map((item) => item[key]);
};

// ==========================================================================================
export const chunk = <T>(arr: readonly T[], size: number): T[][] => {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('size must be a positive integer');
  }

  const chunkLength = Math.ceil(arr.length / size);

  const result: T[][] = [];
  for (let i = 0; i < chunkLength; i++) {
    const start = i * size;
    const end = start + size;
    result.push(arr.slice(start, end));
  }
  return result;
};

// ==========================================================================================

export const count = <T>(arr: readonly T[]) => {
  return arr.length;
};

// ==========================================================================================

export const countBy = <T, K extends PropertyKey>(
  arr: readonly T[],
  // eslint-disable-next-line no-unused-vars
  mapper: (item: T) => K,
) => {
  const result = {} as Record<K, number>;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = mapper(item);

    result[key] = (result[key] ?? 0) + 1;
  }

  return result;
};
