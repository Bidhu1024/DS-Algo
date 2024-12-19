function bestTime(nums){
    let maxProfit = 0;
    let todayProfit = 0;
    for(let i = 0;i<nums.length;i++){
        
        for(let j = i+1;j<nums.length;j++){
                todayProfit = todayProfit - nums[j]
            
            if(todayProfit > maxProfit){
                maxProfit = todayProfit
            }
        }
    }
    return maxProfit
}

let ans = bestTime([7,1,5,3,6,4])
console.log(ans)