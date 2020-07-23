// 1. Named function declaration - makes it a statement
function namedFunction() {}

// 2. Named function expression - it's an expression, because we assign it to a variable; the whole line is still a statement
const namedFunctionExpression = function named() {}

// 3. Anonymous function expression - it's an expression, because we assign it to a variable; the whole line is still a statement
const anonymousFunction = function () {}

// 4. Arrow function - it's an expression, because we assign it to a variable; the whole line is still a statement
const arrowFunction = () => {}

// 5. IIFE - Immediately Invoked Function Expression
(function () {
  console.log('this one is not being called')
});

(function (type) {
  console.log(type)
})('anonymous');

(function named(type) {
  console.log(type)
})('named');

((type) => console.log(type))('arrow');


const name = 'osh'

const f1 = (name) => f2('king', name)
const f2 = (title, name) => `${title} ${name}`

function named() {
  return name
}
const anonym = function () {
  return name
}
const arrow = () => name


// Inner function
function addSquares(a, b) {
  function square(x) { return x * x; }
  return square(a) + square(b);
};

const addSquares2 = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};


module.exports = {
  f1,
  f2,
  named,
  anonym,
  arrow,
  addSquares,
}