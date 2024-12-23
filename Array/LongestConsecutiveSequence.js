var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0; // Handle empty input

    nums = [...new Set(nums)].sort((a, b) => a - b); // Remove duplicates and sort
    let longest = 1; // To track the longest sequence
    let currentStreak = 1; // To track the current sequence length

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) { // Check for consecutive numbers
            currentStreak++;
        } else if (nums[i] !== nums[i - 1]) { // Gap detected, reset streak
            if (currentStreak > longest) { // Manually update the longest streak
                longest = currentStreak;
            }
            currentStreak = 1; // Reset current streak
        }
    }

    // Final check after the loop
    if (currentStreak > longest) {
        longest = currentStreak;
    }

    return longest;
};

let arr = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
console.log(arr); // Output: 7
