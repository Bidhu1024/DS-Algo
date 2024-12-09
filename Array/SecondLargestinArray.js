class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
    
    if(arr.length < 2) return -1
    
    let max = -1;
    let secMax = -1
    
    for(let num of arr){
        
        if(num > max){
            secMax = max;
            max = num;
        }else if(num > secMax && num < max){
            secMax = num
        }
    }
    
    return secMax === -1 ? -1 : secMax
    
    }
}






// revision 1

function SecLAr(arr){
    if(arr.length < 2) return -1;
let max = -1;
let secMax = -1;

for(let num of arr){
    if(max>num){
        secMax = max;
        max = num
    }else if(num > secMax && num < max){
        secMax = num
    }
}
return secMax === -1 ? -1 : secMax
}




















function SecMax(nums){
    if(nums.length < 2) return -1;

    let secMax = -1;
    let max = -1

    for(let i = 0;i<nums.length;i++){
        if(nums[i] > max){
            secMax = max;
            max = nums[i]
        }else if(nums[i] < max && nums[i] > secMax){
            secMax = nums[i]
        }
    }
    return secMax
}

console.log(SecMax([1,3,7,8,24,28,9]))