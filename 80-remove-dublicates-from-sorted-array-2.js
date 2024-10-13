/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let i = 1;
  let deleteCount = 0;

  while (i < nums.length) {
    if (nums[i - 1] === nums[i]) {
      deleteCount++;
      i++;
    } else {
      if (deleteCount > 1) {
        nums.splice(i - deleteCount + 1, deleteCount - 1);
        i -= deleteCount - 2;
      } else {
        i++;
      }
      deleteCount = 0;
    }
  }

  if (deleteCount > 1) {
    nums.splice(i - deleteCount + 1, deleteCount - 1);
  }

  console.log(nums);
  return nums.length;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3]);
