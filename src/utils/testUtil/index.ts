export const removeKeyFromObjectsInArray = (
  array: { [key: string]: string | number }[],
  keysToRemove: string
) => {
  return array.map((obj) => {
    return Object.keys(obj).reduce((newObj: typeof obj, key) => {
      if (!keysToRemove.includes(key)) {
        newObj[key] = obj[key];
      }
      return newObj;
    }, {});
  });
};
