class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const uniqueNumbersObject = {};
        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i];
            const numberToFind = target - currentNumber;
            if (numberToFind in uniqueNumbersObject) {
                return [uniqueNumbersObject[numberToFind], i];
            } else {
                uniqueNumbersObject[currentNumber] = i;
            }
        }
    }
}
