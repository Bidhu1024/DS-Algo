class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        if(arr.length === 0) return;
        if(arr.length === 1) return arr[0];
        
       let max = arr[0];
       
       for(let i = 0;i<arr.length;i++){
           if(arr[i+1]>max){
               max = arr[i+1];
           }
       }
       return max
    }
}




















function Largest(arr){
    if(arr.length === 0) return;
    if(arr.length === 1) return arr[0];// corner cases

    let max = arr[0];

    for(let i = 0 ;i<arr.length;i++){
        if(arr[i+1] > max){
            max = arr[i+1]
        }
    }
    return max

}

















// Revision 2

function Largest(nums){
    if(nums.length === 0){
return
    }

    let max = nums[0];
    for(let i = 1;i<nums.length;i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }
}