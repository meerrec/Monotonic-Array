/**
 * Monotonic Array Checker
 * @param {number[]} nums
 * @returns {boolean}
 */
export function isMonotonicArray(nums = []) {
  let i = 0;
  let descAsc = 0;

  while (i <= nums.length) {
    //
    if (nums[i] > nums[i - 1]) {
      if (descAsc === 0) descAsc = 1;
      else if (descAsc === -1) return false;
    }
    //
    else if (nums[i] < nums[i - 1]) {
      if (descAsc === 0) descAsc = -1;
      else if (descAsc === 1) return false;
    }
    i += 1;
  }

  return true;
}
