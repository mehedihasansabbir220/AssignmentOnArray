/**
 * Function to find the indices of two numbers in an array that add up to a given target.
 * @param {number[]} nums - Array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - Indices of the two numbers that add up to the target.
 */
function findTwoSumIndices(nums, target) {
    // Create a map to store the complement of each number and its index
    let numToIndexMap = new Map();

    // Iterate through the array
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        let currentNum = nums[currentIndex];
        let complement = target - currentNum;

        // Check if the complement exists in the map
        if (numToIndexMap.has(complement)) {
            // Return the indices if the complement is found
            return [numToIndexMap.get(complement), currentIndex];
        }

        // Add the current number and its index to the map
        numToIndexMap.set(currentNum, currentIndex);
    }

    // This line should never be reached as there is always one solution
    throw new Error("No solution found");
}

// Example 1
console.log(findTwoSumIndices([2, 7, 11, 15], 9)); // Output: [0, 1]

// Example 2
console.log(findTwoSumIndices([3, 2, 4], 6)); // Output: [1, 2]

// Example 3
console.log(findTwoSumIndices([3, 3], 6)); // Output: [0, 1]

/* 
* Time Complexity: O(n)
 ----We iterate through the array once, making the time complexity linear in relation to the number of elements in the array.
* Space Complexity: O(n)
----We use a hash map to store the indices of the elements we have seen so far, which can grow to the size of the input array in the worst case.

*/