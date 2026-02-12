const groupBy = (items, keySelector) => {
  let result = Object.create(null);

  for (const item of items) {
    const key = item[keySelector];
    if (key) {
      result[key] ? result[key].push(item) : (result[key] = [item]);
    }
  }

  return result;
};

const response = groupBy(
  [
    { city: "A", id: 1 },
    { city: "B", id: 2 },
    { city: "A", id: 3 },
  ],
  "city",
);

console.log(response);
