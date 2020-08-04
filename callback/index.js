function sum(num1, num2) {
  return num1 + num2;
}
function calcular(numA, numB, callback) {
  return callback(numA, numB);
}
console.log(calcular(2, 3, sum));

function fecha(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printFecha(date) {
  console.log(date);
}
fecha(printFecha);
