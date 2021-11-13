/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const n = nums.length;

  // 如果想空间换时间可以忽略这一步， 直接创建一个长度为n的数组
  let maxValue = minValue = nums[0];
  for (let i = 1; i < n; i++) {
      maxValue = Math.max(maxValue, nums[i]);
      minValue = Math.min(minValue, nums[i]);
  }

  let total = maxValue - minValue + 1;
  let arr = new Array(total).fill(0);

  for (let i = 0; i < n; i++) {
      arr[nums[i] - minValue] += 1;
  }

  let result = [];
  while (k > 0) {
      let cur = findMaxValue(arr);
      result.push(cur + minValue);
      k--;
  }

  return result;
};

var findMaxValue = function(nums) {
  const n = nums.length;
  let maxValue = nums[0], maxIndex = 0;
  
  for (let i = 1; i < n; i++) {
      if (nums[i] > maxValue) {
          maxValue = nums[i];
          maxIndex = i;
      }
  }

  nums[maxIndex] = 0;
  return maxIndex;
};