const compare = (a: any, b: any): boolean => {
  if (Object.is(a, b)) return true;

  if (typeof a !== typeof b) return false;

  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (const i in a) {
      return compare(a[i], b[i]);
    }
  }

  // Objects
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;

    if (!compare(a[key], b[key])) return false;
  }

  return true;
};

compare({ name: "G", family: "R" }, { name: "G", family: "R" });
