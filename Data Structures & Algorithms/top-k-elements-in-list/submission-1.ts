class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsCounter: Map<number, number> = new Map([]);
        for (let i = 0; i < nums.length; i++) {
            if (numsCounter.has(nums[i])) {
                numsCounter.set(nums[i], numsCounter.get(nums[i]) + 1);
            } else {
                numsCounter.set(nums[i], 1);
            }
        }
        const numsCounterOrdered: Map<number, number> = new Map(
            [...numsCounter.entries()].sort((a, b) => b[1] - a[1]),
        );
        const resultTopKFrequent = [...numsCounterOrdered.entries()].slice(0, k).map((a) => a[0]);
        return resultTopKFrequent;
    }
}
