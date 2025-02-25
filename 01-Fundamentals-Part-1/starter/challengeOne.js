// Part One Challenge One
// Mark and John BMI Comparison

// 1

let massMark, massJohn, heightMark, heightJohn;

massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

// 2
const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

// 3
console.log(bmiMark, bmiJohn);

//4
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

/*
TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// There's definitely a better way to do this outside of each of the required steps of this challenge.
