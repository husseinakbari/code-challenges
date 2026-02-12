//Remove all duplicates from an array of integers

function removeDuplicates(arr: number[]): number[] {
  const uniqueArr: number[] = [];
  for (const num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
}

let arr = [
  42, 12, 58, 44, 66, 77, 88, 94, 42, 44, 66, 94, 35, 63, 78, 91, 27, 80, 61,
  50,
];
