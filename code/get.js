function get(object, path) {
  const array = path.replace(/\[(\w+)]/g, ".$1").split(".");

  let result = object;
  for (let key of array) {
    result = result[key];
  }
  return result;
}

console.log(get({ a: [{ b: { c: 3 } }] }, "a[0].b"));
