function groupAnagrams(strs) {
  const hash = new Map();
  for (const word of strs) {
    const sorted = word.split("").sort().join("");
    hash.set(sorted, hash.has(sorted) ? [...hash.get(sorted), word] : [word]);
  }
  return [...hash.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
