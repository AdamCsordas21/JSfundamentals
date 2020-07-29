function strToNumber(input) {
  return isNaN(input) ? 0 : Number(input)
}

function strToInteger(input, base) {
  return parseInt(input, base)
}

module.exports = {
  strToNumber,
  strToInteger
}