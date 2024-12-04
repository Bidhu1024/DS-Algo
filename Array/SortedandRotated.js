//leetcode 1752

var check = function(nums) {
    if(nums.length === 0) return;
let n = nums.length;
    let breakpoint = 0;

    for(let i = 0;i<n;i++){
        if(nums[i]>nums[(i+1) % n]){
            breakpoint++;
        }
         if(breakpoint > 1){
        return false
    }
    }

   
    return true
};













// check if rotated

let arr = [1,1,1,1];

function checkSorted(array){
for(let i= 0;i<array.length;i++){
    if(array[i]>array[i+1]){
        return false;
    }
}
return true;
}

console.log(checkSorted(arr))