const data = [
  ["a-a", 42],
  ["b-bb", true],
  [
    "c",
    [
      ["d", []],
      [4, { foo: "bar" }],
      ["f", [["g-ggg", [[2, () => {}]]]]],
    ],
  ],
];

const makeObject = () => {
  let shouldCamelify = false;
  let currentDepht = 100;

  const kebabToCamel = (str) => {
    if (typeof str !== "string") return str;
    return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
  };

  const fromArray = (arr) => {
    const result = {};

    for (const [key, value] of arr) {
      const processedKey = shouldCamelify ? kebabToCamel(key) : key;

      if (Array.isArray(value) && currentDepht > 1) {
        currentDepht = currentDepht - 1;
        result[processedKey] = fromArray(value);
      } else {
        result[processedKey] = value;
      }
    }

    return result;
  };

  const camelifyKeys = () => {
    shouldCamelify = true;
    return { fromArray, toDepth };
  };

  const toDepth = (value) => {
    currentDepht = value;
    return { fromArray, camelifyKeys };
  };

  return {
    fromArray,
    camelifyKeys,
    toDepth,
  };
};

const result1 = makeObject().camelifyKeys().toDepth(3).fromArray(data);
const result2 = makeObject().toDepth(3).camelifyKeys().fromArray(data);
