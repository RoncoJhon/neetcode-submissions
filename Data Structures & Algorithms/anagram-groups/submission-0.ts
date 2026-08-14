class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const finalMap: Map<string, string[]> = new Map([]);
        const result = [];
        for (let i = 0; i < strs.length; i++) {
            const currentString = strs[i];
            const currentStringSorted = strs[i].split("").sort().join();
            //console.log("currentStringSorted", currentStringSorted);

            const currentArrayFromMapElement = finalMap.get(currentStringSorted);
            if (!finalMap.has(currentStringSorted)) {
                finalMap.set(currentStringSorted, [currentString]);
            } else {
                const updatedArrayFromMapElement = [...currentArrayFromMapElement, currentString];
                finalMap.set(currentStringSorted, updatedArrayFromMapElement);
            }
        }
        // console.log("finalMap", finalMap);
        for (const [sortedString, arrayOfStrings] of finalMap) {
            // console.log("sortedString", sortedString);
            result.push(arrayOfStrings);
        }
        return result;
    }
}
