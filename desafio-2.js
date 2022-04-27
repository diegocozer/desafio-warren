let textResult = document.querySelector('.text-result')
const necessaryStudents = 3;
let regularClass = 0;
let arrivalTime = [];
let input;
//Armazena os valores
for (i = 0; i < necessaryStudents; i++) {
  input = window.prompt("Insira quanto tempo de atraso");
  arrivalTime.push(input);
}
//compara se os valores são inferior a 0 e incrementa
for (j = 0; j < arrivalTime.length; j++) {
  arrivalTime[j] <= 0 ? regularClass++ : null;
}
//compara a quantidade de alunos estão no horario
regularClass >= necessaryStudents
  ? textResult.innerHTML = "Aula Normal"
  : textResult.innerHTML = "Aula Cancelada"

// FORMA MAIS "SIMPLIFICADA" ME FOI ENTENDIDO DAS DUAS FORMAS
const arrivalTimer = [-2, -1, 0, 3, 4];
let counstStudent = 0;

arrivalTimer.forEach((time) => {
  if (time <= 0) {
    counstStudent++;
  }
});
if (counstStudent >= necessaryStudents) {
  console.log("Aula Normal");
} else {
  console.log("Aula Cancelada");
}
