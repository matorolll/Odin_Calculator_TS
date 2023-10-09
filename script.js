const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonContent = button.innerHTML;
    console.log(buttonConte)


    console.log('Kliknięto przycisk '+ buttonContent);
  });
});