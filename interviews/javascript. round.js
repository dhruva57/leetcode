// Write output for the below js questions

// Q1.
(function () {
  for (var i = 0; i < 3; i++) {
    // 0, 0
    // 1, 1000
    // 2, 2000
    setTimeout(() => console.log(i), i * 1000);
  }
})();

// Your Answer:: 
// 0
// 1
// 2

// =========================================================
// Q2. Write output to the console statements below
console.log(1 + "2" + 3); // error

console.log(1 + 2 + "3"); // error

console.log(Boolean([])); // true

console.log(Boolean("")); // false

console.log(Boolean(" ")); // true

console.log(typeof NaN); //

console.log(NaN === NaN); // false

// =========================================================
// Q3. Write output to the consoles
function outer() {
  let count = 10;

  return function () {
    count++;
    return count;
  };
}

const fn = outer();

console.log(fn());
console.log(fn());

// Your Answer::
// 11
// 12


// =========================================================
// Q4. write o/p for function calls below
const obj1 = { name: "Harry" };
const obj2 = { name: "David" };

function greet(a, b) {
  console.log(this.name, a, b);
}

const boundFn = greet.bind(obj1, 1);

boundFn(2); // Harry 1 2
boundFn.call(obj2, 3); // Harry 1 { name: "David" }
boundFn.apply(obj2, [4]); // David [4]

// Your Answer::

// =========================================================
// Q5. write the order of execution

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

// Your Answer::
// P2
// P1
// T1
// T2


const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, purchases: [100, 200] },
  { id: 2, name: "Bob", age: 17, isActive: true, purchases: [50] },
  { id: 3, name: "Charlie", age: 30, isActive: false, purchases: [300, 100] },
  { id: 4, name: "David", age: 22, isActive: true, purchases: [] },
  { id: 5, name: "David", age: 20, isActive: true, purchases: [200, 100] },
];
// q1: unique name only
// q2: total amount of purchases by active user above age 17

// let uniqueUsers = {},
//   amt = 0;
// for (let item of users) {
//   if (!uniqueUsers[item.name]) {
//     uniqueUsers[item.name] = item;
//     if (item.age > 18 && item.isActive) {
//       let sum = 0;
//       for (let val of item.purchases) {
//         sum += val;
//       }
//       amt += sum;
//     }
//   }
// }

// console.log({ uniqueUsers, amt });
const arr = [1, [2, 3], [4, [5, 6]], 7];
// Q: flat this list without using .flat()

// let res = [];
// const returnElements = (list, res) => {
//   for (let item of list) {
//     console.log({ itemType: typeof item });
//     if (typeof item == "object" && item.length > 0) {
//       returnElements(item, res);
//     } else {
//       res.push(item);
//     }
//   }
// };
// returnElements(arr, res);
// console.log({ res });


// Q: what is event loop
// Q: difference between Flatlist and scrollview
// Q: how would you optimise a page