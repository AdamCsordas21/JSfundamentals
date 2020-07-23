/*
ACRONYMS TO LEARN
DRY
YAGNI
TDD
SOLID
Testing piramid
WET
*/




let i = 0;

for (let i; i >= 10; i++) {
  console.log(i)
}

console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)


const x = -65 // you will never know when osh will come around and change the value


if (x > 0) {
  console.log("positive")
} else if (x < 0) {
  console.log("negative")
} else {
  console.log('zero')
}

if (THIS()) {
  doThis()
} else if (SOMETHING_ELSE()) {
  doSomethingElse()
} else {
  yetAnotherCase()
}

/*
if (this is truthy) {
  do this
} else [otherwise, but] if (this is truthy) {
  do this
} else {
  do this
}
*/


for (let i = 10; i > 0; i--) { console.log(i) }

/*
for (prepare this; this is truthy; do this at the end) {
  continue doing this
}
*/


while (somethingGoodIsHappening()) {
  console.log("I'm happy")
}

/*
while (this is truthy) {
  continue doing this
}
// this is falsy - stop doing that
*/

/*
do {
  this
} while(this is thruthy)
*/
do {
  console.log("I'm happy")
} while (somethingGoodIsHappening())

let j = 10;
while (j > 0) {
  console.log(j)
  j--
}

// print the numbers from -5 to 5
for (let i = -5; i <= 5; i++) {
  console.log(i)
}

// print the numbers from 100 to 95
for (let i = 100; i >= 95; i--) {
  console.log(i)
}


// HOMEWORK
// 1. print list of even numbers from 1 to 15
// 2. ???
// 3. ???

// either 1 + 2 that work OR 1 + 4 that don't work


// Homework 1.
// prints list of even numbers from 1 to 15
for (let i = 1; i < 15; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// HOMEWORK 2.
// prints the numbers from 25 to 55

// for loop
for (let i = 25; i <= 55; i++) {
  console.log(i)
}

// while loop
i = 25
while (i <= 55) {
  console.log(i++);
}

//do ... while loop
i = 25
do {
  console.log(i++)
} while (i <= 55)


// prints the numbers that divisible by 3 between 25 and 55
for (let i = 25; i < 55; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}


// Homework 3. (index.js - line 1, index.spec.js - line 68) - Aovid high skill rated players
// if player has more than 1400 points, it's high skill level (AVOID!)
// if player has lower than 1400 points, it's a low skill level (PLAY!)


// pure functions
function add(a, b) { // pure
  return a + b
}

function sayHi() { // pure
  return 'hi'
}

function add(a, b) { // pure
  return `a + b = ${a + b}`
}

function getRandomNumber() { // not pure
  return Math.rand()
}

function tellMe(what) { // not pure
  console.log(what)
  return `I'm telling you ${what}!`
}


/*
1 byte = 8 bits

bit?
1
0

byte?
10101011
01011100
00000000 = 0
11111111 = 255

0 -> 0 * 2^0 -> 0 * 1   -> 0
0 -> 0 * 2^1 -> 0 * 2   -> 0
0 -> 0 * 2^2 -> 0 * 4   -> 0
0 -> 0 * 2^3 -> 0 * 8   -> 0
0 -> 0 * 2^4 -> 0 * 16  -> 0
0 -> 0 * 2^5 -> 0 * 32  -> 0
0 -> 0 * 2^6 -> 0 * 64  -> 0
0 -> 0 * 2^7 -> 0 * 128 -> 0
---------           sum -> 0

00011010 = 26
0 -> 0 * 2^0 -> 0 * 1   -> 0
1 -> 1 * 2^1 -> 1 * 2   -> 2
0 -> 0 * 2^2 -> 0 * 4   -> 0
1 -> 1 * 2^3 -> 1 * 8   -> 8
1 -> 1 * 2^4 -> 1 * 16  -> 16
0 -> 0 * 2^5 -> 0 * 32  -> 0
0 -> 0 * 2^6 -> 0 * 64  -> 0
0 -> 0 * 2^7 -> 0 * 128 -> 0
---------           sum -> 26


11111111 = 26
1 -> 1 * 2^0 -> 1 * 1   -> 1
1 -> 1 * 2^1 -> 1 * 2   -> 2
1 -> 1 * 2^2 -> 1 * 4   -> 4
1 -> 1 * 2^3 -> 1 * 8   -> 8
1 -> 1 * 2^4 -> 1 * 16  -> 16
1 -> 1 * 2^5 -> 1 * 32  -> 32
1 -> 1 * 2^6 -> 1 * 64  -> 64
1 -> 1 * 2^7 -> 1 * 128 -> 128
---------           sum -> 255

kilobyte = 1024 bytes // kilo - 1000
megabyte = 1024 kilobytes = 1,048,576 bytes
gigabyte = 1024 megabytes = 1,048,576 kilobytes = 1,073,741,824 bytes

ASCII = American Standard Code for Information Interchange



function decToBin(n) {
  return n.toString(2).padStart(8, '0')
}
function decToChar(n) {
  return String.fromCharCode(n)
}

for ( let i = 0; i < 128; i++) {
  console.log(i, decToBin(i), decToChar(i))
}
*/

// recursive function

// What is an expression in JS?
// What is a statement in JS? (bonus)
// What is the returned value of a given expression?
// What is the precedence of operators (which de facto dictate the order of expressions to be evaluated in)?

// the value of a variable holding a string is that string
// the value of a variable holding a number is that number
// the value of a variable holding an array is a reference to that array - this is why it allows us to mutate the value
// the value of a variable holding an object is a reference to that object - this is why it allows us to mutate the value