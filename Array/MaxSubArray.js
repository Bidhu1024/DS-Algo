// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


function maxSubArray(nums){
    if(nums.length === 0) return
    if(nums.length === 1) return nums[0];

    let sum = 0;
    let maxSum = nums[0];

    for(let i = 0;i<nums.length;i++){
        sum = sum+nums[i];
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum<0) sum = 0
    }
    return maxSum
}

// Time Complexity = 0(n)