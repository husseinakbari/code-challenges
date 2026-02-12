const x = {
  name: "John",
  age: 25,
  address: {
    city: "Example City",
    country: "Example Country",
  },
  hobbies: ["reading", "coding"],
  hello() {
    console.log("Hello");
  },
};

function deepCopy(obj: any) {
  //base case
  if (typeof obj !== "object" || obj === null) {
    if (typeof obj === "function") return obj.bind({});
    return obj;
  }

  const copy: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

deepCopy(x);
