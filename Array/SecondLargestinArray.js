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