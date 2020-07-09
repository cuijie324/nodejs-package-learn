/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let length = nums.length;
    let oldLength = length;
    if (length < 2) return nums.length;

    let old = nums[0];
    nums[length++] = old;
    for (let i = 1; i < oldLength; i++) {
        if (nums[i] !== old) {
            nums[length++] = nums[i];
            old = nums[i];
        }
    }

    let n = 0;
    while (n++ < oldLength) {
        nums.shift();
    }
    // nums.splice(0, oldLength); //比使用shift慢

    return nums.length;
};

let nums = [1, 1, 2, 3, 3, 5];

let length = removeDuplicates(nums);
console.log(length, nums);
