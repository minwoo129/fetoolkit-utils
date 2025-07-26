export const forIn = <T extends Record<string, unknown>>(
  object: T,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  iteratee: (value: T[keyof T], key: keyof T, collection: T) => any,
) => {
  for (const key in object) {
    const result = iteratee(object[key], key, object);

    if (result === false) {
      break;
    }
  }
};

// ==========================================================================================

export const keys = <T extends Record<string, unknown>>(object: T) => {
  return Object.keys(object);
};

// ==========================================================================================

export const values = <T extends Record<string, unknown>>(object: T) => {
  return Object.values(object);
};

// ==========================================================================================

export const omit = <T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  const result = { ...object };

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    delete result[key];
  }

  return result as Omit<T, K>;
};
