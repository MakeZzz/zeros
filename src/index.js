module.exports = function getZerosCount(number) {
var number
counter = 0
while (number > 0) {
  number = Math.floor(number/5)
  counter += number
}
return counter
}
