type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
