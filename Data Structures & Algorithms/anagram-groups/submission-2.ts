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
            const currentArrayFromMapElement = finalMap.get(currentStringSorted);
            if (!finalMap.has(currentStringSorted)) {
                finalMap.set(currentStringSorted, [currentString]);
            } else {
                const updatedArrayFromMapElement = [...currentArrayFromMapElement, currentString];
                finalMap.set(currentStringSorted, updatedArrayFromMapElement);
                // PUEDE SER ASÍ en lugar de las 2 líneas de arriba:
                // finalMap.get(currentStringSorted)!.push(currentString);
            }
        }
        for (const [sortedString, arrayOfStrings] of finalMap) {
            result.push(arrayOfStrings);
        }
        return result;
    }
}