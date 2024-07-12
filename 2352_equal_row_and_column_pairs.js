// 2352. Equal Row and Column Pairs

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Example 2:
// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

const equalPairs = (grid) => {
  const rowMap = new Map();

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i].join(',');

    if (rowMap.has(row)) rowMap.set(row, rowMap.get(row) + 1);
    else rowMap.set(row, 1);
  }

  let count = 0;

  for (let j = 0; j < grid.length; j++) {
    let column = [];

    for (let k = 0; k < grid.length; k++) {
      column.push(grid[k][j]);
    }

    const colStr = column.join(',');

    if (rowMap.has(colStr)) count += rowMap.get(colStr);
  }

  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
