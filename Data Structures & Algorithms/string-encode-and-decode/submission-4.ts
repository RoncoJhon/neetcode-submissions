class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) {
            return ",,,";
        }
        let resultString = "";
        for (let i = 0; i < strs.length; i++) {
            const addedEncodingPart = i === strs.length - 1 ? "" : ",,,";
            const stringToAdd = strs[i] === "" ? "..." : strs[i];
            resultString += stringToAdd + addedEncodingPart;
        }
        return resultString;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === ",,,") {
            return [];
        }
        const resultArrayOfStrings: string[] = str.split(",,,");
        return resultArrayOfStrings.map(s=>s.replace("...",""));
    }
}
