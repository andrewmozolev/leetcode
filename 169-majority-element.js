/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorityEl = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majorityEl = num;
    }

    count += num === majorityEl ? 1 : -1;
  }

  return majorityEl || 0;
};

majorityElement([1, 1, 1, 2, 2, 2, 2, 3, 3]);
