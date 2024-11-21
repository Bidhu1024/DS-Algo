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