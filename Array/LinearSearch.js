function LinearSearch(nums,k){
    if(nums.length === 0) return;
for(let i = 0;i<nums.length;i++){
    if(nums[i] === k){
        return true
    }
}
return false
}