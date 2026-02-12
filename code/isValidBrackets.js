// ()[]{}

function isValidBrackets(s) {
  if (typeof s !== "string") return false;

  const stack = [];
  const openToClose = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const ch of s) {
    if (ch in openToClose) {
      stack.push(ch);
    } else {
      const lastOpen = stack.pop();
      if (!lastOpen) return false;
      if (openToClose[lastOpen] !== ch) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets("()[]{}")); // true
console.log(isValidBrackets("(]")); // false
console.log(isValidBrackets("([{}])[][]]")); // true
