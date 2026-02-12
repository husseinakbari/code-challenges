function plusOne(digits: Array<number>) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    }

    digits[i] = 0;
    if (i === 0) digits.unshift(1);
  }

  return digits;
}

plusOne([1, 2, 9]); // [1,2,4]
plusOne([4, 3, 2, 1]); // [4,3,2,2]
plusOne([9]); // [1,0]
plusOne([9, 9]); // [1,0,0]
plusOne([0]); // [1]
