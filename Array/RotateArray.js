let arr = [1, 2, 3, 4, 5, 6, 7];
let noOfRotation = 2;

function Rotate(nums, k) {
  if (nums.length === 0) return;
  if (k > nums.length) k = k % nums.length; //jadi k ra value length ru bada then modulus operator use karahaba
  let deletedNumber = nums.splice(nums.length - k);
  for (let i = 0; i < deletedNumber.length; i++) {
    nums.splice(i, 0, deletedNumber[i]);
  }
  console.log(nums);
}

Rotate(arr, noOfRotation);
