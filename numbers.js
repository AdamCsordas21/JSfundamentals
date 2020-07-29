function strToNumber(array) {
  return isNaN(array) ? 0 : Number(array)
}

module.exports = {
  strToNumber
}