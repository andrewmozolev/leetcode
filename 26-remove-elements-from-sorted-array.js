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
    if (nums[i - 1] == nums[i]) {
      deleteCount++;
      i++;
    } else {
      if (deleteCount > 0) {
        nums.splice(i - deleteCount, deleteCount);
        i -= deleteCount + 1;
        deleteCount = 0;
      } else {
        i++;
      }
    }
  }

  if (deleteCount > 0) {
    nums.splice(i - deleteCount, deleteCount);
  }

  return nums.length;
};
