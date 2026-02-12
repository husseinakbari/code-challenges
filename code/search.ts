function binarySearch(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid; // Element found, return its index
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
