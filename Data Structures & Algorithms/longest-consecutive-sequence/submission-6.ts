class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) { return 0 };
        if (nums.length === 1) { return 1 };
        const sortedNums = nums.sort((a, b) => a - b);
        if (sortedNums[0] === sortedNums[sortedNums.length-1]) { return 1 };

        let biggestLength = 0;
        if(sortedNums.length){
            biggestLength=1;
        }
        let currentLength = 0;

        for (let i = 0; i < sortedNums.length + 1; i++) {
            if (sortedNums[i + 1] - sortedNums[i] === 1) {
                if (currentLength === 0) {
                    currentLength = 2;
                }
                else {
                    currentLength++;
                }
                if (currentLength > biggestLength) { biggestLength = currentLength; }
            }
            else if (sortedNums[i + 1] !== sortedNums[i]) {
                currentLength = 0;
            }
           
        }
        return biggestLength;
    }
}
