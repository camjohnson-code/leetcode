// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear
// in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

const reverseVowels = (s) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = Array.from(s);
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) left++;
    else if (!vowels.has(arr[right])) right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
};

console.log(reverseVowels('hello'));
