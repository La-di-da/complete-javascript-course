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
*/

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

console.log(isIsland, population, country, language);
