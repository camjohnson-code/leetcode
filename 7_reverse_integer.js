// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

const reverse = (x) => {
  let num;

  if (x > 0) num = parseInt(x.toString().split('').reverse().join(''));
  else num = -parseInt(x.toString().split('').reverse().join(''));

  if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) return 0;
  else return num;
};

console.log(reverse(-123)); // -321
