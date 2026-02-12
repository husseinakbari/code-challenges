function add() {
  return function (a: number, b?: number) {
    if (typeof b === "number") {
      return a + b;
    }
    return function (c: number) {
      return a + c;
    };
  };
}
// console.log( add(5,7) ) // 12
// console.log( add(5)(7) ) // 12
// console.log( add(3)(7) ) // 10
