// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of
// bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all
// of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

const minEatingSpeed = (piles, h) => {
  if (piles.length === h) return Math.max(...piles);

  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);

  while (minSpeed < maxSpeed) {
    let midSpeed = Math.floor((minSpeed + maxSpeed) / 2);
    let hours = 0;

    for (let pile of piles) {
      hours += Math.ceil(pile / midSpeed);
    }

    if (hours > h) minSpeed = midSpeed + 1;
    else maxSpeed = midSpeed;
  }

  return minSpeed;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
