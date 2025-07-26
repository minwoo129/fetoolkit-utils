export const forIn = <T>(
  object: T,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  iteratee: (value: T[keyof T], key: string, collection: T) => any,
) => {
  for (const key in object) {
    const result = iteratee(object[key], key, object);

    if (result === false) {
      break;
    }
  }
};
