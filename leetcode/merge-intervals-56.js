/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// copied
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let mergedArr = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i],
      lastMerged = mergedArr[mergedArr.length - 1];

    if (current[0] <= lastMerged[1]) {
      mergedArr[mergedArr.length - 1] = [
        lastMerged[0],
        Math.max(lastMerged[1], current[1]),
      ];
    } else {
      mergedArr.push(current);
    }
  }

  return mergedArr;
};

// var merge = function (intervals) {
//   let i = 0;
//   while (i < intervals.length - 1) {
//     let j = i + 1,
//       merged = false;
//     while (j < intervals.length) {
//       let val1 = intervals[i],
//         val2 = intervals[j];

//       if (
//         (val1[0] >= val2[0] && val1[0] <= val2[1]) ||
//         (val1[1] >= val2[0] && val1[1] <= val2[1]) ||
//         (val2[0] >= val1[0] && val2[0] <= val1[1]) ||
//         (val2[1] >= val1[0] && val2[1] <= val1[1])
//       ) {
//         let mergedArr = val1.concat(val2);
//         intervals[i] = [Math.min(...mergedArr), Math.max(...mergedArr)];
//         intervals.splice(j, 1);
//         merged = true;
//       } else {
//         j++;
//       }
//     }
//     if (!merged) {
//       i++;
//     }
//   }

//   return intervals;
// };
