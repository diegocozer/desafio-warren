const numbers = [];
let possibility = 0;

//Preenchendo valores na lista
for (let i = 0; i <= 1000; i++) {
  numbers.push(i);
}
//Apresentar os números
numbers.forEach((number) => {
  const reverseNumber = reverse(number);
  const value = number + reverseNumber;
  //Apresenta se for impar
  if (value % 2 == 0) {
  } else {
    console.log(value);
    possibility++;
  }
});
console.log(possibility);

//Método para reverter o número informado
function reverse(number) {
  let result = 0;
  let counter = 0;
  for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;
  }
  return result;
}
