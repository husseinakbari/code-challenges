const chunk = (array, size) => {
  if (!Array.isArray(array) || array.length <= 0) return [];
  if (size <= 0) return array;

  let result = [];
  let temp = [];
  for (const item of array) {
    temp.push(item);
    if (temp.length >= size) {
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length) result.push(temp);
  return result;
};

console.log(chunk([1, 2, 3, 4], 2));
