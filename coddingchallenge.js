'use strict';

// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const newJuliaArr = juliaArr.slice(1, 3);
//   const totalArr = newJuliaArr.concat(kateArr);

//   totalArr.forEach(function (age, num) {
//     if (age >= 3) {
//       console.log(`Dog number ${num + 1} is ${age} years old`);
//     } else {
//       console.log(`Dog number ${num + 1} is still a puppy(${age})`);
//     }
//   });
// };
// checkDogs([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);

// #2 Codding Challenge
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAge);
//   const adults = humanAge.filter(age => age > 18);
//   console.log(adults);
//   const averageHumanAge =
//     adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return averageHumanAge;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
