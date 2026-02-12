function MathChallenge(num) {
  const arrayNum = String(num).split("");

  let biggest = 0;

  for (let i = 0; i < arrayNum.length - 1; i++) {
    const num = arrayNum[i] + arrayNum[i + 1];

    if (+num > +biggest) biggest = +num;
  }

  return biggest;
}

MathChallenge(365223311);

// Input: 453857
// output 85

// Input: 365223311
// Output: 65
