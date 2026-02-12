function ArrayChallenge(arr: Array<number>) {
  const target = arr[0];
  const nums = arr.slice(1);
  const seen = new Set<number>();
  const pairs: string[] = [];

  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push(`${complement},${num}`);
    }
    seen.add(num);
  }

  return pairs.join(" ");
}

// Input: [17,4,5,6,10,11,4,-3,-5,3,15,2,7]
// Output: 6,11 10,7 15,2

// Input: [7,6,4,1,7,-2,3,12]
// Output: 6,1 4,3
