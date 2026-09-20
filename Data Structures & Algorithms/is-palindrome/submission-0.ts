class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(ss: string): boolean {
        const s = ss.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let indexLeft = 0;
        let indexRight = s.length - 1;
        while (indexLeft <= indexRight) {
            if (s[indexLeft] !== s[indexRight]) {
                return false;
            }
            indexLeft++;
            indexRight--;
        }
        return true;
    }
}
