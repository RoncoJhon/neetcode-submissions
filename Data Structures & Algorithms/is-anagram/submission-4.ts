class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }
        const charMapWithCounterOfS: Map<string, number> = new Map([]);
        const charMapWithCounterOfT: Map<string, number> = new Map([]);
        for (let i = 0; i < s.length; i++) {
            if (!charMapWithCounterOfS.has(s[i])) {
                charMapWithCounterOfS.set(s[i], 1);
            } else {
                const counter = charMapWithCounterOfS.get(s[i]);
                charMapWithCounterOfS.set(s[i], counter + 1);
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (!charMapWithCounterOfT.has(t[i])) {
                charMapWithCounterOfT.set(t[i], 1);
            } else {
                const counter = charMapWithCounterOfT.get(t[i]);
                charMapWithCounterOfT.set(t[i], counter + 1);
            }
        }
        // console.log("charMapWithCounterOfS", charMapWithCounterOfS);
        // console.log("charMapWithCounterOfT", charMapWithCounterOfT);

        let result = true;
        charMapWithCounterOfS.forEach((value, key) => {
            //console.log(value, key);
            if (
                !charMapWithCounterOfT.has(key) ||
                (charMapWithCounterOfT.has(key) &&
                    charMapWithCounterOfT.get(key) !== charMapWithCounterOfS.get(key))
            ) {
                // console.log("gaaaaaaa");
                result = false;
            }
        });
        return result;
    }
}
