/**
 * @param {number} numeric
 * @param {number} degree
 * @return {number} {*}
 */
var numeric = 3;
var degree = 2;
if (typeof(numeric) === 'number' &&
    typeof(degree) === 'number') {
  console.log(numeric + '^' + degree + '=' + power(numeric, degree))
} else {
  console.error('Ошибка'); }
function power(numeric, degree) {
  var result;
  if (degree === 0) {
    result = 1;
  } else {
    result = numeric;
    for (var i = 1; i <= Math.abs(degree)-1; i++) {
      result = result * numeric; }
  } if (degree > 0) {
    return result;
  } else {
    result = 1 / result;
    return result;
  }
}