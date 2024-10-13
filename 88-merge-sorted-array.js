/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  while (i < m + n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      j++;
    }
    i++;
  }

  while (j < n) {
    nums1[m + j] = nums2[j];
    j++;
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);
