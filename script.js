const buttons = document.querySelectorAll('button');

/**let number1 = '';
let buffer2 = '';


let makeOperation = (operation) =>{
  if (document.querySelector('.output').innerHTML === ''){
    buffer2+=operation;
    document.querySelector('.output').innerHTML = number1+' '+buffer2;
    number1 = ''
    buffer2 = ''
  }
  else{
    buffer2+=operation;
    let lastbuffer = parseInt(
      document.querySelector('.output').innerHTML.slice(0, -1));

    console.log(lastbuffer); 
    number1 = ''
    buffer2 = ''
  }

  //buffer2+=operation;
  //document.querySelector('.output').innerHTML = number1+' '+buffer2;
  //number1 = ''
  //buffer2 = ''
}

let updateScreen = () =>{
  document.querySelector('.input').innerHTML = number1;
}
**/

let addNumber = (number) =>{
  numberBuffer+=number
  document.querySelector('.input').innerHTML = numberBuffer;
}

let makeOperation = (operation) =>{
  if (outputBuffer != ''){
    
  }
  else{
    operationBuffer = operation
    outputBuffer = numberBuffer + ' ' + operationBuffer;
    document.querySelector('.output').innerHTML = outputBuffer;
    numberBuffer = '';
  }
}



let numberBuffer = '';
let operationBuffer = '';
let outputBuffer = '';

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonContent = button.innerHTML;

    if(parseInt(buttonContent)){
      addNumber(buttonContent)
    }
    else{
      makeOperation(buttonContent);
    }
  });
});