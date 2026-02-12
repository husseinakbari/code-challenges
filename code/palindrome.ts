function isPalindrome(x: number): boolean {
  let number = x.toString();
  let reverse = "";

  for (let i = number.length - 1; i >= 0; i--) {
    reverse += number[i];
  }

  return x === +reverse;
}

isPalindrome(121);
