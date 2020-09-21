export const factorial = (n: number): number => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

module.exports = {
  factorial
}