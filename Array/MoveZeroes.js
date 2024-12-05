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