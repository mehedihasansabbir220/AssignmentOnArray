/**
 * Function to calculate the maximum profit from buying and selling a stock.
 * @param {number[]} prices - Array where prices[i] is the price of a given stock on the ith day.
 * @return {number} - Maximum profit that can be achieved. If no profit is possible, returns 0.
 */
function calculateMaxProfit(prices) {
    // Initialize variables to track the minimum price and maximum profit
    let minPrice = Infinity;
    let maxProfit = 0;

    // Iterate through the array of prices
    for (let currentPrice of prices) {
        // Update the minimum price if the current price is lower than the tracked minimum price
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        // Calculate the potential profit at the current price
        let potentialProfit = currentPrice - minPrice;
        // Update the maximum profit if the potential profit is greater than the tracked maximum profit
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
    }

    // Return the maximum profit achieved
    return maxProfit;
}

// Example 1
console.log(calculateMaxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

// Example 2
console.log(calculateMaxProfit([7, 6, 4, 3, 1])); // Output: 0

/**
 * Time and Space Complexity
-----Time Complexity: O(n)
          We iterate through the array of prices exactly once, making the time complexity linear in relation to the number of elements in the array.
-----Space Complexity: O(1)
          We use a constant amount of extra space regardless of the size of the input array.
 */