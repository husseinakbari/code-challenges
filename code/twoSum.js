function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map[needed] !== undefined) {
      return [map[needed], i];
    }

    map[nums[i]] = i;
  }
}

twoSum([2, 7, 11, 15], 9);
