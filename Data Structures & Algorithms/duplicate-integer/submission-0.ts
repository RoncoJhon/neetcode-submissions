class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap: Map<number, number> = new Map([]);
        for (let i = 0; i < nums.length; i++) {
            const numsMapContainsValue = numsMap.has(nums[i]);
            if(numsMapContainsValue) {
                return true;
            }
            else {
                numsMap.set(nums[i],i);
            }
        }
        return false;
    }
}
