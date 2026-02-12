const mergeById = (primary, secondery) => {
  const hash = new Map();

  const array = [...primary, ...secondery];

  for (const item of array) {
    hash.set(
      item.id,
      hash.has(item.id) ? { ...hash.get(item.id), ...item } : item,
    );
  }

  return [...hash.values()];
};

console.log(
  mergeById(
    [
      { id: 2, name: "B" },
      { id: 1, name: "A" },
    ],
    [
      { id: 1, age: 30 },
      { id: 3, name: "C" },
    ],
  ),
);
