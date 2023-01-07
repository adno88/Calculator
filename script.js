const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const sign = document.querySelector('.screenSign');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let result = '';

function showNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '' && currentNumber.innerHTML.includes('')) return currentNumber.innerHTML = '.0';

    currentNumber.innerHTML += this.textContent;
}

function calculate() {
    if(currentNumber.innerHTML === '' && this.textContent ==='-') {
        currentNumber.innerHTML = '-';
        return;
    }
    else if (currentNumber.innerHTML === '') {
        return;
    }
}

function showResult() {

}

function clearScreen() {

}

//nasłuchiwacze

buttonsOperators.forEach((button) => button.addEventListener('click', calculate))

equals.addEventListener('click', showResult);

clear.addEventListener('click', clearScreen);

buttonsNumbers.forEach((button) => {
    button.addEventListener('click', showNumbers)
})