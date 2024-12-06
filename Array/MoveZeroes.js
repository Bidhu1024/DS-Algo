/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0] */

function MoveZeroes(nums){
if(nums.length === 0) return;
if(nums.length === 1) return nums[0];

let unique = 0;
for(let i = 0;i<nums.length;i++){
    if(nums[i]!==0){
        nums[unique] = nums[i];
        unique++;
    }
}
for(let i = unique;i<nums.length;i++){
    nums[i] = 0
}
return nums;
}

console.log(MoveZeroes([1,0,2,3,0,0,6,9,0,9,6,0]))