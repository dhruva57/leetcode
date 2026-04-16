// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (s, t) {
//   if (s.length != t.length) return false;

//   let cs = new Map(),
//     ct = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let vs = s[i],
//       vt = t[i];
//     cs.set(vs, (cs.get(vs) || "") + `${i}`);
//     ct.set(vt, (ct.get(vt) || "") + `${i}`);
//   }

//   return JSON.stringify([...cs.values()]) == JSON.stringify([...ct.values()]);
// };

// copied
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    // Use objects to act as Hash Maps for tracking character indices
    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // If the characters' last seen positions do not match, 
        // the structural pattern is broken.
        if (mapS[charS] !== mapT[charT]) {
            return false;
        }

        // Save the 1-based index of the current character
        mapS[charS] = i + 1;
        mapT[charT] = i + 1;
    }

    return true;
};