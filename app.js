function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function difference(a, b) {
  return Math.abs(a - b);
}

function divide(a, b) {
  return b == 0 ? 0 : a / b;
}

console.log(divide(5, 10));
console.log(difference(5, 10));
