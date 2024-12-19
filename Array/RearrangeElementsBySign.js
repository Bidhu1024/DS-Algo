//leetcode 2149 
//[3,1,-2,-5,2,-4] - > [3,1,2] [-2,-5,-4] --> [3,-2,1,-5,2,-4]

var rearrangeArray = function(nums) {
    if(nums.length === 0) return;
let pos = [];
let neg = [];
let finalArr = []
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>0){
pos.push(nums[i])
        }else{
            neg.push(nums[i])
        }
        
    }
    for(let i = 0;i<pos.length;i++){
        finalArr.push(pos[i],neg[i])
    }
    return finalArr
};
let ans = rearrangeArray([3,1,-2,-5,2,-4])
console.log(ans)