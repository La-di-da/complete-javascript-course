/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// 11. Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//12. Let, const Var 

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Cloete"; // not best practice don't be doing this
console.log(lastName);


// 13. Basic Operators

// Maths Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2** 3 means to the power of 3 = 2 * 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmetman";
console.log(firstName + " " + lastName); //there is a better way to do this called template strings, will learn later. eager for this. whoop

// Assigment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// 14. Operator Precedence -- pretty much basic maths precedence holds up -- can always check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Going through challenge one. How Jonas would have done it. Compare to how YOU did it.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
// This is where big difference is - you made these let because they would change. Jonas used const since knew would not be changing them. I saw 2 test values and assumed would want to accomodate for change down the line since this datatype isn't best for this type of problem anyway.

const BMIMark = massMark / heightMark ** 2; // it bugs me that this is not camel case
// There was a specific note on the challenge NOT to do this since the site would not accept it.
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI); // I logged this on a seperate line - silly oversight.

/*
//////////// Assignments Part1 ////////
/// Values & Variables + let, const & var
const country = "RSA";
const continent = "Africa";
let population = 60000000;

// console.log(country, continent, population);

/// Data Types
const isIsland = false;
let language;

// let, const & var
language = "Zulu";

// basic operators
//1
const populationHalved = population / 2;
console.log(isIsland, population, country, language, populationHalved);

//2
console.log(population++);
//3
const finlandPopulation = 6000000;
console.log(finlandPopulation < population);

//4
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;

console.log(description);
*/
