let fizzBuzz = i =>
  i % 15 === 0 ? "fizzBuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i;
export const numToArr = num =>
  Array.from({ length: num }, (_, i) => fizzBuzz(i + 1));
