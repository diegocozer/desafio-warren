let textResult = document.querySelector('.text-result')

const N = prompt('Digite um valor')
const V = [2, 3 , 4];
let values = [];

for (let i = 0; i < V.length; i++) {
  const number = V[i];

  if (N % number == 0) {
    values.push(getNumberArray(N, number));
  }
}

function getNumberArray(n, number) {
  let array = [];
  let divide = n / number;
  
  for( i = 0; i <divide; i++){
      array.push(number)
    }
    return array
}
console.log(values)



