var firstNumber = 0;
var secondNumber = 0;
var calculate = document.getElementById('btnCalculate');
var output = document.getElementById('output');

document.getElementById('firstNumberInput').addEventListener('input', function(e){
  firstNumber = e.target.value;
  console.log(firstNumber);
});

document.getElementById('secondNumberInput').addEventListener('input', function(e){
  secondNumber = e.target.value;
  console.log(secondNumber);
});

calculate.onclick = function(){

  var operatorList = document.getElementById('operatorList');
  var operator = operatorList[operatorList.selectedIndex].value;

  if (operator === "+"){
    output.value = Number(firstNumber) + Number(secondNumber);
  } else if (operator === "-"){
    output.value = Number(firstNumber) - Number(secondNumber);
  } else if (operator === "*"){
    output.value = Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/"){
    output.value = Number(firstNumber) / Number(secondNumber);
  } else if (operator === "%"){
    output.value = Number(firstNumber) % Number(secondNumber);
  }
};
