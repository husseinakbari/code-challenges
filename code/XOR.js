function singleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}

singleNumber([2, 2, 1]); // 1
singleNumber([4, 1, 2, 1, 2]); // 4
singleNumber([1]); // 1
