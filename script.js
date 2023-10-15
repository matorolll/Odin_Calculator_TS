const buttons = document.querySelectorAll('button');


let addNumber = (number) =>{
  console.log("adding number")
  if(/^0+$/.test(numberBuffer)){ //preventing only zero
    numberBuffer = '';
  }

  numberBuffer+=number
  document.querySelector('.input').innerHTML = numberBuffer;
}




let makeOperation = (operation) =>{
  console.log("making operation")
  if(document.querySelector('.output').innerHTML == ''){
    document.querySelector('.output').innerHTML = 0
  }


  if(operation === "Reset"){
    console.log("reset")
  }
  if(operation === "Clear"){
    console.log("clear")
  }


  if(operation === "="){
    console.log("wykoknaj")
    operationBuffer = '';
    lastNumber = parseInt(lastNumber) + parseInt(numberBuffer);
    numberBuffer = 0;
    document.querySelector('.output').innerHTML = lastNumber;
    document.querySelector('.input').innerHTML = '';

  }
  if(operation === "+"){
    console.log("dodawaj")

  }



  else{
    operationBuffer = operation
    lastNumber = numberBuffer;
    document.querySelector('.output').innerHTML = lastNumber + ' ' + operationBuffer;
    numberBuffer = 0;
    document.querySelector('.input').innerHTML = numberBuffer;

  }
}

let numberBuffer = 0;
let operationBuffer = 0;
let lastNumber = 0;

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonContent = button.innerHTML;

    if(parseInt(buttonContent) || buttonContent == 0){
      addNumber(buttonContent);
    }
    else{
      makeOperation(buttonContent);
    }
    console.log("numberbuffer: "+numberBuffer+" operationBuffer: "+operationBuffer+" lastNumber: "+lastNumber);
    console.log("numberbuffer: "+typeof numberBuffer +" operationBuffer: "+typeof operationBuffer+" lastNumber: "+typeof lastNumber);

  });
});