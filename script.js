const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const sign = document.querySelector('.screenSign');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let result = '';

//nasłuchiwacze

buttonsOperators.forEach((button) => button.addEventListener('click', calculate))

equals.addEventListener('click', result);

clear.addEventListener('click', clearScreen);

buttonsNumbers.forEach((button) => {
    button.addEventListener('click', showNumbers)
})