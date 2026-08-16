class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        const outputLeft: number[] = [];
        const outputRight: number[] = [];

        outputLeft[0] = 1;
        outputRight[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            outputLeft[i] = outputLeft[i - 1] * nums[i - 1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            outputRight[i] = outputRight[i + 1] * nums[i + 1];
        }
        //console.log("outputLeft", outputLeft);
        //console.log("outputRight", outputRight);

        for (let i = 0; i < nums.length; i++) {
            output[i] = outputLeft[i] * outputRight[i];
        }

        /*for (let i = 0; i < nums.length; i++) {
            let currentMultiplication = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    currentMultiplication *= nums[j];
                }
            }
            output.push(currentMultiplication);
        }*/

        return output;
    }
}
