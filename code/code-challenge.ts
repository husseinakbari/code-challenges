function removeDublicate(arr: number[]): number[] {
  let obj: Record<number, number> = {};
  const result = [];

  for (const key of arr) {
    if (!(obj[key] in obj)) {
      obj[key] = 1;
      result.push(key);
    }
  }

  return result;
}

function addingNumber(...items: number[]) {
  return items.reduce((prev, curr) => prev + curr, 0);
}

function charCount(value: string): boolean {
  let obj: Record<string, number> = {};

  for (const char of value) {
    obj[char] = (obj[char] ?? 0) + 1;
  }

  const array = Object.values(obj);
  console.log(array);

  let uniqueArray = [...new Set(array)];

  if (uniqueArray.length === 1) return true;

  uniqueArray = uniqueArray.sort();

  console.log(uniqueArray);

  if (uniqueArray.length === 2) {
    return uniqueArray[1] - uniqueArray[0] === 1;
  }

  return false;
}

function MathChallenge(num: string) {
  const arr = num.split("");
  let bigest = "0";

  for (let i = 0; i < arr.length - 1; i++) {
    const value = arr[i] + arr[i + 1];
    if (+value > +bigest) {
      bigest = value;
    }
  }

  return bigest;
}
