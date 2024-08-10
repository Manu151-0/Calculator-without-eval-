let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let numArray = [];
let secNumArray = [];

let display = document.getElementById('display');

function getNumber(num){
      if(step === 0 || step === 1){
              numArray.push(num);
              step = 1;
              firstNumber = Number(numArray.join(''));
              display.value = firstNumber;
      }
      else if(step === 2){
              secNumArray.push(num);
              secondNumber = Number(secNumArray.join(''));
              display.value = secondNumber;
      }
}

function getOperator(op){
      step = 2;
      operation = op;
}

function clearDisplay(){
       display.value = 0;
       firstNumber = null;
       secNumArray = [];
       secondNumber = null;
       numArray = [];
       step = 0;
       result = 0;
       operation = null;

}

const calculateNumbers = () => {
      if(operation === '+'){
       result = firstNumber + secondNumber;
       display.value = result;
      }
      else if(operation === '-'){
       result = firstNumber - secondNumber;
       display.value = result;
      }
      else if(operation === '*'){
       result = firstNumber * secondNumber;
       display.value = result;
      }
      else if(operation === '/'){
       result = firstNumber / secondNumber;
       display.value = result;
      }

}