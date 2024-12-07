//Leetcode 268

function Missing(nums){
    if(nums.length === 0) return;

    nums = nums.sort((a,b)=>a-b)
    for(let i = 0;i<=nums.length;i++){
        if(i === nums[i]) return i
    }
}