// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.

// Return s after reversing it.

// Example 1:
// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

function reverseOnlyLetters(s) {
  let start = 0;
  let end = s.length - 1;
  const chars = s.split('');

  while (start < end) {
    while (
      start < end &&
      (s[start].charCodeAt() < 65 || s[start].charCodeAt() > 90) &&
      (s[start].charCodeAt() < 97 || s[start].charCodeAt() > 122)
    ) {
      start++;
    }

    while (
      start < end &&
      (s[end].charCodeAt() < 65 || s[end].charCodeAt() > 90) &&
      (s[end].charCodeAt() < 97 || s[end].charCodeAt() > 122)
    ) {
      end--;
    }

    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }

  return chars.join('');
}

console.log(reverseOnlyLetters('ab-cd')); // "dc-ba"
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // "Qedo1ct-eeLg=ntse-T!";
console.log(reverseOnlyLetters('7_28]')); // "7_28]"
