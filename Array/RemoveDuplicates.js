var removeDuplicates = function(nums) {
    //corner case
    if(nums.length === 0) return;

    let unique = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[unique]){
            unique++;
            nums[unique] = nums[i]
        }
    }
    return unique+1
};

console.log(removeDuplicates([1,1,2]))