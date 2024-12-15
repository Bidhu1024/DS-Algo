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































function sorted(nums){
    if(nums.length === 0) return;

   let counter = 0
   for(let i = 0;i<nums.length;i++){
    if(nums[i] > nums[(i+1) % nums.length]){
        counter ++
    }

    if(counter > 1){
        return false
    }
   }
return true
}

let ans = sorted([6,1,2,4,5])
console.log(ans)