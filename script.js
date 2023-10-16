const buttons = document.querySelectorAll('button');
let output = document.querySelector('.output')
let input = document.querySelector('.input')

let numberBuffer = 0;
let operationBuffer = '';
let lastNumber = 0;

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonContent = button.innerHTML;

    if(parseInt(buttonContent) || buttonContent == 0){
      pressedNumber(buttonContent);
    }
    else{
      pressedOperation(buttonContent);
    }
    //console.log("numberbuffer: "+numberBuffer+" operationBuffer: "+operationBuffer+" lastNumber: "+lastNumber);
    //console.log("numberbuffer: "+typeof numberBuffer +" operationBuffer: "+typeof operationBuffer+" lastNumber: "+typeof lastNumber);
  });
});


let pressedNumber = (number) =>{
  if(/^0+$/.test(numberBuffer)) numberBuffer = '';
  numberBuffer+=parseFloat(number)
  document.querySelector('.input').innerHTML = numberBuffer;
}


let performOperation = (operationBuffer) =>{
  switch (operationBuffer) {
    case '+':
      lastNumber = parseFloat(lastNumber) + parseFloat(numberBuffer);
      break;
    case '-':
      lastNumber = parseFloat(lastNumber) - parseFloat(numberBuffer);
      break;
    case 'x':
      lastNumber = parseFloat(lastNumber) * parseFloat(numberBuffer);
      break;
    case '/':
      lastNumber = parseFloat(lastNumber) / parseFloat(numberBuffer);
      break;
    case 'Pow':
      lastNumber = parseFloat(lastNumber) ** parseFloat(numberBuffer);
      break;
    case 'Mod':
      lastNumber = parseFloat(lastNumber) % parseFloat(numberBuffer);
      break;                    
    default: break;
  }
  output.innerHTML = lastNumber + " " + operationBuffer;
  numberBuffer = 0;
  input.innerHTML = numberBuffer;
}


let pressedOperation = (operation) =>{
  switch (operation) {
    case 'Clear':
      if(output.innerHTML == '') output.innerHTML = '';
      else output.innerHTML = lastNumber;
      operationBuffer = ''
      input.innerHTML = numberBuffer = 0;
      break;

    case 'Reset':
      if(output.innerHTML == '') output.innerHTML = '';
      else output.innerHTML = lastNumber = operationBuffer = '';
      input.innerHTML = numberBuffer = 0;
      break;

    case '+/-':
      input.innerHTML = numberBuffer *= -1;
      break;

    case ',':
      if (!numberBuffer.includes('.')) input.innerHTML = numberBuffer += '.';
      break;

    case '=':
      performOperation(operationBuffer);
      break;
      
    default:
      if(output.innerHTML == ''){
        operationBuffer = operation;
        lastNumber = numberBuffer;
        output.innerHTML = numberBuffer + " " + operation;
        input.innerHTML = numberBuffer = 0;
      }

      else{
        operationBuffer = operation;
        output.innerHTML = lastNumber + " " + operation
      }
  }
}