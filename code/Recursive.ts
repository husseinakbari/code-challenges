function factorial(n: number): number {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

// factorial(5) //1*2*3*4*5

function fibonacci(n: number): number {
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// fibonacci(5) 0,1,2,3,5,8,13
