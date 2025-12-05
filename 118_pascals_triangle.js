// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

function generate(numRows) {
  if (numRows === 1) return [[1]];

  const rows = Array(numRows)
    .fill(null)
    .map(() => []);
  rows[0] = [1];

  for (let i = 1; i < rows.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const left = rows[i - 1][j - 1] ?? 0;
      const right = rows[i - 1][j] ?? 0;
      rows[i][j] = left + right;
    }
  }

  return rows;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
