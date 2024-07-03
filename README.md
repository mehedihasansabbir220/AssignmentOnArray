# Algorithmic Solutions

This repository contains solutions to two algorithmic problems using JavaScript. Each solution is implemented in a separate file, `task1.js` for the Two Sum problem and `task2.js` for the Best Time to Buy and Sell Stock problem.

## Task 1: Two Sum

### Description
Given an array of integers `nums` and an integer `target`, this function returns the indices of the two numbers such that they add up to the target. Each input is assumed to have exactly one solution, and the same element cannot be used twice. The answer can be returned in any order.

### Constraints
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

### Usage
```javascript
const findTwoSumIndices = require('./task1');

// Example 1
console.log(findTwoSumIndices([2, 7, 11, 15], 9)); // Output: [0, 1]

// Example 2
console.log(findTwoSumIndices([3, 2, 4], 6)); // Output: [1, 2]

// Example 3
console.log(findTwoSumIndices([3, 3], 6)); // Output: [0, 1]