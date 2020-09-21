// 1. Named function declaration - makes it a statement
export function namedFunction() {}

// 2. Named function expression - it's an expression, because we assign it to a variable; the whole line is still a statement
export const namedFunctionExpression = function named() {}

// 3. Anonymous function expression - it's an expression, because we assign it to a variable; the whole line is still a statement
export const anonymousFunction = function () {}

// 4. Arrow function - it's an expression, because we assign it to a variable; the whole line is still a statement
export const arrowFunction = () => {}

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


export const name = 'osh'

export const f1 = (name: string): string => f2('king', name)
export const f2 = (title: string, name: string): string => `${title} ${name}`

export function named() {
  return name
}
export const anonym = function () {
  return name
}
export const arrow = () => name


// Inner function
export function addSquares(a, b) {
  function square(x) { return x * x; }
  return square(a) + square(b);
};

export const addSquares2 = (a, b) => {
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