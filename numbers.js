function strToNumber(input) {
  return isNaN(input) ? 0 : Number(input)
}

module.exports = {
  strToNumber
}